

 function createCounter(n) {
  let count = n;

  return function() {
    return count++;
  };
}

// Example usage:
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

 