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
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_sandbox: {
        NODE_ENV: 'sandbox',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
