const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send("Porn").then(async(m) => await m.edit(`Pas de ça ici ! :no_entry_sign: `));
};

module.exports.help = {
    name: "porn"
};