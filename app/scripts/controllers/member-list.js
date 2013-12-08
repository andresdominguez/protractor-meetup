'use strict';

angular.module('ProtractorMeetupApp').
    controller('MemberListCtrl', function($scope, apiService) {
      apiService.member.query({}, function(data) {
        $scope.list = data;
      });
    });
