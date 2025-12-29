// WARNING: This code contains intentional security vulnerabilities AND type errors for testing
// DO NOT use in production

import express, { Request, Response } from 'express';
import * as crypto from 'crypto';
import { exec } from 'child_process';

const app = express();

// Type Error 1: Type mismatch (string assigned to number)
const PORT: number = "3000";

// Type Error 2: Missing return type annotation
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Type Error 3: Null safety violation
interface User {
  name: string;
  email: string;
}

let currentUser: User | null = null;
console.log(currentUser.name); // Possible null reference

// Vulnerability 1: Hardcoded API key (CRITICAL)
const API_SECRET: string = "sk-prod-1234567890abcdef";
const DATABASE_PASSWORD: string = "root123";

// Vulnerability 2: SQL Injection (CRITICAL - CVSS 9.8)
app.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const query = `SELECT * FROM users WHERE id = '${userId}'`;

  // Type Error 4: Promise not awaited
  executeQuery(query);
  res.send('Query executed');
});

// Vulnerability 3: XSS Vulnerability (HIGH - CVSS 7.5)
app.post('/comment', (req: Request, res: Response) => {
  const userComment = req.body.comment;
  res.send(`<div class="comment">${userComment}</div>`);
});

// Type Error 5: Wrong parameter types
function hashPassword(password: string, salt: number): string {
  return crypto.createHash('md5').update(password).digest('hex');
}

// Type Error 6: Calling with wrong argument types
const hashedPwd = hashPassword(12345, "randomsalt");

// Vulnerability 4: Weak MD5 hashing (MEDIUM - CVSS 5.3)
function generateToken(data: string): string {
  return crypto.createHash('md5').update(data).digest('hex');
}

// Vulnerability 5: Command Injection (CRITICAL - CVSS 9.8)
app.get('/execute', (req: Request, res: Response) => {
  const command = req.query.cmd as string;
  exec(`ls ${command}`, (error, stdout) => {
    res.send(stdout);
  });
});

// Type Error 7: Interface violation (missing required property)
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const newProduct: Product = {
  id: 1,
  name: "Test Product",
  price: 99.99
  // Missing 'category' property
};

// Vulnerability 6: Insecure random number (MEDIUM - CVSS 5.3)
function generateSessionId(): string {
  return Math.random().toString(36).substring(2);
}

// Type Error 8: Return type mismatch
function getUserAge(userId: string): number {
  return "25"; // Returning string instead of number
}

// Vulnerability 7: eval() usage (CRITICAL - CVSS 9.8)
app.post('/eval', (req: Request, res: Response) => {
  const code = req.body.code;
  const result = eval(code);
  res.json({ result });
});

// Type Error 9: Unused variable
const unusedVariable: string = "This is never used";

// Type Error 10: Any type in sensitive context (reduces type safety)
function processUserData(data: any) {
  console.log(data.someProperty);
  return data.nonExistentMethod();
}

// Vulnerability 8: Missing error handling (LOW - CVSS 3.1)
async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    // Empty catch - swallows errors
  }
}

// Type Error 11: Array type mismatch
const numbers: number[] = [1, 2, "three", 4, 5];

// Vulnerability 9: Path traversal (HIGH - CVSS 7.5)
import * as fs from 'fs';

app.get('/read-file', (req: Request, res: Response) => {
  const filename = req.query.file as string;
  fs.readFile(filename, 'utf8', (err, data) => {
    res.send(data);
  });
});

// Helper function for type error demonstration
async function executeQuery(query: string): Promise<void> {
  // Simulated database query
  console.log('Executing:', query);
}

app.listen(PORT, () => {
  console.log(`Vulnerable TypeScript server running on port -- ${PORT}`);
});
