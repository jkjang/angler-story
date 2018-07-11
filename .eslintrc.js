module.exports = {
  extends: ['airbnb-base', 'plugin:flowtype/recommended'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0,
    'consistent-return': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'object-property-newline': 0,
    'no-unused-vars': 1,
    'no-confusing-arrow': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-param-reassign': 0,
    camelcase: 0
  },
  plugins: ['flowtype']
};
// module.exports = {
//     env: {
//         es6: true,
//         node: true
//     },
//     extends: 'eslint:recommended',
//     parserOptions: {
//         sourceType: 'module'
//     },
//     rules: {
//         indent: ['error', 4],
//         'linebreak-style': 0,
//         // "linebreak-style": ["error", "windows"],
//         quotes: ['error', 'single'],
//         semi: ['error', 'never'],
//         'no-console': 0
//     }
// }
