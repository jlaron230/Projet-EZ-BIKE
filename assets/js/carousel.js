console.log(1%9)
console.log(0%9)

// let array = ['😒','🤌','😂'];
let array = ["./image/icon-windows.svg","./image/icon-documents.svg","./image/icon-idea.svg"];

let bout = document.querySelectorAll("button");
let i = 0;

bout.addEventListener("click", function () {
    
  document.querySelector(".grimg").src = array[i % array.length]
    
    console.log(array[i%array.length]) 

    i++
 
    
});


// const petitesImages = document.querySelectorAll(".vign");

// // Image principale
// const grandeImage = document.querySelector(".grimg");

// // Changement de l'image principale au survol des petites images
// petitesImages.forEach((element) => {
//     element.addEventListener("mouseover", (event) => {
//         grandeImage.src = element.src;
//     });
// });