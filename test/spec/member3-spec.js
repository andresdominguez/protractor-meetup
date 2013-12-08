var pages = require('./pages');
var api = require('./api-helper');

describe('Member', function() {

  var editPage = pages.member.edit,
      listPage = pages.member.list;

  beforeEach(function() {
    listPage.navigate();
  });

  it('should create a new member', function() {
    listPage.createButton.click();

    editPage.name.sendKeys('New member');
    editPage.saveButton.click();

    expect(editPage.getId()).toBeDefined();
    expect(editPage.getMessage()).toBe('Member created');
  });

  it('should update existing member', function() {
    // Create a new member.
    api.member.create({name: 'test member'}).then(function(id) {
      editPage.navigate(id);
    });

    editPage.name.sendKeys('_updated');

    editPage.saveButton.click();

    expect(editPage.getMessage()).toBe('Member updated');
  });

  it('should delete member', function() {
    listPage.clickOnRow(0);

    var memberCount;
    api.member.findAll().then(function(list) {
      memberCount = list.length;
      console.log('Before it was ', memberCount);
    });

    editPage.deleteButton.click();

    api.member.findAll().then(function(list) {
      console.log('Now it is', list.length);
      expect(list.length).toBe(memberCount - 1);
    });
  });
});
