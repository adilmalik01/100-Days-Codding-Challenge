
////////////////////////////////////////////    QUESTION 43  //////////////////////////////////////////
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let magician: Array<string> = ["Alice", "David", "Chris"]
const great_magician = (magician: string[]): string[] => {
    let modified_Array = magician.map(magic => magic + " how are you")
    return modified_Array
}

const show_magicain = (names: string[]) => {
    names.forEach((magic) => {
        console.log(`${magic}`);
    })
}
let modified_Array: string[] = great_magician(magician);

console.log("Original Names Magicians");
show_magicain(magician)
console.log("\nModified Names Magicians");
show_magicain(modified_Array)

////////////////////////////////////////////    QUESTION 44  //////////////////////////////////////////
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////

const make_sandwich = (...items: Array<string>) => {
    console.log(`Making a sandwich with: ${items}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

////////////////////////////////////////////    QUESTION 45  //////////////////////////////////////////
// Question 45: Cars: Create detailed car objects with flexible properties.
// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////
const make_car = (name: string, model: string, ...rough: [string, any][]) => {

    let car_manufacture = { name, model }
    rough.forEach(([key, value]) =>car_manufacture[key] = value)
    return car_manufacture
}
console.log(make_car("civic", "honda", ["color", "black"], ["sunrof", "grey"]));
console.log(make_car("sonata", "honda", ["color", "whitw"], ["sunrof", "grey"]));






























