/* eslint-disable */
export default {
  displayName: 'web-welcome',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web/welcome',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
