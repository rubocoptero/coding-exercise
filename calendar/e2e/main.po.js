/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.previousWeekButton = element(by.id('previousWeekBtn'));
  this.nextWeekButton = element(by.id('nextWeekBtn'));
  this.days = element.all(by.css('.day-of-the-week'));

  this.getTitle = function () {
    return element(by.css('.current-week')).getText();
  };

  this.getClassesInDay = function (index) {
    return this.days.get(index).getAttribute('class');
  };
};

module.exports = new MainPage();
