////////////////////////////////////////////    QUESTION 46  //////////////////////////////////////////
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

let laptopConfig: any = {
    Company: "Dell",
    Model: "ThinkPad X1 Carbon",
    Year: 2022,
    Processor: "Intel Core i5",
    OperatingSystem: "window 10",
    RAM: "16 GB",
    describe: function () {
        console.log(`This laptop is ${this.Company} ${this.Model} ${this.Processor} and ${this.RAM} ${this.OperatingSystem}      `);
    }
}

laptopConfig.describe()



////////////////////////////////////////////    QUESTION 47  //////////////////////////////////////////
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

let arrayOfObject = [
    {
        Company: "Dell",
        Model: "ThinkPad X1 Carbon",
        Year: 2022,
    },
    {
        Company: "HP",
        Model: "",
        Year: 2021,
    },
    {
        Company: "Tosheeba",
        Model: "ThinkPad X2 Carbon",
        Year: 2023,
    },
    {
        Company: "lenovo",
        Model: "ThinkPad X1 Carbon",
        Year: 2024,
    }
]
let [firstLaptop, secondLaptop, thirdLaptop, fourthLaptop] = arrayOfObject
console.log(firstLaptop);
console.log(fourthLaptop);




////////////////////////////////////////////    QUESTION 48  //////////////////////////////////////////
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

let priceslist1 = [15000, 1200, 11000];
let pricesList2 = [40000, 35000, 26000];

let sumPrice = [...pricesList2, ...pricesList2].sort((a, b) => a - b)
console.log(sumPrice);







