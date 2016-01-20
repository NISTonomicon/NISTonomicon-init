var returnControlTestFunctions = function(name) {
    var s = "var " + name + "_test = function(done) {"
    s += "    done()"
    s + "}"
    return s
}
//This will generate the package.json file required for NISTonomicon to run
var outputPackageJSON = function(name, version, description, repository, author, homepage) {
    var json = {
        "name": data.name,
        "version": data.version,
        "description": data.description,
        "main": "index.js",
        "scripts": {
            "test": "./node_modules/NISTonomicon/index.js index.js"
        },
        "repository": {
            "type": "git",
            "url": data.repository
        },
        "dependencies": {
            "nistonomicon": "*"
        },
        "keywords": ["NISTonomicon", "800-53"],
        "author": "hortinstein",
        "homepage": data.homepage
    }
}
var returnExportStatement = function(overlay, inherited, implemented, inheritable) {
    var s = "if(require.main === module) {//called directly as an executable for evaluation"
    s += "   module.exports.implemented_dict"
    s += "   module.exports.inherited_dict"
    s += "   module.exports.overlay"
    s += "} else {//required as a module, likely being included for its inheritable controls"
    s += "    module.exports = inheritable_dict;"
    s += "}"
    return s;
}

if (process.env.NODE_ENV = 'unit_test'){
    module.exports = {
        outputPackageJSON: outputPackageJSON,
        returnControlTestFunctions: returnControlTestFunctions,
        returnExportStatement: returnExportStatement
    };    
} else {
    
}
