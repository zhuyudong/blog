'use strict';

module.exports = (bu, callback) => process.nextTick(() => callback(`hello ${bu}`));