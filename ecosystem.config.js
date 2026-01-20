/**
 * PM2 Ecosystem Configuration for BetasonChain
 * 
 * Usage:
 * pm2 start ecosystem.config.js --env production
 * pm2 save
 * pm2 startup
 */

module.exports = {
  apps: [
    {
      name: 'betasonchain-backend',
      script: 'server.js',
      
      // Clustering
      instances: 'max',           // Use all CPU cores
      exec_mode: 'cluster',       // Cluster mode for load balancing
      
      // Environment
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      
      // Logging
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      
      // Auto-restart & monitoring
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      ignore_watch: ['node_modules', 'logs', '.env'],
      
      // Process settings
      min_uptime: '10s',
      max_restarts: 10,
      
      // Performance tuning
      env_NODE_OPTIONS: '--max-old-space-size=4096',
      
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    }
  ],

  deploy: {
    production: {
      user: 'www-data',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/betasonchain.git',
      path: '/opt/betasonchain',
      'post-deploy': 'npm ci --only=production && pm2 restart ecosystem.config.js --env production'
    }
  }
};
