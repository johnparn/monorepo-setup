module.exports = {
  setupFiles: ['<rootDir>/shim.js'],
  resetMocks: true,
  resetModules: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.js',
    '!packages/coverage/**',
    '!packages/**/dist/**',
    '!storybook/**',
    '!**/node_modules/**',
    '!**/*.story.js',
    '!**/*.spec.js',
    '!**/*.test.js',
    '!**/*.e2e.js'
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      statements: 90,
      lines: 90
    }
  },
  coverageReporters: ['text'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/.storybook/',
    'setupTests.js'
  ],
  testMatch: ['**/?(*.)(spec).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/web/',
    '<rootDir>/coverage/',
    '<rootDir>/storybook/'
  ]
};
