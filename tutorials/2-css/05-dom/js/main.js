// console.log("javascript!")


//select html elements

const header = document.querySelector("#header");
const ChangeHeaderButton = document.querySelector('#ChangeHeaderButton');
const ChangeThemeButton = document.querySelector('#ChangeThemeButton');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const img6 = document.querySelector('#img6');
const img7 = document.querySelector('#img7');
const img8 = document.querySelector('#img8');
const img9 = document.querySelector('#img9');
const img10 = document.querySelector('#img10');


//change header with button click
ChangeHeaderButton.addEventListener('click',()=>{
    header.innerHTML = "[[[BIG SHOT]]]";
})


// toggle light to dark


//create function for changing text
function changeButtonText(){
    if (document.body.classList.contains("dark")){
ChangeThemeButton.textContent = "DARK YET DARKER"
    } else {
ChangeThemeButton.textContent = "pipis 🔵"
    }
}


//click event on button
ChangeThemeButton.addEventListener("click", () => {
    // add/remove dark class to body
    document.body.classList.toggle("dark");
    changeButtonText()
})


//toggle image visibility
img1.addEventListener("click", ()=>{
    img2.classList.remove("hidden");
})

img2.addEventListener("click", ()=>{
    img3.classList.remove("hidden");
})

img3.addEventListener("click", ()=>{
    img4.classList.remove("hidden");
})

img4.addEventListener("click", ()=>{
    img5.classList.remove("hidden");
})

img4.addEventListener("click", ()=>{
    img5.classList.remove("hidden");
})

img5.addEventListener("click", ()=>{
    img6.classList.remove("hidden");
})

img6.addEventListener("click", ()=>{
    img7.classList.remove("hidden");
})

img7.addEventListener("click", ()=>{
    img8.classList.remove("hidden");
})

img8.addEventListener("click", ()=>{
    img9.classList.remove("hidden");
})

img9.addEventListener("click", ()=>{
    img10.classList.remove("hidden");
})