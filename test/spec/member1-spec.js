describe('Member', function() {
  it('should create a new member', function() {
    browser.get('#/member-list');

    $('.btn-primary').click();

    element(by.model('item.name')).sendKeys('New member');

    $('.btn-primary').click();

    var idElement = element(by.model('item._id'));
    expect(idElement.getAttribute('value')).toBeDefined();
    idElement.getAttribute('value').then(function(value) {
      console.log('value', value);
    });
    expect(element(by.binding('message')).getText()).toBe('Member created');
  });

  it('should update existing member', function() {
    browser.get('#/member-list');

    var list = element.all(by.repeater('item in list'));
    list.get(0).findElement(by.css('a')).click();

    // Get the name.
    element(by.model('item.name')).getAttribute('value').then(function(name) {
      return name + '_Updated';
    }).then(function(updatedName) {
      var field = element(by.model('item.name'));
      field.clear();
      field.sendKeys(updatedName);
    });

    $('.btn-primary').click();

    expect(element(by.binding('message')).getText()).toBe('Member updated');
  });
});
