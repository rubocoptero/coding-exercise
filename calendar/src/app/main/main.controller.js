(function() {
  'use strict';

  angular
    .module('calendar')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Week, DateService, AvailabilityRepository) {
    var vm = this;

    vm.week = new Week();

    vm.isFirstPage = function () {
      return vm.week.contains(DateService.now());
    };

    vm.isLastPage = function () {
      var threeMonthsFromNowDate = DateService.now().add(3, 'months');

      return vm.week.contains(threeMonthsFromNowDate);
    };

    vm.nextWeek = function () {
      vm.week = vm.week.next();
    };

    vm.previousWeek = function () {
      vm.week = vm.week.previous();
    };

    vm.isAvailableOn = AvailabilityRepository.isAvailableOn;

    vm.isAPastDay = DateService.isAPastDay;
  }
})();
