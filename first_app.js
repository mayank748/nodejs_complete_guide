const fs=require('fs');
fs.writeFileSync('hello,txt','Hello from Node.js')

// spread operator
const hobbies=['Sports','Cooking'];
const copiedArray=[...hobbies];
console.log(copiedArray);

// rest operator
const toArray=(...args)=>{
    return args;
};

console.log(toArray(1,2,3,4));