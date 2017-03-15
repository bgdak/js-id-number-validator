///<reference path='types'/>
///<reference path='providers/SG_NRIC'/>
///<reference path='providers/TW_ID'/>
"use strict";
var SG_NRIC_1 = require("./providers/SG_NRIC");
var TW_ID_1 = require("./providers/TW_ID");
var types_1 = require("./types");
var providerRegistry = {
    'SG': {
        'NRIC': SG_NRIC_1.default
    },
    'TW': {
        'ID': TW_ID_1.default
    }
};
var IDValidators = (function () {
    function IDValidators() {
    }
    IDValidators.getValidator = function (country, document) {
        if (providerRegistry.hasOwnProperty(country)) {
            var countryValidators = providerRegistry[country];
            if (countryValidators.hasOwnProperty(document)) {
                var validator_1 = new countryValidators[document]();
                return function (id) {
                    var result = validator_1.validate(id);
                    var output = { success: result.success };
                    if (result.hasOwnProperty("reason") && result.reason)
                        output.reason = types_1.ErrorCode[result.reason];
                    for (var attr in result) {
                        if (result.hasOwnProperty(attr) && attr != 'success' && attr != "reason") {
                            output[attr] = result[attr];
                        }
                    }
                    return output;
                };
            }
        }
    };
    return IDValidators;
}());
exports.IDValidators = IDValidators;
