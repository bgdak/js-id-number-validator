export interface InternalValidator {
    validate(id: string) : InternalValidateResult;
}

export interface Validator {
    (id: string) : ValidateResult;
}


export interface InternalValidateResult {
    success: boolean;
    reason?: ErrorCode;
    [key: string]: any;
}

export interface ValidateResult {
    success: boolean;
    reason?: string;
    [key: string]: any;
}

export enum ErrorCode {
    error_input_variable,  // Input variable is null or not string.
    error_checksum,  // Input ID number fails the checksum validation.
    error_length,
    error_format,
}
