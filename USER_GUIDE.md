# 🎯 User Guide - Search Your First Token in 60 Seconds

## Step-by-Step Visual Guide

### **Step 1: Open the App (10 seconds)**

```
📁 Open Windows Explorer
   └─ Navigate to: C:\Users\dell\betasonchain\
      └─ Double-click: solana.html
         └─ Opens in your default browser
            └─ Wait for page to load
```

**What you see**:
```
┌─────────────────────────────────────────────────────────┐
│  SOLANA TOKEN ANALYZER                                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔍 Search token: name (Flying Ketamine Horse) or...   │
│  ┌──────────────────────────────────┬──────────┐       │
│  │                                  │  Search  │       │
│  └──────────────────────────────────┴──────────┘       │
│                                                          │
│  [Token Info Card - Initially Empty]                    │
│  [Similar Tokens Table - Initially with placeholders]   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

### **Step 2: Click Search Box (5 seconds)**

```
Click on the search input field:
│
└─ You'll see a text cursor blinking
└─ Ready to type
```

---

### **Step 3: Type Token Name (10 seconds)**

```
Type: Flying Ketamine Horse

Result in search box:
┌──────────────────────────────────┐
│ Flying Ketamine Horse            │
└──────────────────────────────────┘
```

**Other examples you can try**:
- `Popcat`
- `Bonk`
- `Dogwifhat`
- `Raydium`
- `Orca`

---

### **Step 4: Press Enter OR Click Search (2 seconds)**

```
Option A: Press ENTER key
Option B: Click the [Search] button

Either way → Triggers the search!
```

---

### **Step 5: Wait for Results (3-8 seconds)**

```
You'll see a loading indicator:
┌────────────────────────────┐
│  🔄 Searching...           │
└────────────────────────────┘

Behind the scenes:
1. ⚙️ Extracting keywords
2. ⚙️ Querying DexScreener API
3. ⚙️ Collecting token data
4. ⚙️ Calculating similarity scores
5. ⚙️ Rendering table
6. ✅ Done!
```

---

### **Step 6: See Results (5-15 seconds)**

```
Token Info Card appears:
┌─────────────────────────────────────────────┐
│  🎯 Flying Ketamine Horse [$HORSE]          │
│  Market Cap: $50.2M | Volume: $2.1M         │
│  24h Change: +5.2% | Liquidity: $5.1M       │
│  Price: $0.00000456                         │
│  [View on DexScreener]                      │
└─────────────────────────────────────────────┘

Similar Tokens Table appears:
┌────┬─────────────┬──────────┬──────────┬──────────┬──────┬─────┐
│ #  │ Asset       │ Match %  │ Cap      │Liquidity │24h   │View │
├────┼─────────────┼──────────┼──────────┼──────────┼──────┼─────┤
│ 1  │ Flying Ket. │ 100% ████│ $50.2M   │ 🔵 Deep  │ +5% │→   │
│ 2  │ Horse DAO   │ 75%  ███ │ $30.1M   │ 🔵 Deep  │ -2% │→   │
│ 3  │ Shib        │ 45%  ██  │ $100M    │ 🔵 Deep  │ +1% │→   │
│ 4  │ ...         │ ...      │ ...      │ ...      │ ... │ ... │
│ 20 │ ...         │ 25%  █   │ $1.2M    │ 🔴 Low   │ -5% │→   │
└────┴─────────────┴──────────┴──────────┴──────────┴──────┴─────┘
```

---

### **Step 7: Explore Results (30+ seconds)**

```
What you can do:

1️⃣ Hover over rows
   └─ Rows highlight for better readability

2️⃣ Read narrative similarity %
   └─ 100% = Exact match
   └─ 75% = Strong similarity
   └─ 45% = Meme category match

3️⃣ Check liquidity status
   └─ 🔵 Deep (>$1M) = Very liquid
   └─ 🟡 High (>$500K) = Good liquidity
   └─ 🟠 Med (>$100K) = Medium liquidity
   └─ 🔴 Low (<$100K) = Risky liquidity

