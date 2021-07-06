const person={
    name:'Mayank',
    age:29,
    greet(){
        console.log('Hi, I am '+this.name);
    }
};
// person.greet();

// destructing
// object 
const printName=({name})=>{
    console.log(name);
    // console.log(greet());
}
printName(person);

const {name,age}=person;
console.log(name,age);

const hobbies=['Sports','Cooking'];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);