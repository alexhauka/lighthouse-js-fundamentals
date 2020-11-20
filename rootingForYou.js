const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'








/* STEPS:
first, declare highestScore and winner variable set to beginning of object array
  ---square brackets are used for metric to access the variable 
second, use a 'for' loop to iterate through all elements of object array
third, use 'if' to compare scored metric to current highestScore var
fourth, have resulting highest score replace highestScore var
fifth, set winner var using same object index as highestScore
last, return winner var
*/
function judgeVegetable(vegetables, metric) {
  let highestScore = vegetables[0][metric];
  let winner = vegetables[0].submitter;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highestScore) {
      highestScore = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;
}





console.log(judgeVegetable(vegetables, metric))