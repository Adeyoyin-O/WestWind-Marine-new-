// PM2 ecosystem configuration for West Wind Marine Electronics
// This file configures PM2 for production deployment

module.exports = {
  apps: [
    {
      name: 'westwind-marine',
      script: './dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true,
      // Restart delay
      restart_delay: 4000,
      // Exponential backoff restart delay
      exp_backoff_restart_delay: 100,
      // Maximum number of unstable restarts
      max_restarts: 10,
      // Minimum uptime before restart
      min_uptime: '10s',
      // Graceful shutdown
      kill_timeout: 1600,
      // Health check
      health_check_interval: 30000,
      // Cron restart (daily at 2 AM)
      cron_restart: '0 2 * * *',
      // Additional settings
      ignore_watch: [
        'node_modules',
        'logs',
        'dist/public'
      ],
      // Environment variables from .env file
      env_file: '.env'
    }
  ],
  
  deploy: {
    production: {
      user: 'www-data',
      host: 'your-server-ip',
      ref: 'origin/main',
      repo: 'https://github.com/yourusername/westwind-marine.git',
      path: '/var/www/westwindmarineelectronics.com',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};