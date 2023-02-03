const reverseString = function(str) {
    let revStr = "";
    if(str){
    for(let i = str.length-1;i>=0;i--){
        revStr += str[i];
    }
    return revStr;
}
else return str;
};

// Do not edit below this line
module.exports = reverseString;
