////////////////////////////////////////////    QUESTION 40  //////////////////////////////////////////
// Question 40: Album: Create objects for music albums.
// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
interface Album {
    artist: string;
    song: string;
    track?: number;
}

const create = (artist: string, song: string, tracks?: number): Album => {
    let obj: Album = {
        artist,
        song,
    }
    if (tracks != undefined) {
        obj.track = tracks
    }
    return obj
}
console.log(create("Zayn Malik", "TU HAI KAHAN", 10));
console.log(create("Zayn Malik", "TU HAI KAHAN"));
console.log(create("Abeera", "Aroora"));
console.log(create("Abeera", "Aroora", 2));



////////////////////////////////////////////    QUESTION 41  //////////////////////////////////////////
// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

let magicians: Array<string> = ["Alice", "David", "Chris", "Edward"]
const greet_magician = (nameOfMagican: string[]): void => {
    for (const magician of nameOfMagican) {
        console.log(magician);
    }
}
// greet_magician(magicians)


////////////////////////////////////////////    QUESTION 42  //////////////////////////////////////////
// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
const greet2_magician = (nameOfMagican: string[]): void => {
    for (let i = 0; i < nameOfMagican.length; i++) {
        nameOfMagican[i] = nameOfMagican[i] + " the greet"
    }
}
greet2_magician(magicians)
greet_magician(magicians)
























