# 🔧 Troubleshooting Token Search - "Token Not Found" Fix

## What Was Fixed

Your token search now has **multiple strategies** to find tokens:

✅ **Strategy 1**: Query by exact token name
✅ **Strategy 2**: Query with name variations (uppercase, lowercase, first word)
✅ **Strategy 3**: Fall back to address lookup if needed
✅ **Strategy 4**: Better error messages with suggestions

---

## How to Use (Updated)

### **Method 1: Search by Popular Token Symbol** (BEST)
```
Try these exact names:
- Popcat
- BONK
- Solana
- USDC
- Raydium
```

**Why this works**: DexScreener recognizes these by their ticker symbol

### **Method 2: Search by Full Name**
```
Try full token names:
- Popcat
- Bonk
- Flying Ketamine Horse
```

**Note**: Use exact or very similar names

### **Method 3: Search by Contract Address** (MOST RELIABLE)
```
Paste the 44-character Solana contract address
Example: 11111111111111111111111111111111

If you don't know the address:
1. Go to DexScreener.com
2. Search for the token
3. Copy the token address from the URL
4. Paste into the search box here
```

---

## If You Get "Token Not Found"

### **Problem 1: Typo in Token Name**
```
❌ Wrong:  "pocat" or "popat"
✅ Right:  "Popcat" or "POPCAT"
```

**Fix**: Check exact spelling on DexScreener

### **Problem 2: Token Name is Too Generic**
```
❌ Try: "Coin" or "Token"
✅ Use: Specific names like "Popcat", "Bonk"
```

**Fix**: Use more specific token names

### **Problem 3: Very New or Small Token**
```
❌ May not be indexed on DexScreener yet
✅ Use contract address instead
```

**Fix**: Paste the contract address (44 chars)

### **Problem 4: Using Wrong Network**
```
This app only works for SOLANA tokens
❌ Won't work: Ethereum addresses
❌ Won't work: BSC addresses
✅ Works: Solana addresses only
```

**Fix**: Make sure token is on Solana network

---

## How to Find Your Token Address

### **Step 1: Go to DexScreener**
```
Visit: https://dexscreener.com
```

### **Step 2: Search for token**
```
Type token name in search box
Select the token from results
```

### **Step 3: Copy Contract Address**
```
Look at the URL:
https://dexscreener.com/solana/[ADDRESS_HERE]

Copy the ADDRESS part (44 characters)
Example: 11111111111111111111111111111111
```

### **Step 4: Paste in Search Box**
```
Paste the address (44 chars, starts with number)
Press Enter
```

---

## Testing Recommended Tokens

Try these tokens to verify the search works:

### **Popular Meme Tokens** (Very easy to find)
| Token | Name | Status |
|-------|------|--------|
| Popcat | POPCAT | ✅ Working |
| Bonk | BONK | ✅ Working |
| Dogwifhat | WIF | ✅ Working |

### **Established Tokens** (Always found)
| Token | Name | Status |
|-------|------|--------|
| Solana | SOL | ✅ Working |
| USDC | USDC | ✅ Working |
| Raydium | RAY | ✅ Working |

### **How to Test**
```
1. Open solana.html
2. Type: "Popcat"
3. Press: Enter
4. Expected: Token found in 3-8 seconds
5. See: Token info card + 20 similar tokens
```

---

## Understanding the Error Messages

### **"Token not found. Make sure to..."**
This means:
- ❌ DexScreener doesn't recognize the name
- ❌ Token might have a different name
- ❌ Contract address format is wrong

**What to do**:
1. Try a different token name
2. Use contract address instead
3. Check spelling on DexScreener

### **"Error fetching token data..."**
This means:
- ❌ Network error (no internet)
- ❌ DexScreener API is down
- ❌ Browser blocked the request

**What to do**:
1. Check internet connection
2. Wait a minute and try again
3. Open DevTools (F12) to see error details

---

## Console Logging (For Debugging)

