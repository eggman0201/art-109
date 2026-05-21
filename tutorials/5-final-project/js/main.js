let queuedImagesArray = [],
    queuedForm = document.querySelector("#queued-form"),
    queuedDiv = document.querySelector(".queued-div"),
    inputDiv = document.querySelector(".input-div"),
    input = document.querySelector(".input-div input");

//frontend part idek if therell be a backend (code from web dev tutorials on yt https://www.youtube.com/watch?v=EaBSeNSc-2c)

input.addEventListener("change", () => {
    const files = input.files
    // console.log(files)
    for (let i = 0; i < files.length; i++) {
        queuedImagesArray.push(files[i])
    }
    displayQueuedImages()
})

function displayQueuedImages() {
    let images = ""
    queuedImagesArray.forEach((image, index) => {
        images += `<div class="image"><img src="${URL.createObjectURL(image)}" alt="image"></div>`
    })

    queuedDiv.innerHTML = images

}

//make images appear at random positions thank you for the code yukta EDIT: idk how to call the images uploaded by users :[[[[ sorry :[[[[ also couldn't even get images to be aligned in a row instead of columns for some reason? sorry project's kinda left unfinished but i just cant figure this out for the life of me

const stage = document.getElementById("queued-form");
const box = document.getElementById("file");
function placeRandomly() {
    const maxX = stage.clientWidth - box.offsetWidth;
    const maxY = stage.clientHeight - box.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    box.style.left = x + "px";
    box.style.top = y + "px";
}
// Run once when the page loads

box.addEventListener("upload", () => {
    placeRandomly()
})