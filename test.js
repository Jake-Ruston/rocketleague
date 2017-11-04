const { TOKEN } = require('./config');
const rl = require('.');
const client = new rl.Client(TOKEN);

client.getLeaderboard(true, 'wins').then(a => console.log(a));

process.on('unhandledRejection', console.error);
