module.exports = function toReadable (number) {
 let arr1 = 
[
    "zero", "one","two","three","four","five","six","seven","eight","nine" 
]; 
let arr2 = 
[
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"  
];
let arr3 = 
[
    0, 1, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
];

    let strNum = String(number);
    let arrNum = [];
    for (let i = 0; i < strNum.length; i++)
    {
       arrNum[i] = +strNum[i]; 
    } 
    if ( arrNum.length === 1) return arr1[arrNum[0]];
    if (arrNum.length === 2)
    {
        if(arrNum[0] === 1 && arrNum[1] === 0) return arr2[0];
        if(arrNum[0] === 1 && arrNum[1] !== 0) return arr2[arrNum[1]];
        if(arrNum[0] > 1 && arrNum[1] !== 0) return arr3[arrNum[0]] + ' ' + arr1[arrNum[1]];
        if(arrNum[0] > 1 && arrNum[1] === 0) return arr3[arrNum[0]];
    }

    if (arrNum.length === 3)
    {   
        if(arrNum[0] >= 1 && arrNum[1] === 0 && arrNum[2] === 0) return arr1[arrNum[0]] + ' hundred';
		if(arrNum[0] >= 1 && arrNum[1] === 0 && arrNum[2] >= 1) return arr1[arrNum[0]] + ' hundred ' + arr1[arrNum[2]];
        if(arrNum[1] === 1&& arrNum[2] === 0) return arr1[arrNum[0]] + ' hundred ' + arr2[0]; 
        if(arrNum[1] === 1&& arrNum[2] !== 0) return arr1[arrNum[0]] + ' hundred ' + arr2[arrNum[2]]; 
        if(arrNum[1] > 1 && arrNum[2] !== 0) return arr1[arrNum[0]] + ' hundred ' + arr3[arrNum[1]] + ' ' + arr1[arrNum[2]]; 
        if(arrNum[1] > 1&& arrNum[2] === 0) return arr1[arrNum[0]] + ' hundred ' + arr3[arrNum[1]]; 
    } 
}
