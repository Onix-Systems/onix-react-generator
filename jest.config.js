module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/src/**/*.d.ts',
    '!**/App.js',
    '!**/reducers.js',
    '!**/src/components/reducers/**',
    '!**/src/components/store/store.js',
    '!**/src/registerServiceWorker.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/settings/setupTests.js'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__tests__/__mocks__/svgMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/?(*.)+(spec|test).js'],
  testEnvironment: 'jsdom'
};
