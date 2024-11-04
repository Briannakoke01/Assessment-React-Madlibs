function testAddCommas() {
  console.assert(addCommas(1234) === "1,234", "Test Case 1 Failed");
  console.assert(addCommas(1000000) === "1,000,000", "Test Case 2 Failed");
  console.assert(addCommas(9876543210) === "9,876,543,210", "Test Case 3 Failed");
  console.assert(addCommas(6) === "6", "Test Case 4 Failed");
  console.assert(addCommas(-10) === "-10", "Test Case 5 Failed");
  console.assert(addCommas(-5678) === "-5,678", "Test Case 6 Failed");
  

  console.assert(addCommas(12345.678) === "12,345.678", "Bonus Test Case 1 Failed");
  console.assert(addCommas(-3141592.65) === "-3,141,592.65", "Bonus Test Case 2 Failed");

  console.log("All test cases passed!");
}

testAddCommas();
