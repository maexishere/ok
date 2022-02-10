const name = prompt("Enter your first name:");
alert(`Hello ${name}`);

const number = Number(prompt("Enter a number of units completed:"));

if (number < 0) {
  console.log("Incorrect input")
  alert(`Your grade standing cannot be calculated`);
}
if ((number >= 0) && (number <= 30)) {
  console.log(`Your grade standing is Freshman`);
}
if ((number >= 31) && (number <= 60)) {
  console.log(`Your grade standing is Sophomore`);
}
if ((number >= 61) && (number <= 90)) {
  console.log(`Your grade standing is Junior`);
}
if (number >= 91) {
  console.log(`Your grade standing is Senior`);
}