module.exports = {
  // A preset that is used as a base for Jest's configuration
  // preset: "jest",
  // The test environment that will be used for testing
  testEnvironment: "node",

  // These are variables assessible from any test
  globals: {},

  //**/laratest/**/*.test.js
  testMatch: ["**/e2e-unit/**/*.test.js"],
  testTimeout: 30000
};
