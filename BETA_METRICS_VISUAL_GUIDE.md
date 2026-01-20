# 🎯 Beta Metrics Keyword Search - Visual Guide

## Feature Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER SEARCHES FOR TOKEN                      │
│                    (e.g., "Popcat", "BONK")                      │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│               SYSTEM EXTRACTS KEYWORDS                          │
│  ✅ Input: "Popcat"                                              │
│  ✅ Output: ["popcat"]                                           │
│                                                                 │
│  ✅ Input: "Flying Ketamine Horse"                              │
│  ✅ Output: ["flying", "ketamine", "horse"]                    │
│                                                                 │
│  ✅ Removes common words: the, a, an, token, coin, etc.       │
│  ✅ Only keeps words > 2 characters                            │
│  ✅ Removes duplicates                                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│      SEARCH DEXSCREENER FOR EACH KEYWORD                        │
│  📡 Query 1: /tokens?query=popcat                               │
│  📡 Query 2: /tokens?query=flying                               │
│  📡 Query 3: /tokens?query=ketamine                             │
│  📡 Query 4: /tokens?query=horse                                │
│                                                                 │
│  Returns: Results for each keyword                             │
│  Combines: All results into single list                        │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│              FILTER & RANK RESULTS                              │
│  ✅ Remove duplicates (by token address)                       │
│  ✅ Remove original token (exclude searched token)             │
│  ✅ Score by narrative similarity                              │
│  ✅ Sort by market cap                                         │
│  ✅ Limit to top results                                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│        POPULATE BETA METRICS TABLE                              │
│  🎯 Show up to 20 related tokens                               │
│  ✅ Token symbol & name                                        │
│  ✅ Narrative match % (0-100%)                                 │
│  ✅ Market cap                                                 │
│  ✅ Liquidity status (🔵 Deep, 🟡 High, 🟠 Med, 🔴 Low)      │
│  ✅ 24h price change (📈 up, 📉 down)                          │
│  ✅ Direct DexScreener links                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Example

### Scenario: Search for "Popcat"

```
STEP 1: User Input
┌──────────────────┐
│ Search: "Popcat" │
└────────┬─────────┘
         │
         ▼
STEP 2: Extract Keywords
┌──────────────────────────────┐
│ Input: "Popcat"              │
│ Lowercase: "popcat"          │
│ Split: ["popcat"]            │
│ Filter (>2 chars): ["popcat"]│
│ Remove common: ["popcat"]    │
│ ✅ Keywords: ["popcat"]      │
└──────────┬───────────────────┘
           │
           ▼
STEP 3: Search DexScreener
┌──────────────────────────────────────────┐
│ API Call:                                │
│ /latest/dex/tokens?query=popcat          │
│                                          │
│ Results:                                 │
│ 1. Popcat (POPCAT)                      │
│ 2. Popcat V2 (POPCAT2)                  │
│ 3. Popcat Clone (PCAT)                  │
│ 4. Other similar tokens...              │
│ Total: 12 tokens found ✅               │
└──────────┬───────────────────────────────┘
           │
           ▼
STEP 4: Filter Results
┌──────────────────────────────────────────┐
│ Remove original (exclude Popcat itself)  │
│ Remove duplicates                        │
│ Calculate narrative similarity scores    │
│ Sort by score + market cap               │
│                                          │
│ Final Results: 11 tokens                 │
└──────────┬───────────────────────────────┘
           │
           ▼
STEP 5: Display in Table
┌──────────────────────────────────────────┐
│ Beta Discovery Matrix                    │
├──────────────────────────────────────────┤
│ # │ Token      │ Match │ Cap  │ Liquid  │
├──────────────────────────────────────────┤
│ 1 │ Popcat V2  │ 98%   │ $5M  │ 🔵 Deep │
│ 2 │ Popcat Clne│ 95%   │ $1M  │ 🟡 High │
│ 3 │ PCAT Token │ 92%   │ 500K │ 🟠 Med  │
│ 4 │ ...        │ ...   │ ...  │ ...     │
└──────────────────────────────────────────┘
```

