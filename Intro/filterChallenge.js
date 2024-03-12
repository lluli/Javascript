// Let's go back to our candy promotion texts.
// Your friend now wants to have a specific discount percentage for each customer.
// After processing the list you're given, you end up with the following array:

// // An array of objects!
// > const namesAndDiscounts = [
//   { name: 'Anna', discount: 50 },
//   { name: 'Laura', discount: 40 },
//   { name: 'Josh', discount: 30 },
//   { name: 'Min', discount: 50 },
//   { name: 'Karla', discount: 60 }
// ];
// copy
// To complete this exercise, you'll have to:

// use Array's map method again.
// access the properties of an object as seen previously.
// Questions
// Modify the function generateMessages so it uses this
// new structure and write the correct discount percentage in each message.

const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const sendMessageTo = namesAndDiscounts.map(
  (namesAndDiscounts) =>
    `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies for you today!`
);

console.log(sendMessageTo);
