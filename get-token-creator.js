/**
 * Solana Token Creator Lookup Service
 * This backend fetches token creator/mint authority from Solana blockchain
 * 
 * Setup:
 * 1. npm install @solana/web3.js express cors
 * 2. node get-token-creator.js
 * 3. Server runs on http://localhost:3001
 */

const express = require('express');
const cors = require('cors');
const { Connection, PublicKey } = require('@solana/web3.js');

const app = express();
const PORT = 3001;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Solana RPC endpoint (using public endpoint - for production use Helius or QuickNode)
const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(SOLANA_RPC, 'confirmed');

/**
 * GET /token-info/:address
 * Fetches token creator and metadata from Solana blockchain
 */
app.get('/token-info/:address', async (req, res) => {
    try {
        const tokenAddress = req.params.address;
        console.log(`[${new Date().toISOString()}] Fetching token info for: ${tokenAddress}`);

        // Validate Solana address format
        let tokenPublicKey;
        try {
            tokenPublicKey = new PublicKey(tokenAddress);
        } catch (e) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Solana address format',
                address: tokenAddress
            });
        }

        // Get token account info
        const tokenAccount = await connection.getParsedAccountInfo(tokenPublicKey);
        
        if (!tokenAccount.value) {
            return res.status(404).json({
                success: false,
                error: 'Token not found on blockchain',
                address: tokenAddress
            });
        }

        const tokenData = tokenAccount.value.data;
        
        if (tokenData.type !== 'mint') {
            return res.status(400).json({
                success: false,
                error: 'Address is not a valid token mint',
                address: tokenAddress
            });
        }

        const mintInfo = tokenData.parsed.info;

        const response = {
            success: true,
            data: {
                address: tokenAddress,
                owner: mintInfo.owner,           // Current owner/authority
                creator: mintInfo.owner,          // Creator (same as owner for tokens)
                supply: mintInfo.supply,
                decimals: mintInfo.decimals,
                isInitialized: mintInfo.isInitialized,
                freezeAuthority: mintInfo.freezeAuthority,
                mintAuthority: mintInfo.mintAuthority,
                timestamp: new Date().toISOString()
            }
        };

        console.log(`[${new Date().toISOString()}] Success: ${tokenAddress}`);
        res.json(response);

    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error:`, error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Failed to fetch token information from blockchain'
        });
    }
});

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'Solana Token Creator Lookup',
        timestamp: new Date().toISOString()
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║     Solana Token Creator Lookup Service                       ║
║     Running on http://localhost:${PORT}                         ║
║                                                                ║
║     Endpoints:                                                 ║
║     - GET  /token-info/:address   - Fetch token creator       ║
║     - GET  /health               - Health check               ║
║                                                                ║
║     Example Usage:                                             ║
║     curl http://localhost:3001/token-info/EPjFWaLb9j7JJCZ5j   ║
╚════════════════════════════════════════════════════════════════╝
    `);
});
