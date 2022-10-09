let arr = [1,2,3,4,5,6];

for(let i = 0 ; i < arr.length;i++){
     console.log(arr[i]);
}

// adding element from last

arr.push(7);

arr.push(8,9,10)
console.log(arr);
// removing element from last

console.log(arr.pop());
console.log(arr);

// adding element at 0 index

arr.unshift(11,12)
console.log(arr);

// removing element from 0 index

console.log(arr.shift(12,1));
console.log(arr);

let a = [];
a.push(arr.splice(0,3))
console.log(a)