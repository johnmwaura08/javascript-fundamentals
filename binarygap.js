/**

 *  A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */


function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  N = N.toString(2); //converts to binary
  let numberOfOnes = 0;
  let binaryGap = 0;
  let binaryZeros = 0;
  for (let i = 0; i < N.length; i++) {
    if (N[i] > 0) {
      numberOfOnes++;
    }
  }
  console.log(numberOfOnes);
  if (numberOfOnes) {
    for (let j = 0; j < N.length; j++) {
      if (N[j] > 0) {
        if (binaryZeros) {
          if (binaryZeros > binaryGap) {
            binaryGap = binaryZeros;
            console.log(binaryGap);
            console.log(binaryZeros);
          }
        }
        binaryZeros = 0;
      }
      if (N[j] < 1) {
        binaryZeros++;
      }
    }
  } else {
    binaryGap = 0;
  }
  return binaryGap;
}

console.log(solution(1041));


function binGap(N) {
  var max = 0;
  var count = 0;
  var binary = Number(N).toString(2);
  Array.prototype.forEach.call(binary, function (i) {
    if (i == 0) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  });
  return max;
}

console.log(binGap(1041))