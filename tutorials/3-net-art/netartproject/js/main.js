// console.log("javascript!")

// button presses

// randomizing div position (code by yukta and j)
const stage = document.getElementById("stage");
function placeRandomly(box_name) {
    box = document.getElementById(box_name);
    const maxX = stage.clientWidth - box.offsetWidth;
    const maxY = stage.clientHeight - box.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    box.style.left = x + "px";
    box.style.top = y + "px";
}
// Run once when the page loads
placeRandomly("wakeup-1");
placeRandomly("wakeup-2");
placeRandomly("wakeup-3");
placeRandomly("wakeup-4");
placeRandomly("wakeup-5");
placeRandomly("wakeup-6");
placeRandomly("wakeup-7");
placeRandomly("wakeup-8");
placeRandomly("missed-party");



// there has GOT to be a better way of doing this bruh

// select html div elements 

const start = document.querySelector('#start');
const wakeup_1 = document.querySelector('#wakeup-1');
const wakeup_2 = document.querySelector('#wakeup-2');
const wakeup_3 = document.querySelector('#wakeup-3');
const missed_party = document.querySelector('#missed-party');
const wakeup_4 = document.querySelector('#wakeup-4');
const wakeup_5 = document.querySelector('#wakeup-5');
const wakeup_6 = document.querySelector('#wakeup-6');
const wakeup_7 = document.querySelector('#wakeup-7');
const wakeup_8 = document.querySelector('#wakeup-8');

// select html buttons

const start_button = document.querySelector('#start-button');
const stayup = document.querySelector('#stayup');
const stayup_2 = document.querySelector('#stayup-2');
const byebye_2 = document.querySelector('#byebye-2');
const sleep_1 = document.querySelector('#sleep-1');
const sleep_2 = document.querySelector('#sleep-2');
const restart = document.querySelector('#restart');
const chase = document.querySelector('#chase')
const wakeup_duplicate = document.querySelector('#wakeup-duplicate');
const wakeup_duplicate_1 = document.querySelector('#wakeup-duplicate-1');
const wakeup_duplicate_2 = document.querySelector('#wakeup-duplicate-2');
const wakeup_duplicate_3 = document.querySelector('#wakeup-duplicate-3');
const wakeup_duplicate_4 = document.querySelector('#wakeup-duplicate-4');

const showThyself = "go-to-party";
start_button.addEventListener("click", () => {
    wakeup_1.classList.remove(showThyself);
})

stayup.addEventListener("click", () => {
    wakeup_2.classList.remove(showThyself);
})


stayup_2.addEventListener("click", () => {
    wakeup_3.classList.remove(showThyself);
})

sleep_1.addEventListener("click", () => {
    missed_party.classList.remove(showThyself);
})

sleep_2.addEventListener("click", () => {
    missed_party.classList.remove(showThyself);
})

byebye_2.addEventListener("click", () => {
    wakeup_4.classList.remove(showThyself);
})

wakeup_duplicate.addEventListener("click", () => {
    wakeup_5.classList.remove(showThyself);
})

wakeup_duplicate_1.addEventListener("click", () => {
    wakeup_6.classList.remove(showThyself);
})

wakeup_duplicate_2.addEventListener("click", () => {
    wakeup_7.classList.remove(showThyself);
})

wakeup_duplicate_3.addEventListener("click", () => {
    wakeup_8.classList.remove(showThyself);
})

wakeup_duplicate_4.addEventListener("click", () => {
    missed_party.classList.remove(showThyself);
})

// thanks j for the code
restart.addEventListener("click", ()=> {
    location.reload();
})