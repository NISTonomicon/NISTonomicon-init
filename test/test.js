process.env.NODE_ENV = 'unit_test';
var should = require('should');
var spawn = require('child_process').spawn;
// var spawnTest = function(test_file, callback) {
//     var controlTest = spawn('node', ['./index.js', test_file]);
//     var last_data = ''
//     controlTest.stdout.on('data', function(data) {
//         //console.log(data.toString('ascii'))
//         last_data = data
//     });
//     controlTest.stderr.on('data', function(data) {
//         //console.log(data.toString('ascii'))
//     });
//     controlTest.on('close', function(code) {
//         resultString = (last_data.toString('ascii')).slice(1, -2);
//         //console.log(resultString)
//         resultCount = {
//             pending: parseInt(resultString.split(',')[0].split(':')[1].replace(/ /g, '')),
//             passing: parseInt(resultString.split(',')[1].split(':')[1].replace(/ /g, '')),
//             failing: parseInt(resultString.split(',')[2].split(':')[1].replace(/ /g, ''))
//         }
//         callback(resultCount)
//     });
// }

var nistonomicon_init = require('../index.js');

//     it('should pass in an overlay of 4, with 2 passing, 1 failing and 1 pending', function(done) {
//         spawnTest('./test/testcase_function_configs/testcase_2passing_1failing_1pending.js', function(resultCount) {
//             resultCount.passing.should.equal(2)
//             done();
//         })
//     });

it('should return the module exports statement statement', function(done){
    var exported = nistonomicon_init.returnExportStatement();
    exported.slice(-1).should.equal('}');
    done()
})

it('should return the module exports statement statement', function(done){
    var exported = nistonomicon_init.returnControlTestFunctions ();
    exported.slice(-1).should.equal(')');
    done()
})
