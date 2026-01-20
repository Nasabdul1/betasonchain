# Betasonchain Terminal - Navigation Map

## Quick Start Guide

### Main Entry Point
**`index.html`** - The landing/hub page
- Visual showcase of all 8 blockchains
- Click any chain card to navigate to its page
- Features overview and platform information

---

## Chain Pages (Interconnected)

### Navigation Bar Present on All Chain Pages
Each page has this navigation at the top:

```
[SOLANA] [BNB] [BASE] [SUI] [ETH] [TON] [BTC] [TRON]
```

The **current chain is highlighted** with its brand color and active styling.

---

## Chain Pages Overview

### 1. Bitcoin (BTC)
- **File**: `btc.html`
- **Color**: #F7931A (Orange)
- **Symbol**: ₿

### 2. Ethereum (ETH)
- **File**: `eth.html`
- **Color**: #8b5cf6 (Purple)
- **Symbol**: Ξ

### 3. BNB Chain
- **File**: `bnb.html`
- **Color**: #F0B90B (Yellow)
- **Symbol**: BNB

### 4. Solana
- **File**: `solana.html`
- **Color**: #2b6cee (Blue)
- **Symbol**: SOL

### 5. Base
- **File**: `base.html`
- **Color**: #0052FF (Blue)
- **Symbol**: BASE

### 6. TON
- **File**: `ton.html`
- **Color**: #0098EA (Cyan)
- **Symbol**: TON

### 7. Tron
- **File**: `tron.html`
- **Color**: #ef4444 (Red)
- **Symbol**: TRX

### 8. Sui
- **File**: `sui.html`
- **Color**: #3898EC (Bright Blue)
- **Symbol**: SUI

---

## Navigation Flow

```
                            ┌─────────────┐
                            │  index.html │
                            │  (Hub Page) │
                            └──────┬──────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
              ┌─────────┐   ┌─────────┐   ┌─────────┐
              │ btc.html│   │ eth.html│   │bnb.html │
              └────┬────┘   └────┬────┘   └────┬────┘
                   │             │             │
    ┌──────────────┼─────────────┼─────────────┼──────────────┐
    ▼              ▼             ▼             ▼              ▼
┌────────┐    ┌────────┐    ┌────────┐   ┌────────┐    ┌────────┐
│solana. │◄──►│ tron.  │◄──►│ ton.   │◄──►│ sui.   │◄──►│ base.  │
│ html   │    │ html   │    │ html   │    │ html   │    │ html   │
└────────┘    └────────┘    └────────┘    └────────┘    └────────┘
     ▲              ▲             ▲            ▲             ▲
     └──────────────┴─────────────┴────────────┴─────────────┘
              (Fully Interconnected)
```

All chain pages can navigate to each other via the top navigation tabs.

---

## User Journey Examples

### Scenario 1: Exploring Different Chains
1. User opens `index.html`
2. Sees all 8 blockchain options
3. Clicks on "Bitcoin" card → Goes to `btc.html`
4. Clicks on "ETH" tab in navigation → Goes to `eth.html`
5. Clicks on "SOL" tab in navigation → Goes to `solana.html`

### Scenario 2: Comparing Chains
1. User on `eth.html` (Ethereum)
2. Clicks "SOL" tab → Switches to `solana.html`
3. Clicks "BTC" tab → Switches to `btc.html`
4. Clicks "TON" tab → Switches to `ton.html`

### Scenario 3: Return to Hub
1. User can always click the "BETASONCHAIN" logo/home button in sidebar
2. Returns to `index.html` for full chain overview

---

## Styling Highlights

### Active Chain Indicator
- **Position**: Top navigation bar
- **Styling**: Bold font, background color (chain-specific), glow shadow
- **Example on BTC page**: "BTC" tab has orange background (#F7931A) with shadow

### Hover Effects
- **Inactive tabs**: Show subtle background on hover
- **Cards on index**: Lift up and increase shadow on hover
- **Smooth transitions**: All animations are 0.2-0.3s

### Responsive Design
- **Mobile**: Single column, collapsed sidebar
- **Tablet**: Two columns, collapsible navigation
- **Desktop**: Full layout with visible sidebar

---

## Technical Implementation

### Navigation Links
All navigation uses simple `<a>` tags with href attributes:
```html
<a href="btc.html" class="chain-tab">BTC</a>
<a href="eth.html" class="chain-tab">ETH</a>
```

### Active State Detection
CSS classes identify which page is active:
- Current page button has `.bg-primary` and bold styling
- Color is specific to that chain's primary color
- Shadow effect matches the chain's brand

### No Backend Required
- All links are client-side navigation
- No server requests for navigation
- Instant page loads (assuming all files are downloaded)

---

## File Listing

```
betasonchain/
├── index.html               ← Start here! Main hub
├── btc.html                 ← Bitcoin explorer
├── eth.html                 ← Ethereum explorer
├── bnb.html                 ← BNB Chain explorer
├── solana.html              ← Solana explorer
├── base.html                ← Base Chain explorer
├── ton.html                 ← TON explorer
├── tron.html                ← Tron explorer
├── sui.html                 ← Sui explorer
├── README.md                ← Documentation
├── btc.png                  ← Bitcoin logo
├── eth.png                  ← Ethereum logo
├── bnb.png                  ← BNB Chain logo
├── solana.png               ← Solana logo
├── base.png                 ← Base logo
├── ton.png                  ← TON logo
├── tron.png                 ← Tron logo
└── sui.png                  ← Sui logo
```

---

## Keyboard Shortcuts (Future Enhancement)
The search bars on each page support `⌘ K` (Cmd+K) shortcuts for quick navigation.

---

## Color Reference Card

| Chain | Color | Hex Code | Use Case |
|-------|-------|----------|----------|
| Bitcoin | Orange | #F7931A | Primary blockchain |
| Ethereum | Purple | #8b5cf6 | Smart contracts |
| BNB | Yellow | #F0B90B | DeFi hub |
| Solana | Blue | #2b6cee | High speed |
| Base | Blue | #0052FF | L2 scaling |
| TON | Cyan | #0098EA | Messaging |
| Tron | Red | #ef4444 | Stablecoins |
| Sui | Bright Blue | #3898EC | Move language |

---

**Last Updated**: December 27, 2025
**Status**: ✅ Complete and Fully Functional
