///<reference path='types'/>
///<reference path='providers/SG_NRIC'/>
///<reference path='providers/TW_ID'/>

import SingaporeNRICValidator from "./providers/SG_NRIC";
import TaiwanIDValidator from "./providers/TW_ID";

const providerRegistry : any = {
    'SG': {
        'NRIC': SingaporeNRICValidator
    },
    'TW': {
        'ID': TaiwanIDValidator
    }
};

export class IDValidators {
    static getValidator(country: string, document: string) {
        if (providerRegistry.hasOwnProperty(country)) {
            const countryValidators = providerRegistry[country];
            if (countryValidators.hasOwnProperty(document)) {
                const validator = new countryValidators[document]();
                return validator.validate;
            }
        }
    }
}
