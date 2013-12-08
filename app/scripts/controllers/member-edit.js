'use strict';

angular.module('ProtractorMeetupApp').controller('MemberEditCtrl',
    function($scope, $routeParams, apiService, $location) {
  var memberId = $routeParams.memberId;

  if (memberId !== 'new') {
    $scope.item = apiService.member.get({id: memberId});
  }

  var handleError = function(response) {
    $scope.error = response.data;
  };

  // Delete the member.
  $scope.remove = function() {
    apiService.member.remove({id: memberId}, function() {
      $location.path('/member-list');
    }, handleError);
  };

  $scope.save = function() {
    $scope.message = '';

    var isNew = memberId === 'new',
        item = angular.copy($scope.item);

    if (isNew) {
      apiService.member.save($scope.item, function(newItem) {
        $scope.item = newItem;
        $scope.message = 'Member created';
      }, handleError);
    } else {
      apiService.member.update({id: memberId}, _.omit(item, '_id'), function() {
        $scope.message = 'Member updated';
      }, handleError);
    }
  };
});
