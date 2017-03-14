declare namespace IDValidator {
    interface ValidateResult {
        success: boolean;
        reason?: string;
    }
}
declare namespace IDValidator.sg {
    function validateSGIC(ic: string): ValidateResult;
}
declare namespace IDValidator.tw {
    function validateTWID(ic: string): ValidateResult;
}
declare module "IDValidators" {
    export function getValidator(country: string, document: string): any;
}
