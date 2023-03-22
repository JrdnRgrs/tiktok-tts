// Initialize .env config file
require('dotenv').config();
const sessionID = process.env.SESSION_ID;
const { config, createAudioFromText } = require('./index')

config(sessionID);

async function yourFunction(){
    await createAudioFromText("it's me rocket the raccoon! it's me rocket the raccoon. it's me ROCKET the raccoon...","audio","en_us_rocket");
    console.log("Audio file generated!");
}

yourFunction();