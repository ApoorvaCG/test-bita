/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
  },
  transformIgnorePatterns: [
    '/node_modules/(?!lucide-react).*/', 
  ],
  setupFiles: ["<rootDir>/setup.jest.ts"],
  setupFilesAfterEnv: ["<rootDir>/setup.jest.ts"],
  moduleFileExtensions: ['js', 'jsx', 'ts','tsx'],
  /*
  * This package has module issues,
  * info: mock data did not work as alternative to replicate similar env
  */
  // moduleNameMapper: {
  //   "^lucide-react$": "<rootDir>/src/__mocks__/lucide-react.js",
  // },
};
