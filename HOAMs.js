/*
    Understanding higher order array methods
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

/*Higher order functions are functions which either takes a function as an argument or
 returns a function when expecuted*/
let oneToTen = [];          //DECLARING THE ARRAY
for(let i=1;i<10;i++){      //INITIALIZING THE ARRAY
    oneToTen.push(i);       
}

//USING MAP FUNCTION
//map() function maps every element of an array to a value
//map() function has a function as it's argument
let oneToTenX2 = oneToTen.map((elementOfArray)=>{
    return elementOfArray*2;
});
console.log(`map() function : `);
console.log(oneToTen);
console.log(oneToTenX2);

//returning a function also makes the function, a higher order function
let testFunction = (num1) =>{
    return (num2) => {
        return num1*num2;
    };
}; 
let oneToTenX3 = oneToTen.map(testFunction(3));
console.log(oneToTenX3);

console.log(`\nfilter() function :`);
console.log(`Using first order arrow function :`);
//Understanding filter function through examples
//Collection of records of people on which the operations can be performed
let collectionOfPeople = [];
collectionOfPeople.push({name:"Aashish Loknath Panigrahi",age:"24"});
collectionOfPeople.push({name:"Meghna Roy Choudhury",age:"20"});
collectionOfPeople.push({name:"Sayali Patil",age:"18"});
collectionOfPeople.push({name:"Tin Tin",age:"16"});
//console.log(collectionOfPeople);

//Now, we want to know how many people in the collectionOfPeople can legally drink alcohol
//Using first order arrow (ES6) functions to solve this problem
let peopleWhoCanDrinkAlcohol = () =>{
    let legalDrinkers = [];
    for(let i=0;i<collectionOfPeople.length;i++){
        if(collectionOfPeople[i].age>=18){
            legalDrinkers.push(collectionOfPeople[i]);
        }
    }
    return legalDrinkers;
};
console.log(`PEOPLE WHO CAN DRINK ALCOHOL :`);
console.log(peopleWhoCanDrinkAlcohol());

//Now, we want to find people b/w the age 18 & 22
//For this we have to create one more function
let peopleBetween18And22 = () =>{
    let appropriatPeople = [];
    for(let i=0;i<collectionOfPeople.length;i++){
        if(collectionOfPeople[i].age>=18&&collectionOfPeople[i].age<=22){
            appropriatPeople.push(collectionOfPeople[i]);
        }
    }
    return appropriatPeople;
};
console.log(`PEOPLE WHOSE AGE IS BETWEEN 18 & 22 :`);
console.log(peopleBetween18And22());

//Solving using filter function
console.log('Using filter function : ');
console.log(`PEOPLE WHO CAN DRINK ALCOHOL :`);
console.log(collectionOfPeople.filter((people)=>people.age>=18));
console.log(`PEOPLE WHOSE AGE IS BETWEEN 18 & 22 :`);
console.log(collectionOfPeople.filter(
    (people)=>people.age>=18 && people.age<=22
));