module.exports = {
  '*.js': [
    'eslint --fix --max-warnings 0 --no-ignore', // setup to run prettier as part of the process
    'git add',
  ],
  '*.{css,json,md}': ['prettier --write', 'git add'],
};
