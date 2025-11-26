const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  // The code you want to run periodically
  console.log('Task executed at:', new Date().toISOString());
});

console.log('Cron job started.');
