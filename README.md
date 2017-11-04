# Rocket League
A simple to use module for interacting with the Rocket League API.

## Install
```
$ npm install rocketleague
```
## How to
```js
// require the package
const rl = require('rocketleague');
const client = new rl.Client('apikey');
client.getLeaderboard(true, 'wins').then(leaderboard => console.log(leaderboard));
```
- All methods return a promise.

## Methods
```js
getPlatforms()
getSeasons()
getPlaylists()
getTiers()
getPlayer(username, platform) // steam, xbl, psn
search(username)
getLeaderboard(playlist, type) // if type is not present, search ranked
```

- You can obtain an API Key from https://developers.rocketleaguestats.com/

playlist | type
---------|-----
duel | wins
doubles | goals
standard | mvps
chaos | saves
rankedDuel | shots
rankedDoubles | assists
rankedSoloStandard | null
rankedStandard | null
mutatorMashup | null
snowDay | null
rocketLabs | null
hoops | null
rumble | null
dropshot | null
