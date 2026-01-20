# ⚡ Quick Start: Developer Dossier

## The Problem
```
Access to fetch at 'https://api.solscan.io/...' 
has been blocked by CORS policy
```

**Why?** Browsers block direct API calls to protect users. We need a backend intermediary.

---

## Quick Fix (2 minutes)

### 1️⃣ Open PowerShell
```powershell
cd c:\Users\dell\betasonchain
```

### 2️⃣ Install once
```powershell
npm install
```

### 3️⃣ Run the backend
```powershell
node get-token-creator.js
```

You should see ✓ **"Running on http://localhost:3001"**

### 4️⃣ Keep this terminal open!

### 5️⃣ In another terminal, open solana.html
- Use VS Code Live Server or any local server
- Search for a token
- Developer Dossier shows creator wallet ✓

---

## Current Status

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend | ✅ Working | Searches tokens via DexScreener |
| Token Info | ✅ Working | Shows market cap, volume, price |
| Developer Dossier | ⚠️ Fallback Mode | Shows partial data without backend |
| Backend Service | 🔧 Ready to Setup | Optional but recommended |

---

## Without Backend (Current)
- ❌ Can't get creator wallet
- ⚠️ Limited developer info
- Shows "Limited Data" badge

## With Backend (After Setup)
- ✅ Full creator wallet address
- ✅ Complete token metadata
- ✅ Shows "Verified" badge
- ✅ Clickable Solscan links

---

## Commands Reference

```powershell
# Install dependencies (once)
npm install

# Start backend service
node get-token-creator.js

# Test backend in new terminal
Invoke-WebRequest http://localhost:3001/health

# Stop backend
# Press Ctrl+C in the terminal
```

---

## If You Don't Want to Setup Backend

The app still works! It just shows limited creator data. The frontend automatically falls back to:
1. Solscan API (may be blocked)
2. DexScreener API (has some data)

But for **full creator wallet**, setup takes just 2 minutes.

---

## Verification

### Check Backend is Working

Open browser console (F12) when searching a token. You should see:

```
✓ Data retrieved from backend service
```

or

```
Backend service not available: Timeout
(Then tries alternative APIs...)
```

---

## Next: Production Deployment

When ready to deploy publicly:
1. Deploy `get-token-creator.js` to cloud
2. Update `SOLANA_RPC` to use paid provider (Helius)
3. Update frontend to point to cloud URL
4. Add rate limiting

See `DEVELOPER_DOSSIER_SETUP.md` for details.

---

**That's it! 🚀 Enjoy your token analyzer!**
