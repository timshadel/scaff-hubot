exports.variables = {
    botname: "Bot name: "
  , botname_upper: function(responses, done) {
      responses.botname_upper = responses.botname.toUpperCase();
      done();
    }
  , botname_lower: function(responses, done) {
      responses.botname_lower = responses.botname.toLowerCase();
      done();
    }
};