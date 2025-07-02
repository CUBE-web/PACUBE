'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'PACUBE');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

// HTMLの生成
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

var items = [];
for (var i = 1; i <= 10; i++) {
  items.push(i);
}

fractal.components.set('default.context', {
  'file-url': 'https://core.pa-cube.com/wpcube/wp-content/themes/cubetheme/',
  'items': items,
});