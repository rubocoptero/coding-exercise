(function() {
  'use strict';

  describe('controllers', function(){
    var vm, $controller, DateService;

    beforeEach(module('calendar'));

    beforeEach(inject(function (_$controller_, _DateService_) {
      $controller = _$controller_;
      DateService = _DateService_;
    }));

    function buildController () {
      vm = $controller('MainController', {
        DateService: DateService
      });
    }

    describe('given a week', function () {
      beforeEach(function () {
        spyOn(DateService, 'now')
          .and.returnValue(DateService.parse('2015-09-09'));

        buildController();
      });
    });
  });
})();
