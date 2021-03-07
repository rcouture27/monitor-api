'use strict';

module.exports = function(Ph) {
  Ph.on('dataSourceAttached', function(obj){
    console.log("attached");
  });
};
