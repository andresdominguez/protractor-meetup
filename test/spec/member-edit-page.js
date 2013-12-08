/**
 * Page object for member properties.
 * @constructor
 */
MemberEditPage = function() {
  this.name = element(by.model('item.name'));
  this.saveButton = $('.btn-primary');

  this.getId = function() {
    return element(by.model('item._id')).getAttribute('value');
  };

  this.getMessage = function() {
    return element(by.binding('message')).getText();
  };
};

module.exports = MemberEditPage;
