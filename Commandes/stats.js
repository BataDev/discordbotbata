const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    //if(!member) return message.channel.send(`Veuillez mentionner un utilisateur !`);

    message.channel.send({
        embed: {
            color: 3447003, 
            title: `Statistiques de l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL  
            },         
            fields: [{
                  name: "> ID :",
                  value: membre.id 
                  },
                  {
                      name: "Crée le :",
                      value: moment.utc(membre.user.createdAT).format("LL")
                  },
                  {
                      name: "Jeu :",
                      value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                  },
                  {
                      name: "Rejoins le :",
                      value : moment.utc(membre.joinedAT).format("LL")
                  }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "stats"
}