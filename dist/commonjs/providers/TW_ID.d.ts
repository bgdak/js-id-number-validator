/// <reference path="../types.d.ts" />
import { Validator, ValidateResult } from "../types";
export default class TaiwanIDValidator implements Validator {
    static getTWIDFirstCode(c: string): number;
    validate(id: string): ValidateResult;
}
