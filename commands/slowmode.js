module.exports = {
    name: 'slowmode',
    description: 'Sets Slowmode on channel.',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You cannot use this command!');
        if (!args[0]) return message.channel.send('You did not mention a number in seconds to ser the slowmode to. Proper command usage (!slowmode Number)')
        if (args[0] === 'none') {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to 0!`);
        };
        if (isNaN(args[0])) return message.channel.send('Number stated is not a number!');
        const setTimeTo = Number(args[0]);

        if (setTimeTo === 1) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
        
        if (setTimeTo === 2) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };        
        
        if (setTimeTo === 3) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 4) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 5) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 6) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 7) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 8) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 9) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 10) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 11) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 12) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 13) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 14) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 15) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 16) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 17) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 18) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };

        if (setTimeTo === 19) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 20) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 21) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 22) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 23) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 24) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 25) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 26) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 27) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 28) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 29) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };
                
        if (setTimeTo === 30) {
            await message.channel.setRatelLimitPerUser(0);
            return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`);
        };

        message.channel.send('Invalid Time is seconds: Options !slowmode 1-30 (1 thru 30.).')

    }
}