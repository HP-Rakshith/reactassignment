// const players = [
//     { name: "Sanju Samson", team: "RR", runs: 531 },
//     { name: "Ruturaj Gaikwad", team: "CSK", runs: 583 },
//     { name: "Virat Kohli", team: "RCB", runs: 700 },
//     { name: "Travis Head", team: "SRH", runs: 567 },
//     { name: "Riyan Parag", team: "RR", runs: 573 },
//   ];

//  let topscorer=(players) => {
//     return players.sort((a, b) => b.runs - a.runs);
//     return players.slice(0, 3);
//  } 

// //  no2

// const teamWins = {
//     "KKR": 5,
//     "SRH": 3,
//     "MI": 9,
//     "CSK": 10,
//     "RCB": 1
// };

// function maxwins(teamWins){
//     const sortedwins = Object.keys(teamWins).sort((a, b) => teamWins[b] - teamWins[a]);
//     console.log(sortedwins[0]);
// }

// //  no3
// var teamname= prompt("enter team name");

// function searchByTeam(players, teamname) {
//     let teamplayers=players.filter(player => player.team === teamName);
//     console.log(teamplayers);
//   }

// function exp

const calculateVotes = function(candidateName, votes, region) {
    return `${candidateName} received ${votes} votes in the ${region} region.`;
};

// verification

let evm=[1000,2000,3000,4000,5000];
let vvpat=[1000,1999,3005,4001,5000];

function totalverifiedvotes(evm,vvpat){
    if(evm[i]%vvpat[i]>10){
        return 'error'
    }
    else{
      i++;
      return vvpat + totalverifiedvotes(i,i);
    }
}

// rest
function totalVotes(...votes) {
    return votes.reduce((total, current) => total + current, 0);
}

vote_from_diff_region = totalVotes(15000, 20000, 35000, 50000)
console.log(vote_from_diff_region);

// arrow function
const filterCandidates = (candidates, threshold) => {
    return candidates.filter((e) => e.votes > threshold);
}
console.log(filterCandidates(candidates, 500));

// all topics

const analzelection=(threshold, ...candidates) => {
    const filteredCandidates =  candidates.filter((e) => e.votes > threshold);

    const totalverifiedvotes=(filteredCandidates){
        if(filteredCandidates.evm[i]%filteredCandidates.vvpat[i]>10){
            return 'error'
        }
        else{
          i++;
          return vvpat + totalverifiedvotes(i,i);
        }
    };

    const candidateNames = filteredCandidates.map(candidate => candidate.name);
    const totalVotes = recursiveTotalVotes(filteredCandidates.map(candidate => candidate.votes));
    
    return {
        filteredCandidates: candidateNames,
        totalVotes: totalVotes
    };
};

const candidateData = [
    { name: "aaa", evm: 1000, vvpat:1000},
    { name: "bbb", evm: 2000,vvpat:2006},
    { name: "ccc", evm: 6000 ,vvpat:5995}
];
console.log(analyzeElection(8000, ...candidateData));