const rocket = document.getElementById("rocket");
let counter = 10;
let button;
const star = {

}

const countdown = () => {
    let time = document.querySelector("#billboard span");
    time.innerHTML = counter;
    if (counter <= 0) {
        start();
    }
    if (counter > 0 && counter <= 10) {
        counter--;
        window.setTimeout(countdown, 1000);
    }


}

const functionContainer = () => {
    button.removeEventListener("click", functionContainer);
    countdown();
    timer();
    ignition();
}
const timer = () => {
    button.classList.add("disabled");

}

const start = () => {
    rocket.src = "./IMG/rocket3.gif";
    rocket.classList.add("tookOff");
}
const ignition = () => {
    rocket.src = "./IMG/rocket2.gif";

}



const main = () => {
    button = document.getElementById("firing-button");
    button.addEventListener("click", functionContainer);
    

}

addEventListener("load", main)