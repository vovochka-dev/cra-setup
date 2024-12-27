module.exports = {
  extends: ['react-app', 'react-app/jest'],
  parserOptions: {
    babelOptions: {
      presets: [['babel-preset-react-app', false]],
    },
  },
};
