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

//Understanding filter function through examples
