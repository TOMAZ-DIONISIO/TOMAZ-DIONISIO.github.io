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

//array

img = [
    '../IMAGES/IDENTIFICATION.PNG',
    '../IMAGES/REUBEN.PNG',
    '../IMAGES/BEIA.PNG',
    '../IMAGES/MJ.PNG',
    '../IMAGES/MJ-1.PNG',
    '../IMAGES/MJ-2.PNG',
]

//index var defined

let i=0;

//on click (event) = for img (array), increment i(array index var) %array length (equals 0 when i=array.length -> starts over)

function replaceImg(event) {
    event.target.src = img[++i%img.length];
    

// // Array of image files
// const img = [
//     "img1.png",
//     "img2.png",
//     "img3.png",
//   ]
//   // index variable for `img` array
//   let i = 0;
//   // Event handler for the `click` event on the <img> element 
//   function replaceImg(event) {
//     // Replace the <img> element's src (event.target.src) with an image from array
//     // Increment i every time the user clicks, and keep it within the array's bounds
//     // using the modulo operator. (i % img.length) is always less than img.length!
//     event.target.src = img[++i % img.length];
//   }

    // if (event.target.src.endsWith("IDENTIFICATION.PNG")) {
    //     event.target.src = "../IMAGES/REUBEN.PNG";
    // } else if (event.target.src.endsWith("REUBEN.PNG")) {
    //     event.target.src = "../IMAGES/BEIA.PNG";
    // } else if (event.target.src.endsWith("BEIA.PNG")) {
    //     event.target.src = "../IMAGES/MJ.PNG";
    // } else if (event.target.src.endsWith("MJ.PNG")) {
    //     event.target.src = "../IMAGES/MJ-1.PNG";
    // } else if (event.target.src.endsWith("MJ-1.PNG")) {
    //     event.target.src = "../IMAGES/MJ-2.PNG";
    // } else {
    //     event.target.src = "../IMAGES/IDENTIFICATION.PNG";
    // }
    }

profile.addEventListener('click', replaceImg);