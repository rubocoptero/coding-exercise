(function() {
  'use strict';

  angular
    .module('date')
    .factory('DateService', DateService);

  /** @ngInject */
  function DateService (moment) {
    var self = {};

    self.now = function () {
      return moment();
    };

    self.parse = function (string) {
      return moment(string);
    };

    self.isAPastDay = function (date) {
      return self.now().isAfter(date, 'day');
    };

    return self;
  }
})();
