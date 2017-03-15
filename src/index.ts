import { IDValidators } from "./IDValidators";

export default IDValidators;

// To support both require and RS6 import default.

let validatorCopy : any = IDValidators;

let oldExport = module.exports;

for (let attr in oldExport) {
    validatorCopy[attr] = oldExport[attr];
}

module.exports = validatorCopy;