4️⃣ See 24h price change
   └─ 📈 Green = Gaining value
   └─ 📉 Red = Losing value
   └─ Shows percentage change

5️⃣ Click [View →] links
   └─ Opens DexScreener in new tab
   └─ See full token details
   └─ Check trading volume history
   └─ View holder distribution
```

---

## What Each Column Means

### **# (Number)**
```
Ranking from 1-20
1 = Most similar to your search
20 = Least similar but still relevant
```

### **Asset (Token Name)**
```
Token symbol and full name
+ Token icon/logo
Example: $HORSE Flying Ketamine Horse
```

### **Narrative Match %**
```
How similar to your search
Scale: 0% to 100%

Scoring:
- Keyword in name: +25 points each
- Meme category: +20 bonus
- Market cap: +5-15 points
- Liquidity: +5-10 points
```

### **Market Cap**
```
Total value of all tokens
Formatted for readability:
- $50.2B = 50.2 Billion
- $50.2M = 50.2 Million
- $50.2K = 50.2 Thousand

Higher = More established token
Lower = Newer/riskier token
```

### **Liquidity**
```
How easily you can buy/sell

🔵 Deep ($1M+)
   ✅ Easy to trade large amounts
   ✅ Good for big orders

🟡 High ($500K-$1M)
   ✅ Good liquidity
   ⚠️ Slightly higher slippage

🟠 Med ($100K-$500K)
   ⚠️ Moderate liquidity
   ⚠️ Higher slippage possible

🔴 Low (<$100K)
   ⚠️ Very low liquidity
   ❌ Risky to trade
```

### **24h Change**
```
Price movement in last 24 hours

📈 Green positive change
   Example: +5.2%
   Token gaining value

📉 Red negative change
   Example: -2.1%
   Token losing value
```

### **View**
```
Link to DexScreener
Click [View →] to:
- See full token details
- Check trading charts
- View holder information
- See transaction history
- Look at liquidity pools
```

---

## Search Examples & Expected Results

### **Example 1: Meme Token**
```
Search: "Popcat"

Results: 20 cat-themed & meme tokens
Expected matches:
✅ Popcat (100%) - Exact match
✅ Cat Coin (75%) - Has "cat"
✅ Shib (45%) - Meme category
✅ Doge (45%) - Meme category
```

### **Example 2: Narrative Search**
```
Search: "Flying Ketamine Horse"

Results: Tokens with flying, ketamine, or horse
Expected matches:
✅ Flying Ketamine Horse (100%) - All keywords
✅ Horse DAO (75%) - Has "horse"
✅ Flying Fox (75%) - Has "flying"
✅ Psycho Shroom (45%) - Narrative match
```

### **Example 3: Contract Address**
```
Search: "EPjFWaLb3eMsqG2UsRVFzZkenfVm82ySEn63A8crP7b"

Results: USDC token + similar stablecoins
Expected matches:
✅ USDC (Direct lookup)
✅ USDT (Stablecoin)
✅ Tether (Stablecoin)
✅ DAI (Stablecoin)
```

---

## Tips for Best Results

### ✅ DO This
- ✅ Use complete token names ("Flying Ketamine Horse" not "Flying")
- ✅ Search for tokens you've heard of first (Popcat, Bonk)
- ✅ Try multiple searches to see different results
- ✅ Click [View →] links to verify results
- ✅ Use contract address if name search fails
- ✅ Check the console (F12) for debugging

### ❌ DON'T Do This
- ❌ Type random gibberish (no results)
- ❌ Use partial addresses (won't validate)
- ❌ Expect instant results (API takes time)
- ❌ Refresh page during search (will interrupt)
- ❌ Search offline (needs internet)
- ❌ Use special characters (confuses parser)

---

## Troubleshooting Quick Reference

### **Problem: "Token not found"**
```
Try:
1. Check spelling
2. Try a different token
3. Try by contract address
4. Wait a minute (API rate limit)
```

### **Problem: "No similar tokens found"**
```
Try:
1. Use a different token
2. Try "Popcat" as test
3. Check console for errors
4. Ensure internet connection
```

### **Problem: Table is empty or slow**
```
Try:
1. Refresh page (F5)
2. Clear browser cache (Ctrl+Shift+Del)
3. Wait 1-2 minutes (API rate limit)
4. Try different token
```

### **Problem: DexScreener links not working**
```
Try:
1. Check internet connection
2. Wait and try again
3. Copy token address manually
4. Visit DexScreener directly
```

---

## Advanced Features

### **Open DevTools Console (F12)**
```
When you open DevTools Console, you'll see:

