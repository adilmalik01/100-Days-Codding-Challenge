////////////////////////////////////////////    QUESTION 31  //////////////////////////////////////////
// Question 31: No Users: Ensure your user list isn’t empty.
// Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var users = [];
if (users.length !== 0) {
    for (var i = 0; i < users.length; i++) {
        console.log("".concat(users[i], " hey welcome again!"));
    }
}
else {
    console.log("we need to some users");
}
////////////////////////////////////////////    QUESTION 32  //////////////////////////////////////////
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 32 \n");
var current_users = ["Adil", "Okasha", "SOHaib", "Aneeq", "ali", "Feroz"];
var new_users = ["ADIL", "malik", "sohaib", "Aneeq", "ali murtaza", "Feroz"];
var checkUser = function (current_users, new_users) {
    new_users.forEach(function (user) {
        var checkCondition = current_users.some(function (current_users) { return current_users.toLowerCase() == user.toLowerCase(); });
        if (checkCondition) {
            console.log("".concat(user, " username is already exist"));
            return;
        }
        else {
            console.log("".concat(user, " username is availbe"));
        }
    });
};
checkUser(current_users, new_users);
////////////////////////////////////////////    QUESTION 33  //////////////////////////////////////////
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 33 \n");
var suffix_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, suffix_number_1 = suffix_number; _i < suffix_number_1.length; _i++) {
    var num = suffix_number_1[_i];
    // 1st Method 
    if (num === 1) {
        console.log(num + 'st');
        continue;
    }
    else if (num == 2) {
        console.log(num + 'st');
        continue;
    }
    else if (num == 3) {
        console.log(num + 'rd');
        continue;
    }
    else {
        console.log(num + 'th');
        continue;
    }
    // 2nd Method
    // let suffix:string;
    // if (num == 1) {
    //     suffix = "st"
    // } else if (num == 2) {
    //     suffix = "nd"
    // } else if (num == 3) {
    //     suffix = "rd"
    // } else {
    //     suffix = suffix
    // }
    // console.log(`${num}${suffix}`);
}
