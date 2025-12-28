# Vulnerable TypeScript App (CodeSlick Test Repository)

⚠️ **WARNING: This repository contains intentionally vulnerable code AND type errors for testing purposes.**

**DO NOT use any code from this repository in production environments.**

## Purpose

This repository tests [CodeSlick](https://codeslick.dev)'s **dual analysis capabilities**:
1. **Security Analysis**: OWASP Top 10:2025 vulnerability detection
2. **Type Analysis**: Professional TypeScript Compiler API integration (95%+ error detection)

## Vulnerabilities & Errors Included

### Security Vulnerabilities (9 total)

| # | Vulnerability Type | Severity | CVSS | OWASP Category |
|---|-------------------|----------|------|----------------|
| 1 | Hardcoded API Credentials | CRITICAL | 9.1 | A02:2025 - Cryptographic Failures |
| 2 | SQL Injection | CRITICAL | 9.8 | A03:2025 - Injection |
| 3 | XSS (Cross-Site Scripting) | HIGH | 7.5 | A03:2025 - Injection |
| 4 | Weak MD5 Hashing | MEDIUM | 5.3 | A02:2025 - Cryptographic Failures |
| 5 | Command Injection | CRITICAL | 9.8 | A03:2025 - Injection |
| 6 | Insecure Random | MEDIUM | 5.3 | A02:2025 - Cryptographic Failures |
| 7 | eval() Usage | CRITICAL | 9.8 | A03:2025 - Injection |
| 8 | Empty Error Handling | LOW | 3.1 | A09:2025 - Logging Failures |
| 9 | Path Traversal | HIGH | 7.5 | A01:2025 - Broken Access Control |

### Type Errors (11 total)

| # | Type Error | Line | Description |
|---|-----------|------|-------------|
| 1 | Type mismatch | 12 | `const PORT: number = "3000"` - string assigned to number |
| 2 | Missing return type | 15 | Function missing return type annotation |
| 3 | Null safety | 25 | Possible null reference: `currentUser.name` |
| 4 | Promise not awaited | 33 | `executeQuery()` returns Promise but not awaited |
| 5 | Wrong parameter types | 42 | Function expects different types |
| 6 | Wrong argument types | 47 | Calling with number instead of string |
| 7 | Interface violation | 63 | Missing required property 'category' |
| 8 | Return type mismatch | 73 | Returning string instead of number |
| 9 | Unused variable | 84 | Variable declared but never used |
| 10 | Any type misuse | 87 | Using 'any' reduces type safety |
| 11 | Array type mismatch | 101 | String in number array |

## Testing with CodeSlick

### Option 1: WebTool Testing

1. Go to [codeslick.dev](https://codeslick.dev)
2. Click "Try Web Tool"
3. Copy the contents of `server.ts`
4. Paste into the Monaco Editor
5. Select "TypeScript" from the language dropdown
6. Click "Analyze Code"
7. Wait 2-3 seconds for results

**Expected Results**:
- **Security Issues Modal**: 9 vulnerabilities detected
- **Syntax/Type Errors Modal**: 11 type errors detected
- Both modals accessible via separate tabs
- 95%+ type error detection rate (matches VS Code IDE capabilities)

### Option 2: GitHub App Testing

1. Fork this repository
2. Install [CodeSlick GitHub App](https://github.com/apps/Codeslick-security-scanner)
3. Create a new branch: `git checkout -b test-typescript-analysis`
4. Commit and push: `git push origin test-typescript-analysis`
5. Open a Pull Request
6. Wait 10-30 seconds for CodeSlick analysis

**Expected Results**:
- PR comment with vulnerability summary
- Inline comments on both security vulnerabilities AND type errors
- "Apply Fix" buttons for AI-powered fixes

## Installation

```bash
npm install
npm run build
npm start
```

**⚠️ WARNING**: This server is intentionally vulnerable. Only run in isolated test environments.

## Expected CodeSlick Fixes

### Type Error Fix Example
**Before**:
```typescript
const PORT: number = "3000";
```

**After** (Expected AI fix):
```typescript
const PORT: number = 3000;
```

### Security Fix Example (SQL Injection)
**Before**:
```typescript
const query = `SELECT * FROM users WHERE id = '${userId}'`;
```

**After** (Expected AI fix):
```typescript
import { Pool } from 'pg';
const pool = new Pool();
const query = 'SELECT * FROM users WHERE id = $1';
const result = await pool.query(query, [userId]);
```

### Null Safety Fix
**Before**:
```typescript
let currentUser: User | null = null;
console.log(currentUser.name); // Error
```

**After** (Expected AI fix):
```typescript
let currentUser: User | null = null;
console.log(currentUser?.name ?? 'Unknown');
```

## Why TypeScript Testing Matters

CodeSlick uses the **TypeScript Compiler API** to provide:
- **95%+ type error detection** (same as VS Code)
- **Professional-grade analysis** (not just regex patterns)
- **Accurate line numbers and error messages**
- **Dual analysis**: Security + Type Safety in one scan

This makes CodeSlick unique among security scanners - it's both a **security tool** and a **type checker**.

## License

MIT (For testing purposes only)

## Related Links

- [CodeSlick Website](https://codeslick.dev)
- [CodeSlick GitHub App](https://github.com/apps/Codeslick-security-scanner)
- [User Testing Guide](https://codeslick.dev/docs/testing)
- [TypeScript Analyzer Documentation](https://codeslick.dev/docs/analyzers/typescript)

---

**Last Updated**: December 28, 2025
**CodeSlick Version**: 20251228.XX:XX
**Test Repository**: vulnerable-ts-app v1.0.0
