const mergeOptions = require('merge-options')

const config = require('./ts')

module.exports = mergeOptions({}, config, {
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
})
