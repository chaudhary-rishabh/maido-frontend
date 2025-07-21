module.exports = {
  apps: [
    {
      name: 'frontend',
      script: './node_modules/next/dist/bin/next',
      env: {
        PORT: '3000',
      },
    },
  ]
};