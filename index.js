const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is online!');
});
app.listen(process.env.PORT || 3000, () => {
  console.log('Web server is running.');
});

const botArgs = {
  host: 'hatake.progamer.me', // Your custom server IP
  port: 34542,                // Your custom port number
  username: 'ServerKeeper247',  
  version: false                
};

function startBot() {
  const bot = mineflayer.createBot(botArgs);
  bot.on('login', () => console.log(`[BOT] Connected as ${bot.username}`));
  bot.on('end', () => setTimeout(startBot, 30000)); 
  bot.on('error', (err) => console.log('[BOT] Error: ', err));
}
startBot();
