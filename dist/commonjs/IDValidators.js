///<reference path='types'/>
///<reference path='providers/SG_NRIC'/>
///<reference path='providers/TW_ID'/>
"use strict";
var SG_NRIC_1 = require("./providers/SG_NRIC");
var TW_ID_1 = require("./providers/TW_ID");
var providerRegistry = {
    'SG': {
        'NRIC': SG_NRIC_1.SingaporeNRICValidator
    },
    'TW': {
        'ID': TW_ID_1.TaiwanIDValidator
    }
};
var IDValidators = (function () {
    function IDValidators() {
    }
    IDValidators.getValidator = function (country, document) {
        if (providerRegistry.hasOwnProperty(country)) {
            var countryValidators = providerRegistry[country];
            if (countryValidators.hasOwnProperty(document)) {
                var validator = new countryValidators[document]();
                return validator.validate;
            }
        }
    };
    return IDValidators;
}());
exports.IDValidators = IDValidators;
