/*
JSON - JavaScript Object Notation
let user = {
    color: "red",
    friends: [
        {color: "black", friends: []},
        {color: "royal", friends: []}
    ]
};
user.friends[0].color
*/
// SUGGESTIONS:
// 1. Use lambda function
// 2. Inline `profile` variable
// 3. Use a list of images
const profile = document.querySelector("#profile");
function replaceImg(event) {
    if (event.target.src.endsWith("IDENTIFICATION.PNG")) {
        event.target.src = "../IMAGES/REUBEN.PNG";
    } else if (event.target.src.endsWith("REUBEN.PNG")) {
        event.target.src = "../IMAGES/BEIA.PNG";
    } else {
        event.target.src = "../IMAGES/IDENTIFICATION.PNG";
    }
    }
profile.addEventListener('click', replaceImg);