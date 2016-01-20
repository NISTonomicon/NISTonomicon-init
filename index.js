

var outputControlTestFunction = function(name) {
}

//This will generate the package.json file required for NISTonomicon to run
var outputPackageJSON = function(name, version, description, repository,keywords,author,homepage){
}


var outputExports = function(overlay, inherited, implemented, inheritable){    
    var s= "if(require.main === module) {//called directly as an executable for evaluation"
    var s+= "   module.exports.implemented_dict"
    var s+= "   module.exports.inherited_dict"
    var s+= "   module.exports.overlay"
    var s+= "} else {//required as a module, likely being included for its inheritable controls"
    var s+= "    module.exports = inheritable_dict;"
    var s+= "}"    
}



