(function() {
  'use strict';

  describe('Availability Repository', function(){
    var DateService, AvailabilityRepository;

    beforeEach(module('availability'));

    beforeEach(inject(function (_AvailabilityRepository_, _DateService_) {
      DateService = _DateService_;
      AvailabilityRepository = _AvailabilityRepository_;
    }));

    it('should be defined ', function() {
      expect(AvailabilityRepository).toBeDefined();
    });

    it('should know when a date is available', function () {
      AvailabilityRepository.loadUnavailableDates(['2015-06-15']);

      expect(AvailabilityRepository.isAvailableOn(DateService.parse('2015-06-15'))).toBe(false);
      expect(AvailabilityRepository.isAvailableOn('2015-06-15')).toBe(false);
      expect(AvailabilityRepository.isAvailableOn(DateService.parse('2015-06-13'))).toBe(true);
      expect(AvailabilityRepository.isAvailableOn('2015-06-13')).toBe(true);
    });
  });
})();
