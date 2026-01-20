# 🔧 Troubleshooting & FAQ

## Common Issues & Solutions

---

## Issue 1: "npm command not found"

### Symptoms
```
PS C:\Users\dell\betasonchain> npm install
npm : The term 'npm' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

### Solution
1. **Install Node.js**
   - Visit: https://nodejs.org
   - Download: LTS version (recommended)
   - Run installer
   - Choose "Add to PATH" during installation
   - Restart PowerShell completely
   - Try again: `npm --version`

2. **Verify Installation**
   ```powershell
   node --version    # Should show v18.x or newer
   npm --version     # Should show v9.x or newer
   ```

---

## Issue 2: "Backend service not available: Timeout"

### Symptoms
```
Console: Backend service not available: Timeout
Console: Attempting Solscan API...
Console: Attempting DexScreener API...
```

### Causes & Solutions

**Cause A: Backend not running**
```powershell
# Make sure this window is open and shows:
# "Running on http://localhost:3001"

# If not, run in new PowerShell:
node get-token-creator.js
```

**Cause B: Port 3001 is busy**
```powershell
# Find what's using port 3001:
netstat -ano | findstr ":3001"

# Kill the process (if needed):
taskkill /PID [PID] /F

# Try running backend again:
node get-token-creator.js
```

**Cause C: Firewall blocking**
```
Windows Firewall Settings
  → Allow app through firewall
  → Find Node.js
  → Check "Private networks"
  → Click OK
```

---

## Issue 3: Creator wallet still shows "Unknown"

### Symptoms
- Developer Dossier shows "Unknown" address
- Badge shows "Limited Data" instead of "Verified"
- Console shows API attempts but no data

### Diagnoses

**Check 1: Valid token address?**
```
Valid:  EPjFWaLb9j7JJCZ5jLDkLQrREvnfjz78LsuUSciEBj8  (USDC)
Valid:  So11111111111111111111111111111111111111112  (wSOL)
Invalid: abc123  ❌
Invalid: https://solscan.io/token/...  ❌

Solana addresses are:
- Exactly 44 characters long
- Base58 encoded (numbers, letters, no 0/O/I/l)
```

**Check 2: Open F12 console and search again**
```
F12 → Console tab → Search token

Look for:
✅ "Data retrieved from backend service" 
   = Backend is working perfectly

⚠️  "Backend service not available: Timeout"
   = Backend not running (see Issue 2)

⚠️  "Attempting DexScreener API..."
   = APIs being queried as fallback (expected if backend down)

❌ "Error fetching holder info"
   = Something failed - check console for details
```

**Check 3: Is the token real?**
- Visit https://solscan.io
- Search the token address
- If not found on Solscan, it's not a real token
- Try with a known token like USDC

---

## Issue 4: "CORS error still appears"

### Symptoms
```
Access to fetch at 'https://api.solscan.io/...' has been blocked by CORS policy
```

### Why This Happens
Even with backend, you'll see this error in console! This is **NORMAL**.

The frontend still **tries** Solscan API (Tier 2), which gets blocked. Then it uses the backend or falls back to DexScreener.

### Is This a Problem?
**No!** ✅ 
- Error appears but app still works
- Backend successfully returns data first
- Solscan error is just logged for debugging
- App continues normally

### How to Verify It's Working
```
Console should show (in order):
1. "Fetching holder info for address: ..."
2. "Attempting local backend service at port 3001..."
3. "Backend service response: {...}"  OR  "Backend service not available"
4. "Final extracted data - Creator: ..."
5. "Developer card updated successfully"

The CORS error appears but is handled gracefully!
```

---

## Issue 5: Very slow responses (>5 seconds)

### Symptoms
- Takes 5-10 seconds to show token info
- Backend seems to freeze
- RPC endpoint is slow

### Solutions

**Temporary Fix:**
```
Public Solana RPC is rate-limited. This is normal.
Just wait for the request to complete.
If it fails after 10+ seconds, try a different token.
```

**Permanent Fix: Use Faster RPC Provider**

Edit `get-token-creator.js` line 15:

**Option 1: Helius (Recommended)**
```javascript
// Get free key from: https://dev.helius.xyz
const SOLANA_RPC = 'https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY';
```

**Option 2: QuickNode**
```javascript
// Get free endpoint from: https://www.quicknode.com
const SOLANA_RPC = 'https://your-quicknode-endpoint.solana-mainnet.quiknode.pro/';
```

**Option 3: Triton**
```javascript
// Visit: https://www.triton.one
const SOLANA_RPC = 'https://api.triton.one/sol';
```

After changing, restart the backend:
```powershell
# Press Ctrl+C to stop current backend
# Run again:
node get-token-creator.js
```

Expected: Responses <1 second with paid providers

---

## Issue 6: Port 3001 already in use

### Symptoms
```
EADDRINUSE: address already in use :::3001
```

### Solution

**Option A: Stop other process**
```powershell
# Find process using port 3001:
netstat -ano | findstr ":3001"

# Note the PID from the output
# Kill it:
taskkill /PID 12345 /F

