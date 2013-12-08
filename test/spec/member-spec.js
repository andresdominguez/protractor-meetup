describe('Member', function() {
  xit('should create a new member', function() {
    browser.get('#/member-list');

    $('.btn-primary').click()

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

    list.get(0).then(function(row) {
      return row.findElement(by.css('a'));
    }).then(function(link) {
          link.click();
        })

    browser.sleep(3000);
  });
});
