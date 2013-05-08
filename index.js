exports.variables = {
    botname: "Bot name: "
  , botname_upper: function(responses, done) {
      responses.botname_upcase = responses.botname.toUpperCase();
    }
  , botname_lower: function(responses, done) {
      responses.botname_upcase = responses.botname.toLowerCase();
    }
};