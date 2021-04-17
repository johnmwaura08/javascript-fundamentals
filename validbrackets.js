function containsValidBraces(str) {
  // Write your code here
  if (str.match("/^[a-z0-9]+$/i")) {
    return "valid";
  }
  if (str.length % 2 !== 0) return "invalid";

  while (str.includes("{}") || str.includes("()") || str.includes("[]")) {
    str = str.replace("{}", "").replace("()", "").replace("[]", "");
  }
  if (str === "") {
    return "valid";
  } else {
    return "invalid";
  }
}

const str = "hey";
if (str.match(/^[a-z0-9]+$/i)) {
  console.log("valid");
} else {
  console.log("invalid");
}
function foo(bar) {
  for (let i = 0; i <= 4; i++) {
    if (arr[0] === arr[i]) {
      console.log("foo");
    }
  }
}
console.log(typeof foo === typeof str);

if (typeof str === "string") {
  console.log("valid");
}

function check(sequence) {
  if (sequence !== "") {
    if (sequence.includes("()")) {
      sequence = sequence.replace("()", "");
      check(sequence);
    } else if (sequence.includes("{}")) {
      sequence = sequence.replace("{}", "");
      check(sequence);
    } else if (sequence.includes("[]")) {
      sequence = sequence.replace("[]", "");
      check(sequence);
    } else {
      console.log("NO");
    }
  } else {
    console.log("YES");
  }
}

check("function foo(bar) { for(let i = 0; i <= 4; i++) { if(arr[0] === arr[i]) { console.log("foo"); } } }")