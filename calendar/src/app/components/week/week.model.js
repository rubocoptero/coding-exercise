(function() {
  'use strict';

  angular
    .module('week')
    .factory('Week', WeekModel);

  /** @ngInject */
  function WeekModel (DateService) {
    var NUMBER_OF_DAYS = 7;

    function Week (date) {
      this.date = date || DateService.now();
      this.days = buildDaysOfTheWeekFrom(this.date);
    }

    Week.prototype.startsOn = function () {
      return this.days[0].clone();
    };

    Week.prototype.endsOn = function () {
      return this.days[NUMBER_OF_DAYS - 1].clone();
    };

    Week.prototype.getDays = function () {
      return this.days;
    };

    Week.prototype.contains = function (date) {
      return this.date.isSame(date, 'week');
    };

    Week.prototype.next = function () {
      return new Week (this.date.add(1, 'week'));
    };

    Week.prototype.previous = function () {
      return new Week (this.date.subtract(1, 'week'));
    };

    return Week;

    function buildDaysOfTheWeekFrom (date) {
      var startingAt = date.clone().startOf('week'),
        days = [];

      for (var i = 0, ii = NUMBER_OF_DAYS; i < ii; i++) {
        days.push(startingAt.clone().add(i, 'days'));
      }

      return days;
    }
  }
})();
