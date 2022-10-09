// let str = "String methods help you to work with strings";


// strArr = str.split(" ");
// console.log(strArr);

// let maxlen = strArr[0].length;

// for(let i = 1 ; i < strArr.length ; i++)
// {
//     if(maxlen < strArr[i].length){
//         max = strArr[i].length;
//     }
// }

// console.log(max);


// Q. return true if target string are matching with end of the original string 

let str = "String methods help you to work with strings";
let target = "ings";
let strArr = str.split(" ");

let lArr = strArr[strArr.length-1];
let tar = (lArr.slice(-target.length));

if(tar == target){
    console.log(true);
}else{
    console.log(false); 
}