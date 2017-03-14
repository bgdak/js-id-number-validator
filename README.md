JavaScript ID Number Validator
==============================

## Introduction

This is a collection of validators of identity document number
for JavaScript applications.

[Demo](http://id-number-validator.dreamrunner.space/)

## Usage

Step 1, install.

You can install IDValidators by

* directly import in browser

  `<script src="dist/bin/IDValidators.js"></script>`
  
* using in node.js or webpack

  The library is available at NPM with name [`id-number-validator`](https://www.npmjs.com/package/id-number-validator).
  
  ```
  var IDValidators = require('id-number-validator');
  ```
  
Step 2, get a validator.

```javascript
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


## Development

To build: `npm run build`

To test: `npm test`

### Add a new validator

Step 1: Write the validator in TypeScript in the directory `src/providers/<name>.ts`. 
The validator shall be a function returning a `ValidateResult`.

Step 2: Register the validator in `src/IDValidators.ts`

Step 3: Write test cases at `test/<name.ts>`.

Step 4: Send a pull request to this repository.

Thank you for the contributions.

## Bonus

We have a very good [wiki](https://github.com/imdreamrunner/js-id-number-validator/wiki)
that explain the algorithm of the ID number checksum used by different 
identity documents.

