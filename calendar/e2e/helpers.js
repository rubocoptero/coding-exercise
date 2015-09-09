var helpers = {};

helpers.mockUnavailableDates = function (dates) {
  browser.executeScript(function () {
      var injector = angular.element(
            document.getElementById('app')
        ).injector();

      var AvailabilityRepository = injector.get('AvailabilityRepository');

      AvailabilityRepository.loadUnavailableDates([
        '2015-09-11',
        '2015-09-12'
      ]);
  });
}

helpers.mockDateModule = function () {
  var dateMockModule = function () {
    var dateModule = angular.module('date');

    dateModule.factory('DateService', ['moment', function (moment) {
      var self = {};

      self.now = function () {
        return moment('2015-09-09');
      };

      self.parse = function (string) {
        return moment(string);
      };

      self.isAPastDay = function (date) {
        return self.now().isAfter(date, 'day');
      };

      return self;
    }]);
  };

  browser.addMockModule('date', dateMockModule);
}

module.exports = helpers;
