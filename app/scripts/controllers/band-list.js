'use strict';

angular.module('ProtractorMeetupApp').
    controller('BandListCtrl', function($scope, apiService) {
      apiService.band.query(function(data) {
        $scope.bandList = data;
      });
    });
