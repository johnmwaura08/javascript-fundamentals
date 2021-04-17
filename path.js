function findPath(num) {
  // const parentChildMap = {};
  const children = [4, 8, 3, 5, 7, 9];
  const parents = [8, 3, 1, 3, 5, 7];
  // console.log(parents);

  // for (let i = 0; i < children.length; i++) {
  //   let myChild = children[i];
  //   console.log(myChild);
  //   return myChild;
  // }
  // console.log(myChild);
  // for (let i = 0; i < parents.length; i++) {
  //   let myParent = parents[i];
  //   console.log(myParent);
  //   return myParent;
  // }

  // child = myChild;
  // parent = myParent;
  // console.log(child);
  // parentChildMap[parent] = child;
  const childrenMap = {};
  const myArray = [];
  children.map((child, index) => {
    childrenMap[child] = parents[index];
  });
  console.log(childrenMap);

  const parenti = childrenMap[num];
  myArray.push(parenti);

  findPath(num);
  return myArray;
}
console.log(findPath(9));
const children = [4, 8, 3, 5, 7, 9];
const parents = [8, 3, 1, 3, 5, 7];

// const combined = [[...children], [...parents]];
// console.log(combined);
// console.log(Object.assign({}, children));

// console.log(parentChildMap);
// parentChildMap[parent];

// // console.log(combined.forEach(elem => elem))
// combined.forEach(
//   (com,
//   index,
//   (arr) => {
//     console.log(com);
//   })
// );

// console.log(
//   combined
//     .map((com) => {
//       com;
//     })
//     .forEach((elem) => elem)
// );
// // parentChildMap.chicken = "5";
// // parentChildMap["cows"] = "5";

// console.log(parentChildMap);

// parents.map((parent, i) => {
//   return parent;
// });

// parentChildMap[parent] = child;

// console.log(parentChildMap);

// const kids = children.map((child) => {
//   console.log(child);
//   return {
//     child: "potato",
//   };
// });
// console.log(kids);

let combinedArray = (arrayOne, arrayTwo) =>
  arrayOne.map((val, i) => [val, arrayTwo[i]]);

console.log(combinedArray(children, parents)); //returns [ [ 4, 8 ], [ 8, 3 ], [ 3, 1 ], [ 5, 3 ], [ 7, 5 ], [ 9, 7 ] ]

const convertedArrayToObject = Object.fromEntries(
  combinedArray(children, parents)
);

console.log(
  convertedArrayToObject
); /*
returns { 
  3: 1,
  4: 8, 
  5: 3, 
  7: 5, 
  8: 3, 
  9: 7 
}  
*/

let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

console.log(Object.fromEntries(zip(children, parents)));

// function findPath() {
//   // const parentChildMap = {};
//   const children = [4, 8, 3, 5, 7, 9];
//   const parents = [8, 3, 1, 3, 5, 7];

//   const dictionary = {};

//   children.map((child, index) => {
//     dictionary[child] = parents[index]
//   })

//   console.log(dictionary)

//   const pathArray = [];
//   const findParent = (child) => {
//     const parent = dictionary[child];
//     if(!parent){
//       return
//     }
//     pathArray.push(parent);
//     findParent(parent)
//   }
//   findParent(7)
//   console.log(pathArray)

// }

function findPath(child) {
  const children = [4, 8, 3, 5, 7, 9];
  const parents = [8, 3, 1, 3, 5, 7];

  const dictionary = {};

  children.map((child, index) => {
    dictionary[child] = parents[index];
  });

  console.log(dictionary);

  const pathArray = [];
  const findParent = (child, paths) => {
	const parent = dictionary[child];
	if(!parent) return paths;
	const newArray = [...paths, parent];
	return findParent(parent, newArray)
  };
  return findParent(child,[]);
}
console.log(findPath(9));


