const players = [
    { name: "Sanju Samson", team: "RR", runs: 531 },
    { name: "Ruturaj Gaikwad", team: "CSK", runs: 583 },
    { name: "Virat Kohli", team: "RCB", runs: 700 },
    { name: "Travis Head", team: "SRH", runs: 567 },
    { name: "Riyan Parag", team: "RR", runs: 573 },
  ];

 let topscorer=(players) => {
    return players.sort((a, b) => b.runs - a.runs);
    return players.slice(0, 3);
 } 

//  no2

const teamWins = {
    "KKR": 5,
    "SRH": 3,
    "MI": 9,
    "CSK": 10,
    "RCB": 1
};

function maxwins(teamWins){
    const sortedwins = Object.keys(teamWins).sort((a, b) => teamWins[b] - teamWins[a]);
    console.log(sortedwins[0]);
}

//  no3
var teamname= prompt("enter team name");

function searchByTeam(players, teamname) {
    let teamplayers=players.filter(player => player.team === teamName);
    console.log(teamplayers);
  }
