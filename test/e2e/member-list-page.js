/**
 * Page object for member list.
 * @constructor
 */
MemberListPage = function() {
  this.createButton = $('.btn-primary');

  this.navigate = function() {
    browser.get('#/member-list');
  };

  this.clickOnRow = function(index) {
    var list = element.all(by.repeater('item in list'));
    list.get(index).findElement(by.css('a')).click();
  }
};

module.exports = new MemberListPage();
