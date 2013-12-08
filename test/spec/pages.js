var memberEdit = require('./member-edit-page');
var memberList = require('./member-list-page');

module.exports = {
  member: {
    /** @Type {MemberEditPage} */
    edit: memberEdit,
    /** @Type {MemberListPage} */
    list: memberList
  }
};
