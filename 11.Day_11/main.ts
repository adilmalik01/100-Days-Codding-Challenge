////////////////////////////////////////////    QUESTION 31  //////////////////////////////////////////
// Question 31: No Users: Ensure your user list isn’t empty.
// Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let users: string[] = []
if (users.length !== 0) {
    for (let i = 0; i < users.length; i++) {
        console.log(`${users[i]} hey welcome again!`)
    }
} else {
    console.log("we need to some users");
}

////////////////////////////////////////////    QUESTION 32  //////////////////////////////////////////
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 32 \n");
let current_users: Array<string> = ["Adil", "Okasha", "SOHaib", "Aneeq", "ali", "Feroz"]
let new_users: Array<string> = ["ADIL", "malik", "sohaib", "Aneeq", "ali murtaza", "Feroz"]

const checkUser = (current_users: string[], new_users: string[]) => {
    new_users.forEach((user) => {
        let checkCondition = current_users.some(current_users => current_users.toLowerCase() == user.toLowerCase())
        if (checkCondition) {
            console.log(`${user} username is already exist`);
            return;
        } else {
            console.log(`${user} username is availbe`);
        }
    });
}
checkUser(current_users, new_users)
////////////////////////////////////////////    QUESTION 33  //////////////////////////////////////////
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n QUESTION NO 33 \n");
let suffix_number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const num of suffix_number) {
    // 1st Method 
    if (num === 1) {
        console.log(num + 'st');
        continue
    } else if (num == 2) {
        console.log(num + 'st');
        continue
    } else if (num == 3) {
        console.log(num + 'rd');
        continue
    } else {
        console.log(num + 'th');
        continue
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


