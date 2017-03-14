ID Number Validator for Node
============================

## Introduction

This is a collection of validators of identity document number
for node applications.

You can also use <a href="https://www.npmjs.com/package/js-id-number-validator">its browser version</a>.

## Usage

Step 1, install.

```
npm i node-id-number-validator
```
  
Step 2, get a validator.

```javascript
const IDValidators = require('node-id-number-validator');
const validator = IDValidators.getValidator('SG', 'NRIC');
```

Step 3, validate an input.

```javascript
const result = validator('S0980292D');
```

And the result is in format:

```
{
    'success': true or false,
    'reason': string if the result is false
}
```

### Available Validators

| Country | Document |
|:-------:|:--------:|
| SG (Singapore) | NRIC |
| TW (Taiwan) | ID (身份證字號) |

