const team = {
    _players: [
      {firstName: 'Dorcas', 
       lastName: 'Brent',
       age: 12},
  
      { firstName: 'Lawrence', 
       lastName: 'Andy',
       age: 14},
  
       {firstName: 'Mckenzie', 
       lastName: 'Chris',
       age: 13} ],
  
    _games: [{
      opponent: 'Highgate',
      teamPoints: 31,
      opponentPoints: 29},
  
      {
      opponent: 'Loughbrough',
      teamPoints: 43,
      opponentPoints: 35},
      
      {
      opponent: 'Kinderwis',
      teamPoints: 11,
      opponentPoints: 9}
      ],
  
      get players() {
        return this._players;
      },
  
      get games() {
        return this._games;
      },
  
      addplayer (firstName, lastName, age) {
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
  
        this.players.push(player);
      },
  
      addGame (opponent, teamPoints, opponentPoints) {
        const game = {
          opponent: opponent,
          teamPoints: teamPoints,
          opponentPoints: opponentPoints
        };
         
         this.games.push(game);
      }
  };
  
  team.addplayer('Steph', 'Curry', 28);
  team.addplayer('Lisa', 'Leslie', 44);
  team.addplayer('Bugs', 'Bunny', 76);
  
  team.addGame('Germany', 39, 20);
  team.addGame('Londoner', 15, 9);
  team.addGame('Zealand', 44, 36);
  
  console.log(team.players);
  console.log(team.games);

  /* outputs:

  [ { firstName: 'Dorcas', lastName: 'Brent', age: 12 },
  { firstName: 'Lawrence', lastName: 'Andy', age: 14 },
  { firstName: 'Mckenzie', lastName: 'Chris', age: 13 },
  { firstName: 'Steph', lastName: 'Curry', age: 28 },
  { firstName: 'Lisa', lastName: 'Leslie', age: 44 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 } ]
[ { opponent: 'Highgate', teamPoints: 31, opponentPoints: 29 },
  { opponent: 'Loughbrough', teamPoints: 43, opponentPoints: 35 },
  { opponent: 'Kinderwis', teamPoints: 11, opponentPoints: 9 },
  { opponent: 'Germany', teamPoints: 39, opponentPoints: 20 },
  { opponent: 'Londoner', teamPoints: 15, opponentPoints: 9 },
  { opponent: 'Zealand', teamPoints: 44, opponentPoints: 36 } ]

  */