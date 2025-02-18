module.exports = {
  rules: {
    semi: [2, 'always'],
    quotes: 0,
    'consistent-return': 0,
    'jsx-quotes': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-deprecated': 2,
    'react/no-multi-comp': 2,
    'react/no-typos': 2,
    'react/no-this-in-sfc': 2,
    'react/prefer-stateless-function': 2,
    'react/no-unsafe': 2,
    'react/self-closing-comp': 2,
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-props-no-spreading': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-cycle': 2,
    'import/imports-first': [2, 'absolute-first'],
    'import/newline-after-import': 2,
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 2,
    'import/no-default-export': 2,
    'import/no-mutable-exports': 2,
    'import/no-namespace': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown']
        ]
      }
    ],
    'promise/valid-params': 0,
    'no-useless-catch': 0,
    'sonarjs/no-useless-catch': 0,
    'sonarjs/cognitive-complexity': 0,
    'sonarjs/no-duplicated-branches': 0,
    'spaced-comment': 0,
    'no-empty-function': 2,
    'no-useless-constructor': 0,
    'lines-between-class-members': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-unused-expressions': 0
  }
};