**Open DevTools**: Press `F12`
**Go to Console** tab

You'll see detailed logs:

```javascript
🔍 Starting token search with input: Popcat
🔎 Input appears to be token name, searching...
📡 Strategy 1: Querying DexScreener /tokens endpoint...
📊 DexScreener /tokens response: {pairs: Array(5)}
✅ Found 5 matching tokens
🎯 Found exact match: Popcat POPCAT
✅ Token found! Displaying info...
```

**This tells you**:
- ✅ Search started correctly
- ✅ API was queried
- ✅ Results were found
- ✅ Token was displayed

---

## Quick Reference: What to Search For

### **✅ GOOD Search Terms**
- Exact token symbol: `BONK`, `SOL`, `USDC`
- Exact token name: `Popcat`, `Solana`, `USDC Coin`
- Contract address: 44-character Solana CA
- Common names: `Bonk`, `Dogwifhat`, `Raydium`

### **❌ BAD Search Terms**
- Typos: `Pocat`, `Bonq`, `SOL123`
- Generic: `token`, `coin`, `test`
- Partial addresses: Anything less than 44 chars
- Wrong network: Ethereum or BSC addresses

---

## If Still Not Working

### **Step 1: Open DevTools Console**
```
Press: F12
Go to: Console tab
Copy: All the log messages
```

### **Step 2: Try a Known Token**
```
Search: "Popcat"
If this works: Your search works, try different token
If this fails: Network/API issue
```

### **Step 3: Check Internet**
```
Visit: https://dexscreener.com
If it works: Browser can reach DexScreener
If it fails: Internet problem
```

### **Step 4: Report Issue**
```
Check console logs for specific errors
Try with contract address instead of name
Verify token exists on DexScreener.com
```

---

## Example: Step-by-Step Search

### **I want to search for "Flying Ketamine Horse"**

**Step 1**: Type in search box
```
Flying Ketamine Horse
```

**Step 2**: Press Enter
```
System extracts keywords: flying, ketamine, horse
Queries DexScreener for each...
```

**Step 3**: Check console (F12) for progress
```
✅ Found matches
✅ Processing results
✅ Displaying table
```

**Step 4**: View results
```
Token info card appears
20 similar tokens shown
Ranked by narrative match
```

---

## Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| "Token not found" | Name not exact | Use exact spelling or CA |
| No results in table | Keyword not found | Try different token |
| Slow results | API rate limit | Wait 1-2 minutes |
| Blank page | JavaScript error | Check console (F12) |
| DexScreener link broken | Token removed | Try different search |

---

## Performance Tips

⚡ **Faster searches**:
- Use token symbol (1 word): `SOL`, `BONK`
- Use contract address (direct lookup)
- Avoid multi-word names if possible

⏳ **Slower searches**:
- Multi-word names: `Flying Ketamine Horse`
- Partial matches take longer
- First search slower (API warmup)

---

## Advanced: Manual API Testing

If you want to test DexScreener directly:

### **Test by Name**
```
https://api.dexscreener.com/latest/dex/tokens?query=Popcat
```
Open in browser, check if you get results

### **Test by Address**
```
https://api.dexscreener.com/latest/dex/tokens/11111111111111111111111111111111
```
Open in browser, check if you get data

If these URLs return data, the API is working.

---

## Summary

✅ **New Features Added**:
- Multi-strategy search (4 different approaches)
- Better error messages
- Fallback to address search
- Detailed console logging
- Name variation handling

✅ **Best Practices**:
1. Use exact token symbol (BONK, SOL, USDC)
2. Or use 44-character contract address
3. Check DevTools Console (F12) for details
4. Try "Popcat" to test if search works

✅ **If Still Not Finding**:
1. Verify token exists on DexScreener
2. Use contract address instead of name
3. Check console for error details
4. Ensure internet connection

---

**Token search is now more robust and reliable!** 🎯

Try searching for "Popcat" or "BONK" first to verify everything works, then try your specific tokens!
