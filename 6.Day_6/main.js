////////////////////////////////////////////    QUESTION 16  //////////////////////////////////////////
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Shoaib Sharih", "Feroz", "Okasha", "Aneeq"];
console.log("WE ARE FOUND A BIGGER DINNER TABLE SO I THINK WE INVITE MORE GUESTS \n");
// Invite More Guests
guestList.push("sir Zia Khan"); // add one guest end or list
guestList.unshift("Ameen Alam"); // add one guest start of list
guestList.splice(guestList.length / 2, 0, "Babar Azam"); // add one guest in middle of list
guestList.map(function (guest) {
    console.log("Dear ".concat(guest, " whould you like to Join me for dinner ? \n"));
});
////////////////////////////////////////////    QUESTION 17  //////////////////////////////////////////
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////
console.log("\n  New Answer 17  \n");
console.log("Sorry Your new table won't arrive in time So we are invite Only Two Guests \n");
while (guestList.length > 2) {
    guestList.pop();
}
guestList.forEach(function (guest) {
    console.log("".concat(guest, " Still You are Invited For Dinner!"));
});
guestList.splice(0, guestList.length); // Now empty GUEST Array
console.log("Array is Empty", guestList);
////////////////////////////////////////////    QUESTION 18  //////////////////////////////////////////
// Question 18: Seeing the World: Think of at least five places you’d like to visit.:Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////
console.log("\n  New Answer 18  \n");
var fav_Places = ["Switzerland", "America", "Islamabad", "China", "Maldives"];
console.log("Original Order", fav_Places); // Original order
console.log("Alphabetic Array Order", __spreadArray([], fav_Places, true).sort()); // Alphabetic Array Order
console.log("Original Order", fav_Places); // Original order
console.log("Reverse Alphabetic Array Order", __spreadArray([], fav_Places, true).sort().reverse()); //  Reverse Alphabetic Array Order
console.log("Original Order", fav_Places); // Original order
console.log("Reverse WithOut Modified Original Array Order", __spreadArray([], fav_Places, true).reverse()); //  Reverse  Array Order
// Modified Original Array 
fav_Places.reverse();
console.log("Modified Original Array ", fav_Places); // Reverse Array with Modified
// Again Reverse And Convert Original Order.
fav_Places.reverse();
console.log("Modified Original Array Again reverse And orignal Array ", fav_Places); // Reverse Array with Modified
// Modified Sort Original Array 
fav_Places.sort();
console.log(" Modified Sort Original Array ", fav_Places);
