'use strict';

angular.module('ProtractorMeetupApp').controller('BandEditCtrl',
    function($scope, $routeParams, apiService, $location) {
      var bandId = $routeParams.bandId;

      // Get members and albums.
      $scope.members = apiService.member.query();
      $scope.albums = apiService.album.query();
      $scope.item = {};

      var handleError = function(response) {
        $scope.error = response.data;
      };

      if (bandId !== 'new') {
        $scope.item = apiService.band.get({id: bandId}, function() {
        }, handleError);
      }

      $scope.getMembers = function() {
        return _.filter($scope.members, function(item) {
          return !item.added;
        });
      };

      $scope.getAlbums = function() {
        return _.filter($scope.albums, function(item) {
          return !item.added;
        })
      };

      $scope.saveBand = function() {
        $scope.message = '';

        var isNew = bandId === 'new',
            item = angular.copy($scope.item);

        if (isNew) {
          apiService.band.save(
              item,
              function(newItem) {
                $scope.item = newItem;
                $location.path('/band-edit/' + newItem._id);
              }, handleError);
        } else {
          apiService.band.update(
              {id: bandId},
              _.omit(item, '_id'),
              function() {
                $scope.message = 'Band updated';
              }, handleError);
        }
      };

      // Add a new member.
      $scope.addMember = function() {
        if (!$scope.item.members) {
          $scope.item.members = [];
        }
        var item = $scope.selectedMember;
        item.added = true;
        $scope.item.members.push(item);
      };

      // Add a new album.
      $scope.addAlbum = function() {
        if (!$scope.item.albums) {
          $scope.item.albums = [];
        }
        var item = $scope.selectedAlbum;
        item.added = true;
        $scope.item.albums.push(item);
      };

      // Remove a member.
      $scope.removeMember = function(member) {
        member.added = false;
        $scope.item.members = _.without($scope.item.members, member);
      };

      // Remove an album.
      $scope.removeAlbum = function(album) {
        $scope.item.albums = _.without($scope.item.albums, album);
      };
    });
