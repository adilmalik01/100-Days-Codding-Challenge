////////////////////////////////////////////    QUESTION 43  //////////////////////////////////////////
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var magician = ["Alice", "David", "Chris"];
var great_magician = function (magician) {
    var modified_Array = magician.map(function (magic) { return magic + " how are you"; });
    return modified_Array;
};
var show_magicain = function (names) {
    names.forEach(function (magic) {
        console.log("".concat(magic));
    });
};
var modified_Array = great_magician(magician);
console.log("Original Names Magicians");
show_magicain(magician);
console.log("\nModified Names Magicians");
show_magicain(modified_Array);
////////////////////////////////////////////    QUESTION 43  //////////////////////////////////////////
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////
var make_sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items, "."));
};
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
////////////////////////////////////////////    QUESTION 43  //////////////////////////////////////////
// Question 45: Cars: Create detailed car objects with flexible properties.
// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////
var make_car = function (name, model) {
    var rough = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rough[_i - 2] = arguments[_i];
    }
    var car_manufacture = { name: name, model: model };
    rough.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car_manufacture[key] = value;
    });
    return car_manufacture;
};
console.log(make_car("civic", "honda", ["color", "black"], ["sunrof", "grey"]));
console.log(make_car("sonata", "honda", ["color", "whitw"], ["sunrof", "grey"]));
