const base = require('./jest.config.js');

module.exports = {
  ...base,
  collectCoverage: false,
  testMatch: ['**/?(*.)(e2e).js?(x)']
};
