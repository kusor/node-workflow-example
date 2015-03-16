
if (process.argv.length < 4) {
    console.error('Github username and password/token required as arguments');
    process.exit(1);
}

var $login = process.argv[2];
var $password = process.argv[3];

var exec = require('child_process').exec;
var scripts = [{name: 'api.js'}, {name:'module.js'}, {name:'node.js'}];

var i = 0, current = 0;

scripts.forEach(function(script) {
	script.exec = function() {
		script.start = {
			'date': new Date(),
			'hrtime': process.hrtime()
		}
		var child = exec('node ./' + script.name + ' ' + $login + ' ' + $password);
//		child.stdout.on('data', console.log);
		child.stderr.on('data', console.error);
		child.on('close', function() {
			script.end = {
				'date': new Date() - script.start.date,
				'hrtime': process.hrtime(script.start.hrtime)
			}
			current++;
			if (current == scripts.length)
				fin();
			else
				scripts[current].exec();
		});
	};
	if (++i == scripts.length)
		scripts[current].exec();
});

function fin() {
	scripts.forEach(function(script) {
 		console.info("(%s)\tExecution time:\t%dms", script.name, script.end.date);
//		console.info("(%s)\tExecution time (hr):\t%dms", script.name, (script.end.hrtime[0]*1000) + (script.end.hrtime[1]/1000000));
	});
};

