const sumAll = function(num1, num2) {
    let sum = 0;
    let temp = num1;
    if(num1<0||num2<0||typeof(num1) !="number"||typeof(num2) != "number"){
        return "ERROR";
    }
    (num1>num2)?( num1 = num2 , num2 = temp):{};
    for(let i = num1;i< num1+num2;i++){
        sum +=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