## Code Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 displayTokenInfo()                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 1. Extract token data (name, symbol, price, etc)    │  │
│  │ 2. Update main token card                           │  │
│  │ 3. Fetch holder/creator info                        │  │
│  │ 4. Extract keywords from token name                 │  │
│  │ 5. Call populateBetaMetricsWithKeywords()           │  │
│  └──────────┬───────────────────────────────────────────┘  │
└─────────────┼──────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│         extractKeywords(tokenName)                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 1. Convert to lowercase                             │  │
│  │ 2. Split by spaces, dashes, underscores, etc.      │  │
│  │ 3. Filter out common words (the, a, token, etc.)   │  │
│  │ 4. Filter out words < 3 characters                 │  │
│  │ 5. Remove duplicates                               │  │
│  │ 6. Return array of keywords                        │  │
│  └──────────┬───────────────────────────────────────────┘  │
└─────────────┼──────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│    populateBetaMetricsWithKeywords(keywords)                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 1. Log start with keywords                          │  │
│  │ 2. Call searchTokensByKeywords(keywords)            │  │
│  │ 3. Filter out original token                        │  │
│  │ 4. Log results count                                │  │
│  │ 5. Generate HTML for each token                     │  │
│  │ 6. Update table body with HTML                      │  │
│  │ 7. Handle errors gracefully                         │  │
│  └──────────┬───────────────────────────────────────────┘  │
└─────────────┼──────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│    searchTokensByKeywords(keywords)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 1. For each keyword:                                │  │
│  │    - Query DexScreener /tokens?query={keyword}      │  │
│  │    - Collect results                                │  │
│  │ 2. Combine all results                              │  │
│  │ 3. Remove duplicates (by address)                   │  │
│  │ 4. Score by keywords present                        │  │
│  │ 5. Calculate narrative similarity %                 │  │
│  │ 6. Sort by score + market cap                       │  │
│  │ 7. Return top results                               │  │
│  └──────────┬───────────────────────────────────────────┘  │
└─────────────┼──────────────────────────────────────────────┘
              │
              ▼
        ✅ Beta Metrics Table Updated
```

## Example: Multi-Keyword Search

```
INPUT: "Flying Ketamine Horse"

STEP 1: Extract Keywords
"Flying Ketamine Horse"
  ↓ lowercase
"flying ketamine horse"
  ↓ split by spaces
["flying", "ketamine", "horse"]
  ↓ filter common words & length
["flying", "ketamine", "horse"] ✅

STEP 2: Search Each Keyword
┌─────────────────────────┐
│ Keyword 1: "flying"     │
│ Results: 8 tokens       │
├─────────────────────────┤
│ Keyword 2: "ketamine"   │
│ Results: 5 tokens       │
├─────────────────────────┤
│ Keyword 3: "horse"      │
│ Results: 12 tokens      │
└─────────────────────────┘

STEP 3: Combine & Deduplicate
┌─────────────────────────┐
│ All results: 25 tokens  │
│ Remove dupes: 18 tokens │
│ Remove original: 17     │
│ Limit top 20: 17 shown  │
└─────────────────────────┘

STEP 4: Score Results
Token scores based on:
- How many keywords it contains
- Keyword frequency
- Market cap (tiebreaker)
- Liquidity (secondary)

Higher score = higher in list
```

## Table Row Rendering Example

```
For each token, render:

┌─────┬────────────────┬──────────┬──────────┬────────┬────────┬──────────┐
│ #   │ Asset          │ Match %  │ Market   │ Liquid │ 24h Ch │ Action   │
├─────┼────────────────┼──────────┼──────────┼────────┼────────┼──────────┤
│ 1   │ 🖼️ Popcat V2   │ 98%  ███ │ $5.2M    │ 🔵 Deep│ 📈 +12%│ View →   │
│     │    POPCAT2     │ Block 1  │          │        │        │ Link→DX  │
├─────┼────────────────┼──────────┼──────────┼────────┼────────┼──────────┤
│ 2   │ 🖼️ Popcat Clon │ 95%  ███ │ $1.8M    │ 🟡 High│ 📉 -5% │ View →   │
│     │    PCAT        │ Block 1  │          │        │        │ Link→DX  │
├─────┼────────────────┼──────────┼──────────┼────────┼────────┼──────────┤
│ 3   │ 🖼️ Mini Popcat │ 92%  ███ │ $800K    │ 🟠 Med │ 📈 +2% │ View →   │
│     │    MINIPOP     │ Block 2  │          │        │        │ Link→DX  │
└─────┴────────────────┴──────────┴──────────┴────────┴────────┴──────────┘

