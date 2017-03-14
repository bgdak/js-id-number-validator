define("types", ["require", "exports"], function (require, exports) {
    "use strict";
});
///<reference path='../types.ts'/>
define("providers/SG_NRIC", ["require", "exports"], function (require, exports) {
    "use strict";
    var SingaporeNRICValidator = (function () {
        function SingaporeNRICValidator() {
        }
        SingaporeNRICValidator.validateNRIC = function (str) {
            // Modified from https://gist.github.com/eddiemoore/7131781
            // Originally base on Based on http://www.samliew.com/icval/
            if (!str || str.length != 9)
                return 'error_length';
            if (!/^[SFGT]\d{7}[A-Z]$/i.test(str))
                return 'error_format';
            str = str.toUpperCase();
            var icChar = [];
            var icNumber = [];
            for (var i = 0; i < 9; i++) {
                icChar[i] = str.charAt(i);
                icNumber[i] = parseInt(icChar[i], 10);
            }
            icNumber[1] *= 2;
            icNumber[2] *= 7;
            icNumber[3] *= 6;
            icNumber[4] *= 5;
            icNumber[5] *= 4;
            icNumber[6] *= 3;
            icNumber[7] *= 2;
            var weight = 0;
            for (var i = 1; i < 8; i++) {
                weight += icNumber[i];
            }
            var offset = (icChar[0] == 'T' || icChar[0] == 'G') ? 4 : 0;
            var temp = (offset + weight) % 11;
            var st = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
            var fg = ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'];
            var theAlpha;
            if (icChar[0] == 'S' || icChar[0] == 'T') {
                theAlpha = st[temp];
            }
            else if (icChar[0] == 'F' || icChar[0] == 'G') {
                theAlpha = fg[temp];
            }
            if (icChar[8] !== theAlpha) {
                return 'error_checksum';
            }
        };
        SingaporeNRICValidator.prototype.validate = function (id) {
            var error = SingaporeNRICValidator.validateNRIC(id);
            return {
                success: !error,
                reason: error
            };
        };
        return SingaporeNRICValidator;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SingaporeNRICValidator;
});
///<reference path='../types.ts'/>
define("providers/TW_ID", ["require", "exports"], function (require, exports) {
    "use strict";
    var TaiwanIDValidator = (function () {
        function TaiwanIDValidator() {
        }
        TaiwanIDValidator.getTWIDFirstCode = function (c) {
            if (c == 'I') {
                return 34;
            }
            if (c == 'O') {
                return 35;
            }
            if (c <= 'H') {
                return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
            }
            if (c <= 'N') {
                return c.charCodeAt(0) - 'J'.charCodeAt(0) + 18;
            }
            if (c <= 'Z') {
                return c.charCodeAt(0) - 'P'.charCodeAt(0) + 23;
            }
        };
        TaiwanIDValidator.prototype.validate = function (id) {
            if (!id || id.length !== 10) {
                return {
                    success: false,
                    reason: 'error_length'
                };
            }
            if (!/^[A-Z]\d{9}$/i.test(id)) {
                return {
                    success: false,
                    reason: 'error_format'
                };
            }
            var start = id.charAt(0);
            var mid = id.substring(1, 9);
            var end = id.charAt(9);
            var iStart = TaiwanIDValidator.getTWIDFirstCode(start);
            var sum = Math.floor(iStart / 10) + (iStart % 10) * 9;
            var iflag = 8;
            for (var i = 0; i < mid.length; i++) {
                var c = mid.charAt(i);
                sum += parseInt(c, 10) * iflag;
                iflag--;
            }
            var checksumCorrect = (sum % 10 == 0 ? 0 : (10 - sum % 10)) == parseInt(end, 10);
            if (checksumCorrect) {
                return {
                    success: true
                };
            }
            else {
                return {
                    success: false,
                    reason: 'error_checksum'
                };
            }
        };
        return TaiwanIDValidator;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TaiwanIDValidator;
});
///<reference path='types'/>
///<reference path='providers/SG_NRIC'/>
///<reference path='providers/TW_ID'/>
define("IDValidators", ["require", "exports", "providers/SG_NRIC", "providers/TW_ID"], function (require, exports, SG_NRIC_1, TW_ID_1) {
    "use strict";
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
                    var validator = new countryValidators[document]();
                    return validator.validate;
                }
            }
        };
        return IDValidators;
    }());
    exports.IDValidators = IDValidators;
});
define("index", ["require", "exports", "IDValidators"], function (require, exports, IDValidators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = IDValidators_1.IDValidators;
});
