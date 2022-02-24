let count = 0;
let countEl = document.getElementById('count-el');
let saveEL = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let prevEnteries = count + " - ";
    saveEL.textContent += prevEnteries;
    countEl.textContent = 0;
    count = 0;
}

// var name = "Hassanat";
// var greeting = "Hi, my name is "

// var myGreeting = greeting + name;
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el");

// var name = "Hassanat";
// var greeting = " Ohayo!";

// let greet = name + greeting;
// // for rendering the result
// welcomeEl.innerText = greet;