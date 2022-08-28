/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs', 'ts', 'tsx', 'jsx'],
  testMatch: ['<rootDir>/src/**/*.(jest|test|).+(ts|js)'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  }
}
