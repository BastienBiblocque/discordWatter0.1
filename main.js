const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTM2NzM4MjE4MzExODIzNDIw.YfRjcw.pYSCaVlImwGQTZqPTD7Dwrtb3cI'
var CronJob = require('cron').CronJob;

client.once('ready', () => {
    console.log('Félicitations, votre bot Discord a été correctement initialisé !');
    job.start();
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong !')
    }
})

client.login(token);

var job = new CronJob('* * * * * *', function() {
    await postMessage('510203975207878687','slt mek bwa 2 lo');
}, null, true, 'America/Los_Angeles');

async function postMessage(channelId, message){
    const channel = await client.channels.fetch(channelId);
    await channel.send(message);
}

