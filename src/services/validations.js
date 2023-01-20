// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function isValidGamerTag(nameTag){
    if(nameTag.length<8) return false;
    
    return true;
}

exports.isEmpty = isEmpty;
exports.isValidGamerTag = isValidGamerTag;