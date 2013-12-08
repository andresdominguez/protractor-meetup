var pages = require('./pages');

describe('Member', function() {

  var editPage = pages.member.edit,
      listPage = pages.member.list;

  it('should create a new member', function() {
    listPage.navigate();
    listPage.createButton.click();

    editPage.name.sendKeys('New member');
    editPage.saveButton.click();

    expect(editPage.getId()).toBeDefined();
    expect(editPage.getMessage()).toBe('Member created');
  });

  it('should update existing member', function() {
    listPage.navigate();
    listPage.clickOnRow(0);

    editPage.name.sendKeys('_updated');
    editPage.saveButton.click();

    expect(editPage.getMessage()).toBe('Member updated');
  });
});
