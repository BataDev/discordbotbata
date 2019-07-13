const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    //if(!member) return message.channel.send(`Veuillez mentionner un utilisateur !`);

    message.channel.send({
        embed: {
            color: 3447003, 
            title: `Commande de l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL  
            },         
            fields: [{
                  name: "<ban :",
                  value: "Commande pour bannir un utilisateur, exemple: <ban @Maloway" 
                  },
                  {
                      name: "<kick :",
                      value: "Commande pour kick un utilisateur, exemple: <kick @Maloway"
                  },
                  {
                      name: "<ping :",
                      value: "Commande pour connaître votre ping sur discord"
                  },
                  {
                      name: "<infos :",
                      value : "Commande pour connaître les infos de la Faction"
                  },
                  {
                      name: "<credit :",
                      value: "Commande 'antivol', Pour que l'on ne puisse voler le bot."
                  },
                  {
                      name: "<stats",
                      value: "Commande pour connaitre vos statistiques approximatives"
                  },
                  {
                      name: "Attention, une commande est cachée, seul le créateur en connais le nom, saurez vous la trouver ?",
                      value: "A vous l'aventure"
                  }
            ],
            footer: {
                text: `Liste des commandes du bot, demande de : ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "help"
}