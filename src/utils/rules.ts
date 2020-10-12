const emailRegex = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

export function validateEmail(email: string): boolean {
    return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
    return passwordRegex.test(password);
}

export function validateSentenceLength(
    sentence: string,
    maxLength: number
): boolean {
    return sentence.length <= maxLength;
}

export function validateSentenceIsEmpty(sentence: string): boolean {
    return (!sentence || 0 === sentence.length);
}

export const rules = {
    validateEmail,
    validatePassword,
    validateSentenceLength,
};
