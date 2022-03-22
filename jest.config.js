module.exports = {
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
  roots: ['<rootDir>/src'],
  testMatch: ['test/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}
