export const validateLength = (text, minLength, maxLength) =>
    !text || text.length < minLength || text.length > maxLength;