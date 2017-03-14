/// <reference path="../types.d.ts" />
import { Validator, ValidateResult } from "../types";
export declare class SingaporeNRICValidator implements Validator {
    static validateNRIC(str: string): string;
    validate(id: string): ValidateResult;
}
