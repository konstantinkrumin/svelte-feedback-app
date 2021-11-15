var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'http://konstantinkrumin.github.io/svelte-feedback-app',
    user: {
      name: 'Konstantin Krumin',
      email: 'konstantin.krumin@gmail.com',
    },
    dotfiles: true,
  },
  () => {
    console.log('Deploy Complete!');
  }
);
