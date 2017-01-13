var nsr = {};
var request = require('request');

nsr.init = function(options) {
  nsr._options = options;
  nsr._authorization = 'NLAuth nlauth_account='+options.account+', nlauth_email='+options.email+', nlauth_signature='+options.pass+', nlauth_role='+options.role;
}

nsr.req = function(postData, options, cb) {
  if(!options) options = {};
  
  var opt = {
    url:      nsr._options.url,
    method:   options.method || "POST",
    body:     JSON.stringify({data:postData}),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': options.Authorization || nsr._authorization,
    }
  };
  
  request(opt, cb);
}

module.exports = nsr;