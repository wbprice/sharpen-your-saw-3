'use strict'

function fibonacci(n) {

  const result = []
    
  function fib(x) {
    if (x === 0) {
      return 0;
    } else if (x === 1) {
      return 1;
    } else {
      return fib(x-1) + fib(x-2);
    }
  }

  for (let j = 1; j < n + 1; j++) {
    result.push(fib(j))
  }

  return result

}

module.exports.fibonacci = fibonacci

