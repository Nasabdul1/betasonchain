# 🚀 Solana Token Scanner - Quick Start Guide

## What's New?

Your Solana page now has **real-time token analysis** powered by DexScreener and Solscan APIs!

## Features

✨ **Token Search**
- Input any Solana token address
- Instantly get token information
- View market cap, volume, price changes, and liquidity

📊 **Developer Information**
- Creator wallet address with link to Solscan
- Token decimals and total supply
- Quick verification badges

🔗 **Similar Tokens Discovery**
- Beta discovery matrix showing similar tokens
- Narrative similarity scoring
- Liquidity and risk analysis

🎨 **Real-Time Updates**
- Dynamic UI that populates with live data
- Color-coded price indicators (green/red)
- Formatted numbers for easy reading

## How to Use

### Step 1: Navigate to Solana
Open the Betasonchain Terminal and click **SOLANA** in the navigation.

### Step 2: Enter Token Address
Paste a Solana token contract address in the search box:
```
Example: So11111111111111111111111111111111111111112
```

### Step 3: Search
Click the **Search** button or press **Enter**

### Step 4: View Results
See comprehensive token information instantly:
- Token name, symbol, and logo
- Market cap and trading volume
- Price change (24h, 1h, 5m)
- Liquidity information
- Creator wallet address
- Similar tokens table

## Example Token Addresses

### Popular Tokens to Try

**1. Wrapped SOL**
```
So11111111111111111111111111111111111111112
```
The native token wrapper on Solana

**2. USDC**
```
EPjFWaLb9j7JJCZ5jLDkLQrREvnfjz78LsuUSciEBj8
```
USD Coin on Solana

**3. COPE**
```
8HGyAAB1yoM1ttS7pnqw1mHaGFvytup4PGcXqWDMPEJ
```
DeFi governance token

**4. RAY (Raydium)**
```
4k3Dyjzvzp8eMZWUUbawJ8Z9Z3HV9V1cBWzL8cMZAqV
```
Raydium liquidity provider token

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+K` or `Ctrl+K` | Focus on search input |
| `Enter` | Execute search |
| `Escape` | Clear search (focus elsewhere) |

## What You'll See

### Token Card (Top Section)
- **Token Logo**: Visual identifier
- **Symbol & Name**: Token designation
- **Market Cap**: Total token value in market
- **Volume (24h)**: Trading activity
- **24h Change**: Price performance (colored)
- **Price**: Current token price
- **Liquidity**: Available trading liquidity
- **DEX**: Which exchange the pair is on

### Developer Info (Right Section)
- **Creator Wallet**: Who deployed the token
- **Safe Badge**: Verification status
- **Token Decimals**: Decimal precision
- **Supply**: Total tokens issued

### Similar Tokens (Bottom Section)
- **Narrative Similarity**: How similar to searched token (%)
- **Market Cap**: Token's market valuation
- **Liquidity Status**: Deep/Medium/Low
- **Holder Risk**: Distribution analysis
- **Beta Factor**: Correlation multiplier

## Tips & Tricks

### ✅ DO
- Copy entire token address from blockchain explorers
- Search multiple tokens to compare
- Check creator wallets for verification
- Review liquidity before trading
- Use browser DevTools (F12) to see API responses

### ❌ DON'T
- Manually type addresses (risk of typos)
- Trust single metrics for investment decisions
- Trade tokens with minimal liquidity
- Ignore developer wallet history

## Understanding the Data

### Market Cap Colors
- 🟢 **Green numbers**: Positive price change
- 🔴 **Red numbers**: Negative price change
- ⚪ **White numbers**: Neutral data

### Liquidity Levels
- **Deep**: > $500K (safe for trading)
- **Medium**: $100K-$500K (moderate risk)
- **Low**: < $100K (high risk)

### Similarity Score
- **95-100%**: Very similar token dynamics
- **75-94%**: Similar narratives
- **50-74%**: Moderate correlation
- **<50%**: Weak correlation

## Troubleshooting

### Issue: "Token not found"
**Solution**: 
- Verify the address is correct
- Check that it's a Solana mainnet token (not devnet)
- Some new tokens take time to index in DexScreener

### Issue: Slow loading
**Solution**:
- DexScreener API may be busy
- Wait 10 seconds and try again
- Check your internet connection

### Issue: Missing token logo
**Solution**:
- Token may not have logo uploaded yet
- Placeholder image will show
- Logo updates automatically once uploaded

### Issue: Creator info shows as "Unknown"
**Solution**:
- Some legacy tokens don't have public metadata
- Check on Solscan directly for more info
- This is normal for some tokens

## API Sources

### DexScreener
- Real-time DEX trading data
- Across all Solana DEXs (Raydium, Orca, Marinade, etc.)
- Updates every few seconds

### Solscan
- Blockchain metadata
- Creator and supply information
- Transaction history

## Safety Considerations

### Before Trading Any Token
1. ✅ Check creator wallet reputation
2. ✅ Verify sufficient liquidity
3. ✅ Review holder distribution
4. ✅ Check contract on chain (Solscan)
5. ✅ Research on community forums
6. ❌ Don't trust unknown creators
7. ❌ Avoid extremely low liquidity

## Advanced Features Coming Soon

### Phase 2 (Next Update)
- [ ] Rug pull risk detection
- [ ] Smart contract audit links
- [ ] Recent trades display
- [ ] Whale wallet alerts
- [ ] Price chart (1h, 4h, 1d, 1w)

### Phase 3 (Future)
- [ ] Real-time WebSocket updates
- [ ] Custom price alerts
- [ ] Watchlist functionality
- [ ] Portfolio tracking
- [ ] Risk scoring system

## Common Questions

**Q: Is this real-time data?**
A: Yes! Data updates every few seconds from DexScreener and Solscan.

**Q: Can I trade from here?**
A: Not yet. This is an analysis tool. Copy the address and trade on your preferred DEX.

**Q: Are these APIs free to use?**
A: Yes! Both DexScreener and Solscan have generous free tier limits.

**Q: How often are similar tokens updated?**
A: After each search, pulling top Solana tokens at that moment.

**Q: Can I use this without a wallet?**
A: Yes! This is purely analytical. No wallet connection needed.

## Contact & Support

For issues or feature requests:
1. Check the browser console (F12) for error details
2. Try a different token address
3. Refresh the page and try again
4. Clear browser cache if data seems stale

## Developer Information

### Technical Stack
- **Frontend**: HTML/CSS/JavaScript (Vanilla)
- **APIs**: DexScreener v2, Solscan v2
- **Framework**: Tailwind CSS
- **No dependencies**: Pure vanilla JavaScript

### File Location
- Main code: `solana.html`
- Documentation: `SOLANA_INTEGRATION.md`

---

**Happy Token Hunting! 🎯**

*Last Updated: December 27, 2025*
*Status: ✅ Fully Functional and Live*
