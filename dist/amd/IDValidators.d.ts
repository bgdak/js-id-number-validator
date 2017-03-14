declare module "types" {
    export interface Validator {
        validate(id: string): ValidateResult;
    }
    export interface ValidateResult {
        success: boolean;
        reason?: string;
    }
}
declare module "providers/SG_NRIC" {
    import { Validator, ValidateResult } from "types";
    export class SingaporeNRICValidator implements Validator {
        static validateNRIC(str: string): string;
        validate(id: string): ValidateResult;
    }
}
declare module "providers/TW_ID" {
    import { Validator, ValidateResult } from "types";
    export class TaiwanIDValidator implements Validator {
        static getTWIDFirstCode(c: string): number;
        validate(id: string): ValidateResult;
    }
}
declare module "IDValidators" {
    export class IDValidators {
        static getValidator(country: string, document: string): any;
    }
}
declare module "index" {
}
