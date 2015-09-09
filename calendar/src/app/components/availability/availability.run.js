(function() {
  'use strict';

  angular
    .module('availability')
    .run(runBlock);

  /** @ngInject */
  function runBlock(AvailabilityRepository) {
    AvailabilityRepository.loadUnavailableDates([
      '2015-06-01',
      '2015-06-08',
      '2015-06-15',
      '2015-06-16',
      '2015-06-17',
      '2015-07-03',
      '2015-07-04',
      '2015-07-05',
      '2015-07-12',
      '2015-07-29',
      '2015-09-11',
      '2015-09-13'
    ]);
  }

})();
