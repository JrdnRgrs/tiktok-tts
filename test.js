// Initialize .env config file
require('dotenv').config();
const sessionID = process.env.SESSION_ID;
const BASE_URL = process.env.BASE_URL;
const { config, createAudioFromText } = require('tiktok-tts')

config(sessionID, BASE_URL);
//config(sessionID);

async function yourFunction(){
    await createAudioFromText("it's me rocket the raccoon! it's me rocket the raccoon. it's me ROCKET the raccoon...","audio","en_us_rocket");
    console.log("Audio file generated!");
}

yourFunction();