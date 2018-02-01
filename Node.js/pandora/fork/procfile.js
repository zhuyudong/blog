'use strict';

module.exports = (pandora) => {

  pandora
    .fork('pandora', './app.js');

  /**
   * you can also use cluster mode to start application
   */
  // pandora
  //   .cluster('./app.js');

  /**
   * you can create another process here
   */
  // pandora
  //   .process('background')
  //   .argv(['--expose-gc']);

  /**
   * more features please visit our document.
   * https://github.com/midwayjs/pandora/
   */

};