const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot Online!')

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js')

        if(jsfile.length == 0) {return console.log("Could not find any commands!")}

        jsfile.forEach(f => {
            let probs = require(`./commands/${f}`);
            bot.commands.set(probs.help.name, probs)
        })
    }) 
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!';
    let MessageArray = message.content.split(' ')
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'hello') {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('hello');} else {
            message.channel.send('Hello ${member.user.tag}')
        }
        message.channel.send('Hello')
    }

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'test') {
        message.channel.send('Test')
    }

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}
    
    if(cmd == 'youtube') {
        message.channel.send('Make sure to go check out our youtube! https://www.youtube.com/channel/UCfL-MZMIN07TXeOghFtQdZg also do !links for more commands!')
    }


})

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    setTitle('Welcome to my server!')
    setDescription(`Thank you for joining my server! Make sure to stay active and talk to the other members!\nCurrent Member Count: ${member.guild.memberCount}`)
})

bot.login("TOKEN")
