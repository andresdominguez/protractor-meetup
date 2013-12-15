'use strict';

angular.module('ProtractorMeetupApp').
    controller('MemberListCtrl', function($scope, apiService) {
      $scope.loading = true;

      apiService.member.query({}, function(data) {
        $scope.loading = false;
        $scope.list = data;
      });
    });
