
////////////////////////////////////////////    QUESTION 4  //////////////////////////////////////////
// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said,A person who never made a mistake never tried anything new."


////////////////////////////////////////////      ANSWER  //////////////////////////////////////////
console.log('Quaid e Azam once said, “I do not believe in taking the right decision, I take a decision and make it right.”');


////////////////////////////////////////////    QUESTION 5  //////////////////////////////////////////
// Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


////////////////////////////////////////////      ANSWER  //////////////////////////////////////////
let qoutePersonName: String = "Quaid e Azam" 
let quote: String = " “I do not believe in taking the right decision, I take a decision and make it right.”"
let famousQuote: String = `${qoutePersonName},Once Said${quote}` 
console.log(famousQuote);


////////////////////////////////////////////    QUESTION 6  //////////////////////////////////////////
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.


////////////////////////////////////////////      ANSWER  //////////////////////////////////////////
let personName: string = "Muhammad Adil"
console.log("with WhiteSpace Name :", `\t\t\t${personName}`);
console.log("Remove WhiteSpace in Name :", `${personName.trim()}`);
