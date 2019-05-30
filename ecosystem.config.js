module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'monitor-front',
      script: 'npm',
      args: 'run start',
      watch: true,
      env: {
        NODE_ENV: 'development',
        API_URL: 'http://127.0.0.1:3002',
      },
      env_sandbox: {
        NODE_ENV: 'sandbox',
      },
      env_production: {
        NODE_ENV: 'production',
        API_URL: 'http://47.75.115.126:3002',
      },
    },
  ],
};
