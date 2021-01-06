// Given a collection of game outcome records, determine who all the players are by returning an array of their names.

// The array should be ordered by how the names are encountered.

// Example Input:

// [
//   { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
//   { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
//   { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
//   { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
//   { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
//   { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
//   { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
// ]

// Expected Result:

// ['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']

// */

const result = [];
for (const obj of outcomes) {
  if (!result.includes(obj["winner"])) {
    result.push(obj["winner"]);
  }
  if (!result.includes(obj["loser"])) {
    result.push(obj["loser"]);
  }
}
return result;

// OR

const allPlayerNames = outcomes => {
  let tempArr = [];
  for (let obj of outcomes) {
    tempArr.push(obj["winner"]);
    tempArr.push(obj["loser"]);
  }
  let namesArr = [...new Set(tempArr)];
  return namesArr;
};
