import brain from "brain.js";

const network = new brain.NeuralNetwork();
network.train([
  { input: { age: 90 }, output: { senior: 1, adult: 0 } },
  { input: { age: 65 }, output: { senior: 1, adult: 0 } },
  { input: { age: 70 }, output: { senior: 1, adult: 0 } },
  { input: { age: 55 }, output: { senior: 1, adult: 0 } },
  { input: { age: 5 }, output: { toddler: 1 } },
  { input: { age: 3 }, output: { toddler: 1 } },
  { input: { age: 1 }, output: { infant: 1 } },
  { input: { age: 0 }, output: { infant: 1 } },
  { input: { age: 13 }, output: { teen: 1, adult: 0 } },
  { input: { age: 17 }, output: { teen: 1, adult: 0 } },
  { input: { age: 18 }, output: { teen: 0, adult: 1 } },
  { input: { age: 20 }, output: { adult: 1, senior: 0 } },
  { input: { age: 22 }, output: { adult: 1, senior: 0 } },
  { input: { age: 30 }, output: { middleage: 1 } },
  { input: { age: 50 }, output: { middleage: 1 } }
]);

const result = network.run({ age: "75" });

const sortedResult = Object.keys(result)
  .sort((a, b) => result[a] < result[b])
  .map(sorted => {
    const mapped = {};
    mapped[sorted] = `${Math.floor(result[sorted] * 100)}%`;
    return mapped;
  });

const highestProbability = sortedResult[0];

console.log(result, sortedResult, highestProbability);
