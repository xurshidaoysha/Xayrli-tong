let container = document.querySelector(".container");
let timeNow = new Date().getHours();
timeNow = 12
// let input = document.getElementById("time")


// if (timeNow == 8) {
//     console.log("Text");
// }

console.log(timeNow);
let greeting =
    timeNow >= 5 && timeNow < 12
        ? "Good morning"
        : timeNow >= 12 && timeNow < 18
            ? "Good Afternoon"
            : "Good evining";
console.log(greeting);
container.innerHTML = `<h1>${greeting}</h1>`
