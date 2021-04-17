const parentChildMap = {
  4: 8,
  8: 3,
  3: 1,
  5: 3,
};

const keyz = Object.keys(parentChildMap);

console.log(keyz);

console.log(Object.values(parentChildMap));

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

console.log(getKeyByValue(parentChildMap, 8));

function getValueByKey(object, key) {
  return Object.values(object).find((value) => value === key);
}

console.log(getValueByKey(parentChildMap, 4));

function getNewValueByKey(value) {
  for (const [parent, child] of Object.entries(parentChildMap)) {
    if (child === value) {
      return parent;
    }
  }
}


console.log(getNewValueByKey(8));

 for (const [parent, child] of Object.entries(parentChildMap)) {
   if (child === 8) {
		console.log(parent)
   }
 }