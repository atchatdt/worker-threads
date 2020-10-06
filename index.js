const glob = require('glob');
const imageScale = require('./image-scale-threaded');
// const imageScale = require('./image-scale-single');

(async () => {
  await Promise.all(glob
    .sync('./images/*.png')
    .filter(img => img.indexOf('_small') < 0)
    .map(imageScale));
})();