🖼️ = Token icon from DexScreener
% = Narrative match percentage
█ = Visual bar (width = match %)
Link = Clickable DexScreener link
```

## Console Output

When you search for a token, console shows:

```
🔍 Starting token search with input: Popcat
🎯 Input appears to be token name, searching...
📡 Strategy 1: Querying DexScreener /tokens endpoint...
✅ Found 1 matching tokens
🎯 Found exact match: Popcat POPCAT
✅ Token found! Displaying info...

📝 Extracting keywords from: Popcat
✅ Keywords extracted: ["popcat"]

🔍 Searching for tokens with keywords: ["popcat"]
🎯 Populating Beta Metrics with keywords: ["popcat"]
📡 Searching by keywords: ["popcat"]
📡 Querying DexScreener for keyword: "popcat"
  ✅ Found 12 tokens for "popcat"
📊 Total tokens collected: 12
✅ Found 11 tokens for Beta Metrics
```

## Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| **Keyword Extraction** | ✅ | Automatic, removes common words |
| **Multi-keyword Search** | ✅ | Searches each keyword separately |
| **Result Deduplication** | ✅ | Removes duplicate tokens |
| **Narrative Scoring** | ✅ | % match based on keywords |
| **Market Cap Sorting** | ✅ | Secondary sort by cap |
| **Liquidity Color-Coding** | ✅ | 🔵 Deep, 🟡 High, 🟠 Med, 🔴 Low |
| **24h Price Change** | ✅ | With 📈 📉 indicators |
| **DexScreener Links** | ✅ | Click to view on DexScreener |
| **Error Handling** | ✅ | Graceful fallbacks |
| **Console Logging** | ✅ | Detailed progress tracking |
| **Real-time API** | ✅ | Uses live DexScreener data |

## Performance Benchmarks

| Operation | Time | Notes |
|-----------|------|-------|
| Keyword extraction | <10ms | Instant |
| Single keyword search | 1-2s | Per keyword |
| Multi-keyword search | 3-5s | Sequential searches |
| Result processing | <100ms | Dedup + sort |
| Table rendering | <50ms | HTML generation |
| **Total for "Popcat"** | **1-2s** | Single keyword |
| **Total for 3 keywords** | **3-5s** | Multiple keywords |

## How to Use

### Example 1: Simple Token
```
1. Type: "Popcat"
2. Press: Enter
3. Wait: 1-2 seconds
4. See: 11 related tokens in Beta Metrics
```

### Example 2: Multi-word Token
```
1. Type: "Flying Ketamine Horse"
2. Press: Enter
3. Wait: 3-5 seconds (3 keywords = 3 searches)
4. See: 17+ related tokens in Beta Metrics
```

### Example 3: By Contract Address
```
1. Paste: 44-char Solana address
2. Press: Enter
3. System: Extracts keywords from token name
4. See: Related tokens populate automatically
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No results in Beta Metrics | Token name may be too generic |
| Slow loading | Multiple keywords = more API calls |
| Error message in table | Check console for details |
| Blank table | Try refreshing or search different token |
| Wrong tokens shown | Keywords may match unrelated tokens |

## Next Steps

🚀 **Try searching for these tokens to see results:**
- `Popcat` - Will show Popcat clones
- `BONK` - Will show Bonk-related tokens
- `Flying Ketamine Horse` - Will show flying/ketamine/horse tokens
- Any Solana contract address - Will auto-extract keywords

✅ **Feature is live and ready to use!**
