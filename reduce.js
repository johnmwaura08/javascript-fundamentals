const wasee = [
  { id: 1, name: "Jonte", age: 24 },
  { id: 2, name: "Laura", age: 25 },
  { id: 3, name: "Bonzo", age: 0.5 },
];

const findAges = wasee.reduce((acc, msee) => {
  return { ...acc, [msee.id]: msee };
}, {});

console.log(findAges);
