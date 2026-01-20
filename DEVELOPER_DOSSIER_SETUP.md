# 🚀 Developer Dossier Setup Guide

## Problem: CORS Blocking Creator Wallet Lookup

The Solscan API blocks direct browser requests due to CORS (Cross-Origin Resource Sharing) policy. This prevents fetching the token creator's wallet address directly from the frontend.

## Solution: Backend Service

We've created a **Node.js backend service** that queries the Solana blockchain directly for token creator information.

---

## Setup Instructions

### Step 1: Install Node.js (if not already installed)

**Windows:**
```powershell
# Using Chocolatey
choco install nodejs

# Or download from: https://nodejs.org
```

**Verify installation:**
```powershell
node --version
npm --version
```

### Step 2: Install Dependencies

Navigate to your project folder and run:

```powershell
cd c:\Users\dell\betasonchain
npm install
```

This will install:
- `@solana/web3.js` - Solana blockchain SDK
- `express` - Web server framework
- `cors` - CORS middleware

### Step 3: Start the Backend Service

```powershell
node get-token-creator.js
```

You should see:
```
╔════════════════════════════════════════════════════════════════╗
║     Solana Token Creator Lookup Service                       ║
║     Running on http://localhost:3001                           ║
║                                                                ║
║     Endpoints:                                                 ║
║     - GET  /token-info/:address   - Fetch token creator       ║
║     - GET  /health               - Health check               ║
╚════════════════════════════════════════════════════════════════╝
```

### Step 4: Test the Backend

In a new terminal window, test the API:

```powershell
# Test with USDC token
Invoke-WebRequest -Uri "http://localhost:3001/token-info/EPjFWaLb9j7JJCZ5jLDkLQrREvnfjz78LsuUSciEBj8" -Method GET
```

You should get a JSON response with creator info!

### Step 5: Use Frontend

1. Keep the backend service running in PowerShell
2. Open `solana.html` in your browser
3. Search for any token - the Developer Dossier will now show:
   - ✅ Creator wallet address
   - ✅ Token decimals
   - ✅ Total supply
   - ✅ Link to Solscan

---

## How It Works

### API Flow

```
Frontend (solana.html)
    ↓
    [Tries local backend service first]
    ↓ (if backend running)
    ↓
Backend Service (get-token-creator.js)
    ↓
    [Queries Solana blockchain]
    ↓
Solana RPC Endpoint (api.mainnet-beta.solana.com)
    ↓
    [Returns token data]
    ↓
Frontend displays creator info ✓
```

### Fallback Chain

If backend isn't running:
1. ❌ Backend Service (localhost:3001) - Not available
2. ⚠️ Solscan API - Blocked by CORS
3. ✅ DexScreener API - Used as fallback (but limited data)

**Pro Tip:** Backend service gives the most accurate creator information!

---

## Example API Responses

### Successful Response

```json
{
  "success": true,
  "data": {
    "address": "EPjFWaLb9j7JJCZ5jLDkLQrREvnfjz78LsuUSciEBj8",
    "owner": "2CXSuNQq2t8jN2XcPR74Ydvi2Wm4f24vhFpqFvhvCZs",
    "creator": "2CXSuNQq2t8jN2XcPR74Ydvi2Wm4f24vhFpqFvhvCZs",
    "supply": "1000000000000",
    "decimals": 6,
    "isInitialized": true,
    "freezeAuthority": null,
    "mintAuthority": "2CXSuNQq2t8jN2XcPR74Ydvi2Wm4f24vhFpqFvhvCZs",
    "timestamp": "2025-12-27T10:30:45.123Z"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Invalid Solana address format",
  "address": "invalid-address"
}
```

---

## Production Deployment

For production, use a faster RPC provider:

**Option 1: Helius (Recommended)**
```javascript
const SOLANA_RPC = 'https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY';
```

**Option 2: QuickNode**
```javascript
const SOLANA_RPC = 'https://your-quicknode-url';
```

**Option 3: Triton (Triton One)**
```javascript
const SOLANA_RPC = 'https://triton-api.triton.one/';
```

Get free API keys from:
- Helius: https://dev.helius.xyz
- QuickNode: https://www.quicknode.com
- Triton: https://www.triton.one

---

## Troubleshooting

### "Backend service not available"
- Make sure you ran `node get-token-creator.js`
- Check if PowerShell window with backend is still open
- Verify it says "Running on http://localhost:3001"

### "Invalid Solana address format"
- Token address must be a valid base58 Solana address
- Must be exactly 44 characters long (for most tokens)
- Example valid address: `EPjFWaLb9j7JJCZ5jLDkLQrREvnfjz78LsuUSciEBj8`

### "Token not found on blockchain"
- The token address might be incorrect
- The token might not exist on mainnet
- Try on a token explorer like https://solscan.io

### Slow responses
- Public RPC endpoint is rate-limited
- Use a paid RPC provider (Helius, QuickNode) for better performance
- Responses should be <1 second with paid providers

### CORS errors still appear
- Check that backend service is running on port 3001
- Frontend tries backend first, then falls back to public APIs
- Check browser console (F12) for detailed error messages

---

## Running in Development vs Production

### Development (Current Setup)
```bash
# Terminal 1: Start backend
node get-token-creator.js

# Terminal 2: Open frontend
# Open solana.html in browser with live server
```

### Production
- Deploy backend to cloud (Heroku, AWS, Vercel)
- Update frontend to point to cloud endpoint
- Use paid RPC provider
- Add authentication/rate limiting

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `node get-token-creator.js`
3. ✅ Search tokens in frontend
4. 🎉 Developer Dossier now shows creator wallets!

---

## Support

**Frontend Issue?** Check `solana.html` console (F12)
**Backend Issue?** Check terminal output from `get-token-creator.js`
**Solana Issue?** Visit https://solana.com or https://solscan.io

---

*Last Updated: December 27, 2025*
*Status: Production Ready with Optional Backend Enhancement*
