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
| English     | English AU - Female        | en_au_001                     |<audio controls><source src="voices/english/en_au_001_voice.mp3" type="audio/mp3"></audio>|
|             | English AU - Male          | en_au_002                     |<audio controls><source src="voices/english/en_au_002_voice.mp3" type="audio/mp3"></audio>|
|             | English UK - Male 1        | en_uk_001                     |<audio controls><source src="voices/english/en_uk_001_voice.mp3" type="audio/mp3"></audio>|
|             | English UK - Male 2        | en_uk_003                     |<audio controls><source src="voices/english/en_uk_003_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Female (Int. 1) | en_us_001                   |<audio controls><source src="voices/english/en_us_001_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Female (Int. 2) | en_us_002                   |<audio controls><source src="voices/english/en_us_002_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Male 1        | en_us_006                     |<audio controls><source src="voices/english/en_us_006_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Male 2        | en_us_007                     |<audio controls><source src="voices/english/en_us_007_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Male 3        | en_us_009                     |<audio controls><source src="voices/english/en_us_009_voice.mp3" type="audio/mp3"></audio>|
|             | English US - Male 4        | en_us_010                     |<audio controls><source src="voices/english/en_us_010_voice.mp3" type="audio/mp3"></audio>|
|             | Narrator                   | en_male_narration             |<audio controls><source src="voices/english/en_male_narration_voice.mp3" type="audio/mp3"></audio>|
|             | Funny                      | en_male_funny                 |<audio controls><source src="voices/english/en_male_funny_voice.mp3" type="audio/mp3"></audio>|
|             | Peaceful                   | en_female_emotional           |<audio controls><source src="voices/english/en_female_emotional_voice.mp3" type="audio/mp3"></audio>|
|             | Serious                    | en_male_cody                  |<audio controls><source src="voices/english/en_male_cody_voice.mp3" type="audio/mp3"></audio>|
| Disney      | Ghost Face                 | en_us_ghostface               |<audio controls><source src="voices/english/en_us_ghostface_voice.mp3" type="audio/mp3"></audio>|
|             | Chewbacca                  | en_us_chewbacca               |<audio controls><source src="voices/english/en_us_chewbacca_voice.mp3" type="audio/mp3"></audio>|
|             | C3PO                       | en_us_c3po                    |<audio controls><source src="voices/english/en_us_c3po_voice.mp3" type="audio/mp3"></audio>|
|             | Stitch                     | en_us_stitch                  |<audio controls><source src="voices/english/en_us_stitch_voice.mp3" type="audio/mp3"></audio>|
|             | Stormtrooper               | en_us_stormtrooper            |<audio controls><source src="voices/english/en_us_stormtrooper_voice.mp3" type="audio/mp3"></audio>|
|             | Rocket                     | en_us_rocket                  |<audio controls><source src="voices/english/en_us_rocke_voice.mp3" type="audio/mp3"></audio>|
|             | Madame Leota               | en_female_madam_leota         |<audio controls><source src="voices/english/en_female_madam_leota_voice.mp3" type="audio/mp3"></audio>|
|             | Ghost Host                 | en_male_ghosthost             |<audio controls><source src="voices/english/en_male_ghosthost_voice.mp3" type="audio/mp3"></audio>|
|             | Pirate                     | en_male_pirate                |<audio controls><source src="voices/english/en_male_pirate_voice.mp3" type="audio/mp3"></audio>|
| French      | French - Male 1            | fr_001                        |<audio controls><source src="voices/non-english/fr_001_voice.mp3" type="audio/mp3"></audio>|
|             | French - Male 2            | fr_002                        |<audio controls><source src="voices/non-english/fr_002_voice.mp3" type="audio/mp3"></audio>|
| Spanish     | Spanish (Spain) - Male     | es_002                        |<audio controls><source src="voices/non-english/es_002_voice.mp3" type="audio/mp3"></audio>|
|             | Spanish MX - Male          | es_mx_002                     |<audio controls><source src="voices/non-english/es_mx_002_voice.mp3" type="audio/mp3"></audio>|
| Portuguese  | Portuguese BR - Female 1   | br_001                        |<audio controls><source src="voices/non-english/br_001_voice.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Female 2   | br_003                        |<audio controls><source src="voices/non-english/br_003_voice.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Female 3   | br_004                        |<audio controls><source src="voices/non-english/br_004_voice.mp3" type="audio/mp3"></audio>|
|             | Portuguese BR - Male       | br_005                        |<audio controls><source src="voices/non-english/br_005_voice.mp3" type="audio/mp3"></audio>|
| German      | German - Female            | de_001                        |<audio controls><source src="voices/non-english/de_001_voice.mp3" type="audio/mp3"></audio>|
|             | German - Male              | de_002                        |<audio controls><source src="voices/non-english/de_002_voice.mp3" type="audio/mp3"></audio>|
| Indonesian  | Indonesian - Female        | id_001                        |<audio controls><source src="voices/non-english/id_001_voice.mp3" type="audio/mp3"></audio>|
| Japanese    | Japanese - Female 1        | jp_001                        |<audio controls><source src="voices/non-english/jp_001_voice.mp3" type="audio/mp3"></audio>|
|             | Japanese - Female 2        | jp_003                        |<audio controls><source src="voices/non-english/jp_003_voice.mp3" type="audio/mp3"></audio>|
|             | Japanese - Female 3        | jp_005                        |<audio controls><source src="voices/non-english/jp_005_voice.mp3" type="audio/mp3"></audio>|
|             | Japanese - Male            | jp_006                        |<audio controls><source src="voices/non-english/jp_006_voice.mp3" type="audio/mp3"></audio>|
| Korean      | Korean - Male 1            | kr_002                        |<audio controls><source src="voices/non-english/kr_002_voice.mp3" type="audio/mp3"></audio>|
|             | Korean - Female            | kr_003                        |<audio controls><source src="voices/non-english/kr_003_voice.mp3" type="audio/mp3"></audio>|
|             | Korean - Male 2            | kr_004                        |<audio controls><source src="voices/non-english/kr_004_voice.mp3" type="audio/mp3"></audio>|
| Other       | Alto                       | en_female_f08_salut_damour    |<audio controls><source src="voices/english/en_female_f08_salut_damour_voice.mp3" type="audio/mp3"></audio>|
|             | Tenor                      | en_male_m03_lobby             |<audio controls><source src="voices/english/en_male_m03_lobby_voice.mp3" type="audio/mp3"></audio>|
|             | Sunshine Soon              | en_male_m03_sunshine_soon     |<audio controls><source src="voices/english/en_male_m03_sunshine_soon_voice.mp3" type="audio/mp3"></audio>|
|             | Warmy Breeze               | en_female_f08_warmy_breeze    |<audio controls><source src="voices/english/en_female_f08_warmy_breeze_voice.mp3" type="audio/mp3"></audio>|
|             | Glorious                   | en_female_ht_f08_glorious     |<audio controls><source src="voices/english/en_female_ht_f08_glorious_voice.mp3" type="audio/mp3"></audio>|
|             | It Goes Up                 | en_male_sing_funny_it_goes_up |<audio controls><source src="voices/english/en_male_sing_funny_it_goes_up_voice.mp3" type="audio/mp3"></audio>|
|             | Chipmunk                   | en_male_m2_xhxs_m03_silly     |<audio controls><source src="voices/english/en_male_m2_xhxs_m03_silly_voice.mp3" type="audio/mp3"></audio>|
|             | Dramatic                   | en_female_ht_f08_wonderful_world |<audio controls><source src="voices/english/en_female_ht_f08_wonderful_world_voice.mp3" type="audio/mp3"></audio>|
