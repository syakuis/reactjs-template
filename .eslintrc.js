module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecotators: true,
      jsx: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parser': '@babel/eslint-parser',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: './webpack.config.dev.js',
      },
    },
  },
  rules: {
    'no-console': 'off',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': ['error'],
    'react/prop-types': ['error'],
    'jsx-a11y/label-has-for': [
      'error',
      {
        // components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/mouse-events-have-key-events': ['off'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['invalidHref'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      parser: '@babel/eslint-parser',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: [
        '@babel',
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'testing-library',
        'prettier',
      ],
    },
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'testing-library',
        'prettier',
      ],
      // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
      },
    },
  ],
};
