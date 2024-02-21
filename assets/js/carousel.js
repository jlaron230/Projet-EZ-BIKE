console.log(1%9)
console.log(0%9)

// let array = ['😒','🤌','😂'];
let array = ["./image/icon-windows.svg","./image/icon-documents.svg","./image/icon-idea.svg"];

// let boutleft = document.querySelector(".left");
// let boutright = document.querySelector(".right")
// let i = 0;


// boutleft.addEventListener("click", function () {
//     document.querySelector(".grimg").src = array[i % array.length]
    
//     console.log(array[i%array.length]) 
//     i++
// });

// let current=i

// boutright.addEventListener("click", function () {
//   document.querySelector(".grimg").src = array[current % array.length]
  
//   console.log(array[i%array.length]) 
//   i++
// });


const dots = document.querySelectorAll(".dot");

let currentIndex = 0;



document.querySelector('.left').addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + array.length) % array.length;
    document.querySelector(".grimg").src = array[currentIndex];
    dots.forEach(dot => dot.style.backgroundColor = "");
    dots[currentIndex].style.backgroundColor = "green";
});

document.querySelector('.right').addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % array.length;
    document.querySelector(".grimg").src = array[currentIndex];
    dots.forEach(dot => dot.style.backgroundColor = "");
    dots[currentIndex].style.backgroundColor = "green";
});


dots[currentIndex].style.backgroundColor = "green";
// Mettre en surbrillance le point correspondant à l'index actuel



// let currentSlide = 0;
// const slides = document.querySelectorAll('.img > div');

// function showSlide(n) {
//     slides[currentSlide].style.display = 'none';
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].style.display = 'block';
// }

// document.getElementById('prevBtn').addEventListener('click', () => {
//   showSlide(currentSlide - 1);
// });

// document.getElementById('nextBtn').addEventListener('click', () => {
//   showSlide(currentSlide + 1);
// });

// // Afficher la première diapositive au chargement de la page
// showSlide(currentSlide);

// const petitesImages = document.querySelectorAll(".vign");

// // Image principale
// const grandeImage = document.querySelector(".grimg");

// // Changement de l'image principale au survol des petites images
// petitesImages.forEach((element) => {
//     element.addEventListener("mouseover", (event) => {
//         grandeImage.src = element.src;
//     });
// });