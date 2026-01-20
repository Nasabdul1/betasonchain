# Token Description Similarity Enhancement

## Overview
The Beta Metrics Discovery Matrix has been enhanced to find tokens with **similar descriptions** in addition to matching keywords from the token name.

## What Changed

### 1. **Enhanced Keyword Extraction** (Line 788-802)
The system now extracts keywords from **two sources**:
- **Token name** - Keywords extracted from the token's symbol/name
- **Token description** - Keywords extracted from the token's metadata description

Both keyword sets are combined to create a more comprehensive search profile.

### 2. **Description Similarity Scoring** (Lines 1356-1403)
New scoring system added with the following logic:

#### Description Overlap Analysis
- Extracts meaningful keywords from both descriptions
- Calculates overlap percentage between tokens
- Scores based on similarity level:
  - **>50% match**: +25 points
  - **25-50% match**: +15 points  
  - **>0% match**: +8 points

#### Theme/Category Matching
Automatically detects and matches thematic categories:
- 🐾 **Animal tokens** (animal, creature, beast, pet, furry)
- 😄 **Meme tokens** (meme, comedy, joke, funny)
- 👥 **Community tokens** (community, social, dao, governance)
- 💰 **DeFi tokens** (defi, finance, swap, exchange, yield, lending)
- 🎨 **NFT tokens** (nft, art, digital, creative, collectible)
- 🎮 **Gaming tokens** (gaming, game, play, reward, metaverse)
- 🤖 **AI tokens** (ai, artificial, machine, learning, neural)

When themes match, the token receives **+18 bonus points**.

### 3. **Updated Function Signatures**

#### `displayTokenInfo()` (Line 788)
Now passes description to scoring function:
```javascript
await this.populateBetaMetricsWithKeywords(allKeywords, address, tokenName, description);
```

#### `populateBetaMetricsWithKeywords()` (Line 1153)
Now accepts description parameter:
```javascript
async populateBetaMetricsWithKeywords(keywords, excludeAddress = '', excludeTokenName = '', excludeDescription = '')
```

#### `searchTokensByKeywords()` (Line 1267)
Enhanced signature:
```javascript
async searchTokensByKeywords(keywords, scannedTokenAddress = '', scannedTokenName = '', scannedTokenDescription = '')
```

### 4. **Enhanced Scoring Output**
Console logs now show description similarity metrics:
```
✨ Top 25 narrative-matched tokens ready for display
  1. Token Name (85% match, 65% desc match) - Keywords: keyword1, keyword2
  2. Token Name (80% match, 45% desc match) - Keywords: keyword3
  ✅ Theme match (meme): "Token Name"
```

## Example Use Case

**When you scan a token like:**
- Name: "DogeMoon"
- Description: "A community-driven meme token celebrating our furry friends on the moon"

**The system will now find:**
1. ✅ Tokens with "doge" or "moon" in name (existing)
2. ✅ Tokens with "doge" or "moon" in description (existing)
3. ✅ **NEW: Tokens with similar descriptions about "community", "meme", "dog/furry"** (NEW)
4. ✅ **NEW: Other community-driven meme tokens with animal themes** (NEW)

## Benefits
- 🎯 **More Relevant Results** - Finds tokens with similar purpose/narrative
- 📊 **Better Discovery** - Surfaces related tokens you might miss with name-only search
- 🏆 **Smarter Ranking** - Combines multiple relevance signals for better sorting
- 📈 **Enhanced Beta Metrics** - More comprehensive similar token analysis

## Technical Details

### Scoring Algorithm Priority
1. **Keyword name matches** - 30 points each
2. **Keyword description matches** - 20 points each
3. **Description similarity** - 8-25 points based on overlap
4. **Theme/category matches** - 18 points bonus
5. **Narrative pattern matches** - 5-15 points
6. **Multiple keyword bonus** - 10 points per keyword
7. **Market cap/liquidity tiebreaker** - 2-5 points

### Search Strategy
- Extracts 5-15 keywords from combined sources
- Searches DexScreener API for each keyword
- Filters results by liquidity (>$1k minimum)
- Scores by relevance and description similarity
- Returns top 25 most relevant tokens

## Testing
Try searching for tokens with rich descriptions:
- Meme tokens (find other meme tokens)
- DeFi tokens (find other DeFi tokens)
- Gaming tokens (find other gaming tokens)
- Community tokens (find other community-focused tokens)

The Beta Discovery Matrix will now show related tokens even if they don't share the exact name keywords!
