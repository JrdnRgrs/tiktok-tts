# tiktok-tts

This package provides a simple way to generate text-to-speech audio files from TikTok's text-to-speech (TTS) API in Node.js.

## Installation
```javascript
npm i tiktok-tts
```

## Usage

### Basic example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here');
```

### Custom filename example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', 'myAudio');
```
Generated audio file will be saved as ```myAudio.mp3```

### Custom path example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', './myDirectory/myAudio');
```
Generated audio file will be saved as ```myAudio.mp3``` inside the ```myDirectory``` directory.
###### ⚠️ Please keep in mind that ```myDirectory``` needs to be an existing directory.

### Custom voice example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', 'myAudio', 'en_us_stormtrooper');
```

### Using ```await``` with the ```createAudioFromText()``` function

```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');

async function yourFunction(){
    await createAudioFromText('Text that will be spoken');
    console.log("Audio file generated!");
}

yourFunction();
```

## Get TikTok Session id 🍪
- Install [Cookie Editor extension](https://cookie-editor.cgagnier.ca) for your browser.
- Log in to [TikTok Web](https://tiktok.com)
- While on TikTok web, open the extension and look for ```sessionid```
- Copy the ```sessionid``` value. (It should be an alphanumeric value)

## Available functions
```javascript
config(TikTokSessionId)
```
| Parameter     | Description             | Default   |type |
| ------------- |:-------------           | -----    |-----|
| TiktokSessionId| Your TikTok sessionid | ```null``` | String|

<br/>

```javascript
createAudioFromText(text, fileName, speaker)
```

| Parameter     | Description | Default  |  type |
| ------------- |:-------------| -----| -----|
| text | Text to be converted to audio | ```null``` | String|
| fileName | filename/path for the generated audio file ```optional``` | ```audio``` | String|
| speaker | TikTok speaker code ```optional``` | ```en_us_001``` | String|

## Speaker Codes
The following speaker codes are supported:

| Language    | Speaker                    | Speaker Code                  | Sample |
|-------------|----------------------------|-------------------------------|--------|
| English     | English AU - Female        | en_au_001                     |<audio controls><source src="voices/en_au_001.mp3" type="audio/mp3"></audio>|
|             | English AU - Male          | en_au_002                     |<audio controls><source src="voices/en_au_002.mp3" type="audio/mp3"></audio>|
|             | English UK - Male 1        | en_uk_001                     |<audio controls><source src="voices/en_uk_001.mp3" type="audio/mp3"></audio>|
|             | English UK - Male 2        | en_uk_003                     |<audio controls><source src="voices/en_uk_003.mp3" type="audio/mp3"></audio>|
|             | English US - Female (Int. 1) | en_us_001                   |<audio controls><source src="voices/en_us_001.mp3" type="audio/mp3"></audio>|
|             | English US - Female (Int. 2) | en_us_002                   |<audio controls><source src="voices/en_us_002.mp3" type="audio/mp3"></audio>|
|             | English US - Male 1        | en_us_006                     |<audio controls><source src="voices/en_us_006.mp3" type="audio/mp3"></audio>|
|             | English US - Male 2        | en_us_007                     |<audio controls><source src="voices/en_us_007.mp3" type="audio/mp3"></audio>|
|             | English US - Male 3        | en_us_009                     |<audio controls><source src="voices/en_us_009.mp3" type="audio/mp3"></audio>|
|             | English US - Male 4        | en_us_010                     |<audio controls><source src="voices/en_us_010.mp3" type="audio/mp3"></audio>|
|             | Narrator                   | en_male_narration             |<audio controls><source src="voices/en_male_narration.mp3" type="audio/mp3"></audio>|
|             | Funny                      | en_male_funny                 |<audio controls><source src="voices/en_male_funny.mp3" type="audio/mp3"></audio>|
|             | Peaceful                   | en_female_emotional           |<audio controls><source src="voices/en_female_emotional.mp3" type="audio/mp3"></audio>|
|             | Serious                    | en_male_cody                  |<audio controls><source src="voices/en_male_cody.mp3" type="audio/mp3"></audio>|
| Disney      | Ghost Face                 | en_us_ghostface               |<audio controls><source src="voices/en_us_ghostface.mp3" type="audio/mp3"></audio>|
|             | Chewbacca                  | en_us_chewbacca               |<audio controls><source src="voices/en_us_chewbacca.mp3" type="audio/mp3"></audio>|
|             | C3PO                       | en_us_c3po                    |<audio controls><source src="voices/en_us_c3po.mp3" type="audio/mp3"></audio>|
|             | Stitch                     | en_us_stitch                  |<audio controls><source src="voices/en_us_stitch.mp3" type="audio/mp3"></audio>|
|             | Stormtrooper               | en_us_stormtrooper            |<audio controls><source src="voices/en_us_stormtrooper.mp3" type="audio/mp3"></audio>|
|             | Rocket                     | en_us_rocket                  |<audio controls><source src="voices/en_us_rocke.mp3" type="audio/mp3"></audio>|
|             | Madame Leota               | en_female_madam_leota         |<audio controls><source src="voices/en_female_madam_leota.mp3" type="audio/mp3"></audio>|
|             | Ghost Host                 | en_male_ghosthost             |<audio controls><source src="voices/en_male_ghosthost.mp3" type="audio/mp3"></audio>|
|             | Pirate                     | en_male_pirate                |<audio controls><source src="voices/en_male_pirate.mp3" type="audio/mp3"></audio>|
| French      | French - Male 1            | fr_001                        |<audio controls><source src="voices/fr_001.mp3" type="audio/mp3"></audio>|
|             | French - Male 2            | fr_002                        |<audio controls><source src="voices/fr_002.mp3" type="audio/mp3"></audio>|
| Spanish     | Spanish (Spain) - Male     | es_002                        |<audio controls><source src="voices/es_002.mp3" type="audio/mp3"></audio>|
|             | Spanish MX - Male          | es_mx_002                     |<audio controls><source src="voices/es_mx_002.mp3" type="audio/mp3"></audio>|
| Portuguese  | Portuguese BR - Female 1   | br_001                        |<audio controls><source src="voices/br_001.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Female 2   | br_003                        |<audio controls><source src="voices/br_003.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Female 3   | br_004                        |<audio controls><source src="voices/br_004.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Male       | br_005                        |<audio controls><source src="voices/br_005.mp3" type="audio/mp3"></audio>|
| German      | German - Female            | de_001                        |<audio controls><source src="voices/de_001.mp3" type="audio/mp3"></audio>|
|             | German - Male              | de_002                        |<audio controls><source src="voices/de_002.mp3" type="audio/mp3"></audio>|
| Indonesian  | Indonesian - Female        | id_001                        |<audio controls><source src="voices/id_001.mp3" type="audio/mp3"></audio>|
| Japanese    | Japanese - Female 1        | jp_001                        |<audio controls><source src="voices/jp_001.mp3" type="audio/mp3"></audio>|
|             | Japanese - Female 2        | jp_003                        |<audio controls><source src="voices/jp_003.mp3" type="audio/mp3"></audio>|
|             | Japanese - Female 3        | jp_005                        |<audio controls><source src="voices/jp_005.mp3" type="audio/mp3"></audio>|
|             | Japanese - Male            | jp_006                        |<audio controls><source src="voices/jp_006.mp3" type="audio/mp3"></audio>|
| Korean      | Korean - Male 1            | kr_002                        |<audio controls><source src="voices/kr_002.mp3" type="audio/mp3"></audio>|
|             | Korean - Female            | kr_003                        |<audio controls><source src="voices/kr_003.mp3" type="audio/mp3"></audio>|
|             | Korean - Male 2            | kr_004                        |<audio controls><source src="voices/kr_004.mp3" type="audio/mp3"></audio>|
| Other       | Alto                       | en_female_f08_salut_damour    |<audio controls><source src="voices/en_female_f08_salut_damour.mp3" type="audio/mp3"></audio>|
|             | Tenor                      | en_male_m03_lobby             |<audio controls><source src="voices/en_male_m03_lobby.mp3" type="audio/mp3"></audio>|
|             | Sunshine Soon              | en_male_m03_sunshine_soon     |<audio controls><source src="voices/en_male_m03_sunshine_soon.mp3" type="audio/mp3"></audio>|
|             | Warmy Breeze               | en_female_f08_warmy_breeze    |<audio controls><source src="voices/en_female_f08_warmy_breeze.mp3" type="audio/mp3"></audio>|
|             | Glorious                   | en_female_ht_f08_glorious     |<audio controls><source src="voices/en_female_ht_f08_glorious.mp3" type="audio/mp3"></audio>|
|             | It Goes Up                 | en_male_sing_funny_it_goes_up |<audio controls><source src="voices/en_male_sing_funny_it_goes_up.mp3" type="audio/mp3"></audio>|
|             | Chipmunk                   | en_male_m2_xhxs_m03_silly     |<audio controls><source src="voices/en_male_m2_xhxs_m03_silly.mp3" type="audio/mp3"></audio>|
|             | Dramatic                   | en_female_ht_f08_wonderful_world |<audio controls><source src="voices/en_female_ht_f08_wonderful_world.mp3" type="audio/mp3"></audio>|
