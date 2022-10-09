let obj = {
    name : 'chandan',
    lastName : 'kumar',
    friends:['ram','shyam','mohan'],
    age:45,
    address:{
         state:'malaka',
         city:'bombay',
    },
    sayHi:function fn(){
        console.log("String methods help you to work with strings");
        return 'the end'
    },
}

// Accessing the values from object
// 1. use . operator
// 2.use ['']


// console.log(obj)

// console.log(obj.name)
// console.log(obj.address.city)
// console.log(obj.sayHi())
// console.log(obj.friends[0])

// console.log(obj['address']['city'])
// console.log(obj['friends'][1])
// console.log(obj['name'])

let objArr = Object.keys(obj);
console.log(objArr)
for(let k in obj){
    console.log(k);
}