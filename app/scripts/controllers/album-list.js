'use strict';

angular.module('ProtractorMeetupApp').controller('AlbumListCtrl', function($scope, apiService) {
  $scope.list = apiService.album.query();
});
