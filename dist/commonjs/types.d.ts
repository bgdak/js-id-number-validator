export interface Validator {
    validate(id: string): ValidateResult;
}
export interface ValidateResult {
    success: boolean;
    reason?: string;
}
