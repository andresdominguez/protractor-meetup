/**
 * Page object for member properties.
 * @constructor
 */
MemberEditPage = function() {
  this.name = element(by.model('item.name'));
  this.saveButton = $('.btn-primary');
  this.deleteButton = $('.btn-danger');

  this.navigate = function(memberId) {
    browser.get('#/member-edit/' + memberId);
  };

  this.getId = function() {
    return element(by.model('item._id')).getAttribute('value');
  };

  this.getMessage = function() {
    return element(by.binding('message')).getText();
  };
};

module.exports = new MemberEditPage();