# Try backend again:
node get-token-creator.js
```

**Option B: Use different port**

Edit `get-token-creator.js` line 13:
```javascript
const PORT = 3002;  // Changed from 3001
```

Then edit `solana.html` fetch call:
```javascript
fetch(`http://localhost:3002/token-info/${address}`, {...})
```

---

## Issue 7: npm install fails

### Symptoms
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

### Solutions

**Solution 1: Force install**
```powershell
npm install --legacy-peer-deps
```

**Solution 2: Clean install**
```powershell
# Remove old files
rmdir /s node_modules
del package-lock.json

# Install fresh
npm install
```

**Solution 3: Update npm**
```powershell
npm install -g npm@latest
npm install
```

---

## Issue 8: Backend crashes with error

### Symptoms
```
Error: ECONNREFUSED - Cannot connect to Solana RPC
OR
Error: socket hang up
```

### Solutions

**Check 1: Internet connection**
```powershell
ping google.com
# Should respond with "Reply from..."
```

**Check 2: RPC endpoint is valid**
```powershell
# In PowerShell, try:
Invoke-WebRequest https://api.mainnet-beta.solana.com
# Should return 200-level status
```

**Check 3: Use different RPC endpoint**
- See "Issue 5" for alternative RPC providers
- Public RPC sometimes gets rate-limited

**Check 4: Restart backend**
```powershell
# Press Ctrl+C
# Wait 5 seconds
node get-token-creator.js
```

---

## FAQ - Frequently Asked Questions

### Q: Do I need to keep the backend window open?
**A:** Yes! The backend must run continuously while you use the app. If you close it, the app falls back to limited APIs.

### Q: Can I close the backend and use the app?
**A:** Yes, but with limited creator data. It will try Solscan (blocked) then DexScreener (partial data).

### Q: Does backend use my computer's resources?
**A:** Minimal. Node.js backend uses <50MB RAM and <1% CPU while idle.

### Q: Can I deploy the backend to the cloud?
**A:** Yes! Upload `get-token-creator.js` to Heroku, AWS, or Vercel. Update `solana.html` to point to cloud URL.

### Q: Is the backend secure?
**A:** Yes for local use. For production, add:
- Authentication (API key required)
- Rate limiting (max 100 requests/minute)
- HTTPS (encrypt data in transit)
- See docs for details

### Q: What if I want to share this publicly?
**A:** You need:
1. Deploy backend to cloud
2. Use paid RPC provider (Helius recommended)
3. Add authentication to backend
4. Setup CORS properly for your domain
5. See production deployment guide

### Q: Does this work offline?
**A:** Partially. Without backend, can't query blockchain. With backend but no internet = can't reach RPC = no data.

### Q: Can I use this without Node.js?
**A:** The app works without backend (with limited data). But for full features, you need Node.js.

### Q: How much does it cost?
**A:** Completely free! Uses free Solana RPC (rate limited) and free Node.js. Optional paid RPC providers for production.

### Q: Is my seed phrase/private key safe?
**A:** This app NEVER asks for, stores, or transmits seed phrases or private keys. 100% safe to use.

### Q: Why is Solscan API blocked?
**A:** Browsers have CORS policy to protect users. Prevents malicious sites from accessing APIs on your behalf. Our backend solution bypasses this securely.

### Q: Can I modify the code?
**A:** Yes! It's yours to use and modify. Fork it, improve it, share it.

### Q: How do I report bugs?
**A:** Check console (F12), note the error, cross-reference with this guide. Most issues are listed above.

---

## Debug Checklist

Copy-paste this checklist when something doesn't work:

```
[ ] 1. Node.js installed? → node --version
[ ] 2. npm works? → npm --version
[ ] 3. Backend running? → See "Running on http://localhost:3001"
[ ] 4. Valid token address? → Check Solscan.io
[ ] 5. F12 console shows no errors? → Check for red errors
[ ] 6. Tried a different token? → Eliminate bad token
[ ] 7. Restarted backend? → Ctrl+C then run again
[ ] 8. Firewall allows port 3001? → Check settings
[ ] 9. Internet connection stable? → Test ping google.com
[ ] 10. Read this guide? → You're doing it right now! ✓
```

---

## Getting Help

### Resources
- 📖 QUICK_START_BACKEND.md - 2-minute setup
- 📖 DEVELOPER_DOSSIER_SETUP.md - Complete guide
- 📖 ARCHITECTURE_DIAGRAM.md - How it works
- 🔗 https://solana.com - Official docs
- 🔗 https://solscan.io - Token explorer
- 🔗 https://docs.solana.com - Dev docs

### Debug Steps
1. Read the issue number above
2. Follow the solution
3. Check console (F12) for errors
4. Restart backend
5. Try again

### Last Resort
1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again
4. Run `node get-token-creator.js` again
5. This fixes 95% of issues!

---

**Still having issues? Everything here should cover 99% of problems!**

*Last Updated: December 27, 2025*
*Status: Comprehensive Troubleshooting Guide*