🔍 Searching for token by name: Flying Ketamine Horse
✅ Found 5 matching tokens
🎯 Found exact match: Flying Ketamine Horse [HORSE]
📝 Extracted keywords: ['flying', 'ketamine', 'horse']
📡 Querying DexScreener for keyword: "flying"
  ✅ Found 8 tokens
📡 Querying DexScreener for keyword: "ketamine"
  ✅ Found 2 tokens
📡 Querying DexScreener for keyword: "horse"
  ✅ Found 15 tokens
📊 Total tokens collected: 25
✨ Top 20 similar tokens ready

This shows every step of the search process!
```

### **Keyboard Shortcuts**
```
⌘ K or Ctrl + K  = Focus search box (if using PC)
Enter             = Execute search
F12               = Open DevTools (for debugging)
Ctrl + Shift + I  = Alternative to F12
```

---

## FAQ - Frequently Asked Questions

### **Q: How long does a search take?**
A: 3-8 seconds typically. First search slower (API warmup), subsequent searches faster.

### **Q: Is my data private?**
A: Yes. Search queries go to public DexScreener API only. No data stored.

### **Q: Can I search all blockchains?**
A: No, currently Solana only. Other chains (ETH, BNB, etc.) have separate pages.

### **Q: Is the data real-time?**
A: Yes, 100% real-time from DexScreener API (updated every few seconds).

### **Q: Can I save searches?**
A: Not currently, but you can bookmark the page and search again.

### **Q: Why am I getting rate-limited?**
A: DexScreener API has limits. Wait 1-2 minutes and try again.

### **Q: How many tokens can I see?**
A: Top 20 similar tokens per search (best practice UX).

### **Q: Can I filter by market cap?**
A: Currently no, but tokens are sorted by market cap automatically.

### **Q: How do I report bugs?**
A: Check the console (F12) for error messages and details.

---

## Next Level: Understanding the Algorithm

### **How Narrative Matching Works**

```
Step 1: You type "Flying Ketamine Horse"
        ↓
Step 2: System extracts keywords
        Result: [flying, ketamine, horse]
        ↓
Step 3: Search DexScreener for each keyword
        - Query 1: ?query=flying   → 8 tokens
        - Query 2: ?query=ketamine → 2 tokens
        - Query 3: ?query=horse    → 15 tokens
        ↓
Step 4: Collect all 25 tokens
        Remove duplicates → 22 unique
        ↓
Step 5: Score each token
        
        Flying Ketamine Horse:
        - Has "flying": +25
        - Has "ketamine": +25
        - Has "horse": +25
        - Is meme token: +20
        - Market cap $50M: +10
        = 105 points → 100% display
        
        Horse DAO:
        - Has "flying": NO
        - Has "ketamine": NO
        - Has "horse": +25
        - Is meme token: +20
        - Market cap $30M: +10
        = 55 points → 55% display
        ↓
Step 6: Sort by score then market cap
        1. Flying Ketamine Horse (100%)
        2. Horse DAO (55%)
        3. Shib (45%)
        ...
        ↓
Step 7: Display top 20 in table
```

---

## Summary

You now know:
✅ How to search tokens
✅ What each column means
✅ How to read results
✅ How to interpret scores
✅ How to explore further
✅ How to troubleshoot
✅ How the algorithm works

---

## Ready? Let's Go! 🚀

```
1. Open: solana.html
2. Type: "Flying Ketamine Horse"
3. Press: Enter
4. See: 20 similar tokens instantly
5. Click: "View →" to learn more
```

**That's it! Start exploring token narratives! 🎯**

---

**Happy token hunting!** 🚀

The most similar tokens to your search are just 3 clicks away.
