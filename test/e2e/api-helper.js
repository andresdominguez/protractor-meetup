module.exports = {
  member: {
    findAll: function() {
      return browser.executeAsyncScript(function(callback) {
        var api = angular.injector(['ProtractorMeetupApp']).get('apiService');
        api.member.query({}, function(data) {
          callback(data);
        });
      })
    },
    create: function(data) {
      return browser.executeAsyncScript(function(data, callback) {
        var api = angular.injector(['ProtractorMeetupApp']).get('apiService');
        api.member.save(data, function(newItem) {
          callback(newItem._id);
        })
      }, data);
    }
  }
};
