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

  async getPlatforms() {
    const response = await fetch(`${this.base}/data/platforms`, this.options);
    const data = await response.json();
    return data;
  }

  async getSeasons() {
    const response = await fetch(`${this.base}/data/seasons`, this.options);
    const data = await response.json();
    return data;
  }

  async getPlaylists() {
    const response = await fetch(`${this.base}/data/playlists`, this.options);
    const data = await response.json();
    return data;
  }

  async getTiers() {
    const response = await fetch(`${this.base}/data/tiers`, this.options);
    const data = await response.json();
    return data;
  }

  async getPlayer(username, platform) {
    const response = await fetch(`${this.base}/player?unique_id=${encodeURIComponent(username)}&platform_id=${platforms[platform]}`, this.options);
    const data = await response.json();
    return data;
  }

  async search(username) {
    const response = await fetch(`${this.base}/search/players?display_name=${encodeURIComponent(username)}`, this.options);
    const data = await response.json();
    return data;
  }

  async getLeaderboard(thing, type = null) {
    const response = await fetch(`${this.base}/leaderboard/${type === null ? 'ranked?playlist_id=' + playlists[thing] : 'stat?type=' + type}`, this.options);
    const data = await response.json();
    return data;
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
