// Challenge 1
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
// Challenge 2
console.log(weekDays[0]);
console.log(weekDays[6]);
// Challenge 3
weekDays[6]="Funday";
console.log(weekDays);

// Challenge 4
weekDays.shift();
weekDays.shift();
console.log(weekDays);
// Challenge 5
function tempDays(day) {
    console.log(`Temperature on ${day} is 18 degrees`);

}
weekDays.forEach(tempDays);