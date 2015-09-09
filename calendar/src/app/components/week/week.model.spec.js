(function() {
  'use strict';

  describe('Week', function(){
    var Week, DateService, moment;

    beforeEach(module('week'));

    beforeEach(inject(function (_Week_, _DateService_, _moment_) {
      Week = _Week_;
      DateService = _DateService_;
      moment = _moment_;
    }));

    it('should be defined ', function() {
      expect(Week).toBeDefined();
    });

    describe('given a week without date', function () {
      it('then should build it based in today date', function () {
        var week = new Week();

        expect(week.startsOn().isSame(DateService.now().startOf('week'), 'day')).toBe(true);
        expect(week.endsOn().isSame(DateService.now().endOf('week'), 'day')).toBe(true);
      });
    });

    describe('given a week with a date as argument', function () {
      var date, week;

      beforeEach(function () {
        date = DateService.parse('2015-03-02');
        week = new Week(date);
      });

      it('then should build it based in that date', function () {
        expect(week.startsOn().isSame(date.clone().startOf('week'), 'day')).toBe(true);
        expect(week.endsOn().isSame(date.clone().endOf('week'), 'day')).toBe(true);
      });

      it('then should get the containing days as an array', function () {
        var days = week.getDays();

        expect(days[0].isSame('2015-03-01', 'day')).toBe(true);
        expect(days[1].isSame('2015-03-02', 'day')).toBe(true);
        expect(days[2].isSame('2015-03-03', 'day')).toBe(true);
        expect(days[3].isSame('2015-03-04', 'day')).toBe(true);
        expect(days[4].isSame('2015-03-05', 'day')).toBe(true);
        expect(days[5].isSame('2015-03-06', 'day')).toBe(true);
        expect(days[6].isSame('2015-03-07', 'day')).toBe(true);
      });

      it('then should know if it contains a date', function () {
        expect(week.contains(DateService.parse('2015-03-08'))).toBe(false);
        expect(week.contains(DateService.parse('2015-03-07'))).toBe(true);
        expect(week.contains('2015-03-01')).toBe(true);
      });

      describe('#next', function () {
        it('should return a instance with the next week to the current one', function () {
          var nextWeek = date.add(1, 'week');

          expect(week.next()).toEqual(new Week(nextWeek));
        });
      });

      describe('#previous', function () {
        it('should return a instance with the previous week to the current one', function () {
          var previousWeek = date.subtract(1, 'week');

          expect(week.previous()).toEqual(new Week(previousWeek));
        });
      });
    });
  });
})();
