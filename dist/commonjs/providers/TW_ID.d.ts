/// <reference path="../types.d.ts" />
import { Validator, ValidateResult } from "../types";
export declare class TaiwanIDValidator implements Validator {
    static getTWIDFirstCode(c: string): number;
    validate(id: string): ValidateResult;
}
