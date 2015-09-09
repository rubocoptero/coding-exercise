(function() {
  'use strict';

  angular
    .module('availability')
    .factory('AvailabilityRepository', AvailabilityRepository);

  /** @ngInject */
  function AvailabilityRepository (DateService) {
    var self = {},
      unavailableDates = [];

    self.loadUnavailableDates = function (dates) {
      unavailableDates = dates.map(DateService.parse);
    };

    self.isAvailableOn = function (target) {
      return ! (unavailableDates.some(isSameDay));

      function isSameDay (date) {
        return date.isSame(target, 'day');
      }
    };

    return self;
  }
})();
