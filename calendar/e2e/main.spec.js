'use strict';

var helpers = require('./helpers');

describe('The week view', function () {
  var page;

  beforeEach(function () {
    page = require('./main.po');

    helpers.mockDateModule();

    browser.get('/');

    helpers.mockUnavailableDates([
      '2015-09-11',
      '2015-09-12',
    ]);
  });

  afterEach(function () {
    browser.clearMockModules();
  });

  it('should start at current week', function () {
    expect(page.getTitle()).toBe('Sep 6, 2015 - Sep 12, 2015');
  });

  it('should be disabled the previous week button', function () {
    expect(page.previousWeekButton.isEnabled()).toBe(false);
  });

  it('should be enabled the next week button', function () {
    expect(page.nextWeekButton.isEnabled()).toBe(true);
  });

  it('should have the days before today mark as past', function () {
    expect(page.getClassesInDay(0)).toContain('past-day');
  });

  it('should mark the unavailable days', function () {
    expect(page.getClassesInDay(5)).toContain('day-unavailable');
  });

  it('should mark the available days', function () {
    expect(page.getClassesInDay(4)).toContain('day-available');
  });

  describe('when next button is pressed 13 times, which goes three months from now', function () {
    beforeEach(function () {
      for (var i = 0, ii = 13; i < ii; i++) {
        page.nextWeekButton.click();
      }
    });

    it('should be disabled the next week button', function () {
      expect(page.nextWeekButton.isEnabled()).toBe(false);
    });
  });

  describe('when next week button is pressed', function () {
    beforeEach(function () {
      page.nextWeekButton.click();
    });

    it('should change week displayed', function () {
      expect(page.getTitle()).toBe('Sep 13, 2015 - Sep 19, 2015');
    });

    it('should be enabled the previous week button', function () {
      expect(page.previousWeekButton.isEnabled()).toBe(true);
    });

    describe('and after the previous week button is pressed', function () {
      beforeEach(function () {
        page.previousWeekButton.click();
      });

      it('should return at the week where it was before', function () {
        expect(page.getTitle()).toBe('Sep 6, 2015 - Sep 12, 2015');
      });
    });
  });

});
