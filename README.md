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

## Example Response
```js
[
  {
    uniqueId: '76561197970407331',
    displayName: ':)',
    platform: { id: 1, name: 'Steam' },
    avatar: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/ac/ac004713ebfc3b544e5be20ace0d0d6db83e5d22_full.jpg',
    profileUrl: 'https://rocketleaguestats.com/profile/Steam/76561197970407331',
    signatureUrl: 'http://signature.rocketleaguestats.com/normal/Steam/76561197970407331.png',
    stats: {
      wins: 22813,
      goals: 86356,
      mvps: 5594,
      saves: 10080,
      shots: 124931,
      assists: 8423
    },
    rankedSeasons: {
      '1': [Object],
      '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object]
    },
    lastRequested: 1511566115,
    createdAt: 1456957821,
    updatedAt: 1511566114,
    nextUpdateAt: 1511566294
  },
  {
    ...
  }
]
```
