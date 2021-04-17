const arr = [1, 2, 3, 4, 5];

function filt(num) {
  something = arr.filter((val) => val < num);
  something.push(num);

  return something;
}

console.log(filt(4));
function nodePath(num) {
  if (arr.includes(num)) {
    arr.map((val) => val).filter((val) => val < num);
  } else {
    return "not a node ";
  }
}

console.log(nodePath(2));

function findPath(num) {
  if (arr.includes(num)) {
    pathArr = arr.filter((val) => val < num);
    pathArr.push(num);
    return pathArr;
  } else {
    return "not a node ";
  }

}

console.log(findPath(5))