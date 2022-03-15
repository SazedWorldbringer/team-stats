const team = {
  _players: [{
    firstName: 'Kaladin',
    lastName: 'Stormblessed',
    age: 19
  },
  {
    firstName: 'Kelsier',
    lastName: 'Scarstreaked',
    age: 34
  },
  {
    firstName: 'Raoden',
    lastName: 'Arelene',
    age: 26
  }],
  _games: [{
    opponent: 'Sadeas',
    teamPoints: 5,
    opponentPoints: 20
  },
  {
    opponent: 'Lord Ruler',
    teamPoints: 15,
    opponentPoints: 15
  },
  {
    opponent: 'Dilaf',
    teamPoints: 25,
    opponentPoints: 20
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponentName,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('Straff Venture', 30, 20)
team.addGame('Ruin', 100, 99)
team.addGame('The Ones Above', 10, 1000)

console.log(team.players, team.games)