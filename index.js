
var exec = require('child_process').exec, child;
var cfenv = require("cfenv");
var fs = require('fs');
var config = require('./node_modules/mongo-express/config.default.js');

// function to get credential from cf env
var getCredentials = function() {

	var appEnv = cfenv.getAppEnv();
	var services = appEnv.getServices();

	for (service in services) {
	  if (services[service].tags.indexOf("mongodb") >= 0) {
	    var credentials = services[service]["credentials"]

	    console.log("********************************");
	    console.log("Found ", service, " ", credentials);
	    console.log("********************************");

	    return credentials;
	  }
	}

};

// get credential from cf env
var credentials = getCredentials();

// compose config
config.mongodb.server = credentials.host;
config.mongodb.port = credentials.port;
config.mongodb.admin = false;
config.mongodb.auth.push({database: credentials.database,
				username: credentials.username,
				password: credentials.password});
config.site.port = (process.env.PORT || 9000);

// write config
fs.writeFile('./node_modules/mongo-express/config.js', "module.exports = " + JSON.stringify(config) + ";", function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

// start mongo-express
var cmd = "node ./node_modules/mongo-express/app.js";
child = exec(cmd,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

