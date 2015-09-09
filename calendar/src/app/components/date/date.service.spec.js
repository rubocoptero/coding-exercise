(function() {
  'use strict';

  describe('Date Service', function(){
    var DateService, moment;

    beforeEach(module('date'));

    beforeEach(inject(function (_DateService_, _moment_) {
      DateService = _DateService_;
      moment = _moment_;
    }));

    it('should be defined ', function() {
      expect(DateService).toBeDefined();
    });

    it('should return moment when now is called', function () {
      expect(DateService.now().isSame(moment(), 'days')).toBe(true);
    });

    it('should parse a string', function () {
      expect(DateService.parse('2015-06-01')).toEqual(moment('2015-06-01'));
    });

    describe('#isAPastDay', function () {
      it('should be false if it is the same', function () {
        expect(DateService.isAPastDay(DateService.now())).toBe(false);
      });

      it('should be false if it is a following day', function () {
        expect(DateService.isAPastDay(DateService.now().add(1, 'day'))).toBe(false);
      });

      it('should be true if it is a past day', function () {
        expect(DateService.isAPastDay(DateService.now().subtract(1, 'day'))).toBe(true);
      });
    });
  });
})();
