const fetch = require('node-fetch');

class Client {
  constructor(apikey) {
    if (!apikey) throw new Error('You must supply an API Key.');
    this.base = 'https://api.rocketleaguestats.com/v1';
    this.options = {
      headers: {
        'Authorization': apikey
      }
    };
  }

  getPlatforms() {
    return new Promise(resolve => {
      fetch(`${this.base}/data/platforms`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  getSeasons() {
    return new Promise(resolve => {
      fetch(`${this.base}/data/seasons`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  getPlaylists() {
    return new Promise(resolve => {
      fetch(`${this.base}/data/playlists`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  getTiers() {
    return new Promise(resolve => {
      fetch(`${this.base}/data/tiers`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  getPlayer(username, platform) {
    return new Promise(resolve => {
      fetch(`${this.base}/player?unique_id=${encodeURIComponent(username)}&platform_id=${platforms[platform]}`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  search(username) {
    return new Promise(resolve => {
      fetch(`${this.base}/search/players?display_name=${encodeURIComponent(username)}`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }

  getLeaderboard(thing, type = null) {
    return new Promise(resolve => {
      fetch(`${this.base}/leaderboard/${type === null ? 'ranked?playlist_id=' + playlists[thing] : 'stat?type=' + type}`, this.options)
        .then(res => res.json())
        .then(data => resolve(data));
    });
  }
}

const platforms = {
  steam: '1',
  psn: '2',
  xbl: '3'
};

const playlists = {
  duel: '1',
  doubles: '2',
  standard: '3',
  chaos: '4',
  rankedDuel: '10',
  rankedDoubles: '11',
  rankedSoloStandard: '12',
  rankedStandard: '13',
  mutatorMashup: '14',
  snowDay: '15',
  rocketLabs: '16',
  hoops: '17',
  rumble: '18',
  dropshot: '23'
};

module.exports.Client = Client;
