'use strict'

const assert = require("chai").assert;
const model = require("../lib/backbone-ish-model");
const fib = require('../lib/fibonacci').fibonacci

describe("Fibonacci Sequence Generator", () => {
  
  it("Should print n numbers of the fibonnaci sequence", () => {

    const result1 = fib(3) 
    const result2 = fib(5)

    assert.deepEqual(result1, [1,1,2])
    assert.deepEqual(result2, [1,1,2,3,5])

  })

})
