/**
 * Created by sam on 24/04/17.
 */
module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.svg',
    'dist/**.woff',
    'dist/**.woff2',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
