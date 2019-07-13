const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande !`);

    if(message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionner un utilisateur pour que cette action abouttisse !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`Je n'ai pas trouvé l'utilisateur !`);
    }

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} à bien été banni par ${message.author.username}`);
        message.mentions.users.first().send(`Vous avez été banni du serveur ***${message.guild.name}*** par ${message.author.username}`);
       
    });
};

module.exports.help = {
    name: "ban"
};