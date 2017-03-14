///<reference path='types'/>
///<reference path='providers/sg'/>
///<reference path='providers/tw'/>

const providers = {
    'SG': {
        'NRIC': IDValidator.sg.validateSGIC
    },
    'TW': {
        'ID': IDValidator.tw.validateTWID
    }
};

export function getValidator(country: string, document: string) {
    if (providers.hasOwnProperty(country)) {
        const countryValidators = providers[country];
        if (countryValidators.hasOwnProperty(document)) {
            const validator = countryValidators[document];
            return validator;
        }
    }
}
