////////////////////////////////////////////    QUESTION 37  //////////////////////////////////////////
// Question 37: Large Shirts: Default values in make_shirt().
// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
// console.log("\n QUESTION NO 37 \n");
// const create_Shirt = (size: string = "Meduim", messages: string = "Develpor Is Here"): void => {
//     let print_Message: string = `\nMaking a "${size}" size t-shirt with the message ${messages} printed on it.`;
//     console.log(print_Message);
// }
// create_Shirt(); // default parameter
// create_Shirt("Large"); // only modified size
// create_Shirt("Small", "I love coding"); //  modified full parameter


////////////////////////////////////////////    QUESTION 38  //////////////////////////////////////////
// Question 38: Cities: Describing cities with a function.
// Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 38 \n");
const describe_city = (city: string = "Karachi", country: string = "pakistan"): void => {
    let print_Message: string = `\n${city} is describe the city in ${country}`;
    console.log(print_Message);
}
describe_city()// default parameter
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
describe_city("Abu Dhabi", "Dubai");



////////////////////////////////////////////    QUESTION 39  //////////////////////////////////////////
// Question 39: City Names: Formatting city-country pairs.
// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 39 \n");
const describe_city_return = (city: string = "Karachi", country: string = "pakistan"): string => {
    let print_Message: string = `\n${city} is describe the city in ${country}`;
    // console.log(print_Message);
    return print_Message; // return the string
}

console.log(describe_city_return());// default parameter
console.log(describe_city_return("Islamabad"));
console.log(describe_city_return("Istanbul", "Turkey"));
console.log(describe_city_return("Abu Dhabi", "Dubai"));















