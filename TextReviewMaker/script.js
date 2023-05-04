const slides = document.querySelectorAll(".testimonialSlide");

let activeSlide = 0;

function next(){
    slides[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add("active");
};

document.querySelectorAll(".testimonial button").forEach(Button =>{
    Button.addEventListener("click", () =>{
        next();
    });
});

// create a footer element
const footer = document.createElement('footer');
footer.textContent = 'Copyright © 2023';

// add some styles to the footer
footer.style.backgroundColor = 'green'; // Use the color name, hex code, or rgb value
footer.style.padding = '20px';
footer.style.textAlign = 'center';

// add the footer element to the end of the body
document.body.appendChild(footer);