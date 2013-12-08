'use strict';

describe('Controller: BandEditCtrl', function() {

  beforeEach(module('ProtractorMeetupApp', 'ControllerTestHelper'));

  beforeEach(inject(function(jasmineMatchers) {
    this.addMatchers(jasmineMatchers);
  }));

  var BandEditCtrl, scope, controller, rootScope, routeParams, theMocks, fake;

  var createController = function(bandId) {
    routeParams.bandId = bandId;

    scope = rootScope.$new();
    BandEditCtrl = controller('BandEditCtrl', {
      $scope: scope
    });
  };

  beforeEach(inject(function($controller, $rootScope, $routeParams, mocks, fakeResource) {
    controller = $controller;
    rootScope = $rootScope;
    routeParams = $routeParams;
    theMocks = mocks;
    fake = fakeResource;

    fake.album.whenGetList().returnsDefault();
    fake.member.whenGetList().returnsDefault();
    fake.band.whenGetById().returnsDefault();
  }));

  it('should load existing band', function() {
    // Given that you load an exiting band.
    createController(123);
    expect(scope.item).toEqualData({});
    expect(scope.albums).toEqualData([]);
    expect(scope.members).toEqualData([]);

    // When you receive the data.
    fake.flush();

    // Then ensure the scope variables contain the data.
    expect(scope.item).toEqualData(theMocks.band.getById());
    expect(scope.albums.length).toEqual(2);
    expect(scope.members.length).toEqual(3);

    // Ensure the resources were requested.
    expect(fake.album).toHaveBeenRequested();
    expect(fake.band).toHaveBeenRequested();
    expect(fake.member).toHaveBeenRequested();
  });

  it('should create new band', function() {
    fake.band.whenCreate().returns({
      id: 1,
      name: 'Beastie boys'
    });

    // Given that you load a new band.
    createController('new');
    expect(scope.item).toBeDefined();
    fake.flush();

    // When you add a new band.
    scope.item = {
      name: 'Beastie boys'
    };
    scope.saveBand();
    fake.flush();

    // Then ensure the album was created with id 1.
    expect(scope.item).toEqualData({id: 1, name: 'Beastie boys'});

    // Ensure the resources were requested.
    expect(fake.album).toHaveBeenRequested();
    expect(fake.band).not.toHaveBeenRequested();
    expect(fake.member).toHaveBeenRequested();
    expect(fake.band).toHaveBeenCreated();
  });

  it('should update an existing band', function() {
    fake.band.whenUpdate().returns();

    // Given that you load an existing band.
    createController(123);
    fake.flush();

    // When you update the band with a new name.
    expect(scope.message).toBeUndefined();
    scope.item.name = 'Bboys';
    scope.saveBand();
    fake.flush();

    // Then ensure a message is shown.
    expect(scope.message).toEqual('Band updated');

    // And ensure the band was updated.
    expect(fake.band).toHaveBeenUpdated();
    expect(fake.band).toHaveBeenUpdatedWith({name: 'Bboys'});
  });

  it('should get members', function() {
    createController(123);

    // There are no members before response.
    expect(scope.getMembers()).toEqualData([]);
    fake.flush();

    // Ensure there are members after response.
    expect(scope.getMembers().length).toBe(3);
  });

  describe('Add / remove members', function() {
    it('should add member', function() {
      // Given that you load an existing band.
      createController(123);
      fake.flush();

      // When you add a member.
      scope.selectedMember = scope.members[0];
      scope.addMember();

      // Then ensure the member was added.
      expect(scope.item.members.length).toBe(1);
      expect(scope.members[0].added).toBe(true);

      // And ensure the member list has 2 items.
      expect(scope.getMembers().length).toBe(2);
    });

    it('should remove member', function() {
      // Given a band with one member.
      createController(123);
      fake.flush();
      var member = scope.members[0];
      scope.selectedMember = member;
      scope.addMember();

      // When you remove the member.
      scope.removeMember(member);

      // Then ensure the member was removed.
      expect(scope.getMembers().length).toBe(3);
      expect(member.added).toBe(false);
    });
  });
});
