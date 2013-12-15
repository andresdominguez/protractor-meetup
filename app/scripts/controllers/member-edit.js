'use strict';

angular.module('ProtractorMeetupApp').controller('MemberEditCtrl',
    function($scope, $routeParams, apiService, $location) {
  var memberId = $routeParams.memberId;
  $scope.loading = true;

  if (memberId === 'new') {
    $scope.item = {};
    $scope.loading = false;
  } else {
    $scope.item = apiService.member.get({id: memberId}, function() {
      $scope.loading = false;
    });
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

    var isNew = !$scope.item._id,
        item = angular.copy($scope.item);

    if (isNew) {
      apiService.member.save($scope.item, function(newItem) {
        $scope.item = newItem;
        $scope.message = 'Member created';
      }, handleError);
    } else {
      var params = {id: item._id};
      apiService.member.update(params, _.omit(item, '_id'), function() {
        $scope.message = 'Member updated';
      }, handleError);
    }
  };
});
