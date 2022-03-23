/*Exercice 1:
Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.
*/
const person1 = {
  name: "Hichem",
  surname: "King",
  age: 20
};
const person2 = {
    name: "Hichem",
    surname: "King",
    age: 20
  };

const equivalent=(person1,person2)=>{
    const person1key=Object.keys(person1)
    const person2key=Object.keys(person2)

    if(person1key.length!==person2key.length){
        return false;
    }
    for(let i of person1key){
        if(person1[i]!==person2[i]){
            return false;
        }
    }
    return true;
}
console.log(equivalent(person1,person2));
