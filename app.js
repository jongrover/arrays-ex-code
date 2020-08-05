// Declaring an empty array using the Array constructor.
// var books = new Array();

// Most commonly we declare an empty array using literal notation.
var books = [ ];

// Arrays are filled with elements & elements can be strings, numbers,
// boolean, objects, null, and even more arrays.
// In our case let’s fill our array with strings of book titles!
books = ["Cat In The Hat", "The Art of War", "Ruby For Dummies"];
// Notice we separate array elements with commas!

// Remember index positions start counting from zero!
// ["Cat In The Hat", "The Art of War", "Ruby For Dummies"]
// This is how we get the value stored at the first position index of zero.
console.log(books[0]);
// returns "Cat In The Hat"

// How do we get the value stored at the third position of the array?
// Take a moment to write your own solution. (answer on next slide)

// Our array
// [“Cat In The Hat", "The Art of War", "Ruby For Dummies"]
console.log(books[2]);
// returns "Ruby For Dummies”

// Correct!

// Let’s look at our array again:
// [“Cat In The Hat", "The Art of War", "Ruby For Dummies"]
// Let’s replace the second book title.
books[1] =  "Buffy the Vampire Slayer: The Harvest";
// Now our array is ["Cat In The Hat", "Buffy the Vampire Slayer: The Harvest", "Ruby For Dummies”]
// Now replace another book title on your own!

// Declare a new array called fruits and fill it with some fruit
var fruits = ["Apples", "Oranges", "Pears", "Bananas"];
// We can insert on to the end of an Array simply by using the push method.

fruits.push("Strawberries"); // You can push multiple items onto the end
// by coma separating if you wish.

console.log(fruits); // returns Apples, Oranges, Pears, Bananas, Strawberries

// You can pull the last element off the end using the pop method.
fruits.pop();

console.log(fruits); // returns Apples, Oranges, Pears, Bananas.
// Notice Strawberries is now missing!

// We can use splice method to insert content at a given position or to remove
// content from a given position. splice(index, how many elements to remove,
// optional content to add);

fruits.splice(2, 0, "Tiger"); // This goes to index position 2 and after it removes 0 (none)
// and adds new value of Tiger.

console.log(fruits); // returns Apples, Oranges, Tiger, Pears, Bananas
// where previously was Apples, Oranges, Pears, Bananas.
// Tiger has been inserted After Oranges and the others have been bumped forward one index position.
// That’s silly there is a tiny tiger in our fruit bowl!

// Let's remove Pear from the 3rd index position using splice.

fruits.splice(3,1); // Go to index position 3 and remove 1.

console.log(fruits); // returns Apples, Oranges, Tiger, Bananas
// Pear has been removed.

// Let’s look at our fruits array again…
// ["Apples", "Oranges", "Tiger", "Bananas"]
// What if I do not know the index number for an item in my array?
// Is there a way to lookup the index number for Tiger?

console.log(fruits.indexOf("Tiger")); // returns 2

// Let’s look at our fruits array again…
// ["Apples", "Oranges", "Tiger", "Bananas"]
// What if we want to know the length of our array?

console.log(fruits.length); // returns 4

// Let’s look at our fruits array again…
// ["Apples", "Oranges", "Tiger", "Bananas"]
// What if we want to turn our array into a string?

var weirdoBreakfast = fruits.join(" and ");

console.log(weirdoBreakfast);
// returns "Apples and Oranges and Tiger and Bananas”
// Here we gave join an argument of “and” to separate each array element.

// Want to see all the Array methods in the console? Just type:
// Array.prototype.
// For many more Array methods and to lookup what they do see:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array

// A for loop repeats until a specified condition evaluates to false.

// SYNTAX: for ([initialExpression]; [condition]; [incrementExpression]) {statement}

var vegetables = ['Broccoli','Peas','Carrots'];
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// returns Broccoli, Peas, Carrots

// A while statement executes its statements as long as a specified condition evaluates to true.

// SYNTAX: do {statement} while (condition);

var cars = ['Corvette','Mustang','Porsche'];
var i = 0;

do {
      console.log(cars[i]);
      i += 1;
}
while (i < cars.length);    // returns Corvette, Mustang, Porsche

// SYNTAX: while (condition){statement}

var fish = ['Snapper', 'Tuna', 'Salmon'];
var i = 0;

while (i < fish.length) {
      console.log(fish[i]);
      i += 1;
}

// returns Snapper, Tuna, Salmon

// Map is an ES6 function we can use to iterate over an array and perform an
// operation on each element on the array and then return the result as a new array.
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(
        function(num) {
          return num * 2;
        }
); 
console.log(doubled);	// returns [2, 4, 6, 8, 10]
// Note: map is often used with arrow functions for shorter syntax and look like this
var doubled = numbers.map((num) => num * 2 );

console.log(doubled);	 // returns [2, 4, 6, 8, 10]

// Discover more on loop statements at:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements
