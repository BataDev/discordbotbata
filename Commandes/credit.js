const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let debut = Date.now();
    await message.channel.send("credits").then(async(m) => await m.edit(`***Bot developped by BataGang, All right reserved, Don't realease this !***`));
};

module.exports.help = {
    name: "credits"

    };