const request = require('superagent');

module.exports = function(zip) {
  const userURL = process.env.WUNDERGROUND_URL + zip + ".json";

  return new Promise((resolve, reject) => {
  	request.get(userURL)
      .end(function(err, res) {
      	if (err)
      	  reject(err);
        else
          resolve(res.body);
      })
  });
}