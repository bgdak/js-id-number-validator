"use strict";
var IDValidators_1 = require("./IDValidators");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IDValidators_1.IDValidators;
var validatorCopy = IDValidators_1.IDValidators;
var oldExport = module.exports;
for (var attr in oldExport) {
    validatorCopy[attr] = oldExport[attr];
}
module.exports = validatorCopy;
