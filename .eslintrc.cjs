module.exports = {
  root: true,
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
};
