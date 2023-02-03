const repeatString = function(str,numOfRepeats) {
    let finalStr = "";
    if(numOfRepeats < 0) return "ERROR";
    for(let i = 0;i<numOfRepeats; i++){
        finalStr += str; 
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
