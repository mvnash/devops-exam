// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function isValidGamerTag(nameTag) {
    if (nameTag.length < 8) return false;

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(nameTag) == false) return false;

    if (/[0-9]/.test(nameTag) == false) return false;

    return true;
}

exports.isEmpty = isEmpty;
exports.isValidGamerTag = isValidGamerTag;
