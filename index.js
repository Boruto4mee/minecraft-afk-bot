const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is online!'));
app.listen(process.env.PORT || 3000, () => console.log('Web server is running.'));

const botArgs = {
  host: 'hatake.progamer.me', 
  port: 34542,                
  username: 'ServerKeeper247',  
  version: false                
};

function startBot() {
  const bot = mineflayer.createBot(botArgs);
  
  bot.on('spawn', () => {
    console.log(`[BOT] Spawned into world.`);
    
    // 5-second delay to clear anti-cheat lag spikes
    setTimeout(() => {
        // Sends both commands to ensure it hits registration or login state cleanly
        bot.chat('/register Alive247Bot! Alive247Bot!');
        bot.chat('/login Alive247Bot!');
        console.log(`[BOT] Authentication payload sent.`);
    }, 5000);
  });
  
  bot.on('end', () => setTimeout(startBot, 30000)); 
  bot.on('error', (err) => console.log('[BOT] Error: ', err));
}
startBot();
