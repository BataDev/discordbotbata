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
                  name: "> Nom de la Faction :",
                  value: "Firered" 
                  },
                  {
                      name: "Devise :",
                      value: "Tu arrives P4, tu repars à 4 pattes"
                  },
                  {
                      name: "Owners :",
                      value: "Ayoubluxe :crown: , MotMotlol123 :no_entry: , NItramZz :crown: , Phoenix :crown: "
                  },
                  {
                      name: "Officiers :",
                      value : "Alexandra :heart: my kebab"
                  },
                  {
                      name: "Membres :",
                      value: "BataGang, le tacos d'alexandra :heart_eyes_cat: , Anonyme28, DarkCreep"
                  },
                  {
                      name: "Recrues",
                      value: "Des recrues ? Ils/Elles se reconnaîtront, flemme de le faire, peut-être plus tard. :joy:"
                  }
            ],
            footer: {
                text: `Informations de la Faction, demande de : ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "infos"
}