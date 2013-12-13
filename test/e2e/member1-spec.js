describe('Member', function() {
  it('should create a new member', function() {
    // Navigate to list page.
    browser.get('#/member-list');

    // Click on the create button.
    element(by.linkText('Create new')).click();

    // Enter a name.
    element(by.model('item.name')).sendKeys('New member');

    // Save.
    $('.btn-primary').click();

    // Expect an id to be generated.
    expect(element(by.model('item._id')).getAttribute('value')).toBeDefined();

    // Expect a message to be shown.
    expect(element(by.binding('message')).getText()).toBe('Member created');

    // With a promise.
    element(by.binding('message')).getText().then(function(text) {
      console.log('The message is: ' + text);
    });
  });
});
