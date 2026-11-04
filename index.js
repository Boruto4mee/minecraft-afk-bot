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
  host: 'hatake.progamer.me', 
  port: 34542,                
  username: 'ServerKeeper247',  
  version: false                
};

function startBot() {
  const bot = mineflayer.createBot(botArgs);
  
  // Triggers automatically right when connection stabilizes
  bot.on('spawn', () => {
    console.log(`[BOT] Connected and spawned into world as ${bot.username}`);
    
    // Sends chat registration/login strings immediately
    setTimeout(() => {
        bot.chat('/register KeepServerAlive123! KeepServerAlive123!');
        bot.chat('/login KeepServerAlive123!');
        console.log(`[BOT] Sent authentication commands to chat.`);
    }, 2000);
  });
  
  bot.on('end', () => {
    console.log('[BOT] Disconnected! Reconnecting in 30 seconds...');
    setTimeout(startBot, 30000);
  });
  
  bot.on('error', (err) => console.log('[BOT] Error: ', err));
}
startBot();
