const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11
    },
    {
      firstName: "James",
      lastName: "Kirk",
      age: 13
    },
    {
      firstName: "Leonard",
      lastName: "McCoy",
      age: 18
    }
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 37,
      opponentPoints: 96
    },
    {
      opponent: "Cavaliers",
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: "Washingtons",
      teamPoints: 58,
      opponentPoints: 29
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({ firstName, lastName, age });
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._players.push({opponent, teamPoints, opponentPoints});
  }
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Blazers", 2, 76);
team.addGame("Lakers", 86, 66);
team.addGame("Globetrotters", 0, 200);

console.log(team.players);
console.log(team.games);
