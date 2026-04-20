// console.log("javascript!")

// there has GOT to be a better way of doing this bruh

// select html div elements 

const start = document.querySelector('#start');
const wakeup_1 = document.querySelector('#wakeup-1');
const wakeup_2 = document.querySelector('#wakeup-2');
const wakeup_3 = document.querySelector('#wakeup-3');
const missed_party = document.querySelector('#missed-party');
const wakeup_4 = document.querySelector('#wakeup-4');
const big_guy = document.querySelector('#big-guy');

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

// select html audio
var audio = document.querySelector ('audio');


// randomizing div position


// button presses

start_button.addEventListener("click", ()=>{
    wakeup_1.classList.remove("go-to-party");
})

stayup.addEventListener("click", ()=>{
    wakeup_2.classList.remove("go-to-party");
})


stayup_2.addEventListener("click", ()=>{
    wakeup_3.classList.remove("go-to-party");
})

sleep_2.addEventListener("click", ()=>{
    missed_party.classList.remove("go-to-party");
})

byebye_2.addEventListener("click", ()=>{
    wakeup_4.classList.remove("go-to-party");
}
)

wakeup_duplicate.addEventListener("click", ()=>{
    wakeup_duplicate_1.classList.remove("go-to-party");
})

wakeup_duplicate_1.addEventListener("click", ()=>{
    wakeup_duplicate_2.classList.remove("go-to-party");
})

wakeup_duplicate_2.addEventListener("click", ()=>{
    wakeup_duplicate_3.classList.remove("go-to-party");
})

