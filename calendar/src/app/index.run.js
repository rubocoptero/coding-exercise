(function() {
  'use strict';

  angular
    .module('calendar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
