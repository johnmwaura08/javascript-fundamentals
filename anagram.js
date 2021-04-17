var groupAnagrams = function (array) {
  var organized = {};
  for (var i = 0; i < array.length; i++) {
    var word = array[i].split("").sort().join("");
    if (!organized.hasOwnProperty(word)) {
      organized[word] = [];
    }
    organized[word].push(array[i]);
  }
  console.log(organized);
  console.log(Object.values(organized));
  return Object.values(organized);
};
let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));

const players = [
  "Salah",
  "Foden",
  "Bernardo",
  "Mane",
  "Pogba",
  "Bernardo",
  "Pogba",
  "Salah",
  "Foden",
];

//   const newNames = names.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
//   });
const filteredPlayers = players.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(filteredPlayers);
