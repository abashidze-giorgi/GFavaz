const burger = document.getElementById("burgers");
const navLinks = document.getElementById("navLinker");


burger.addEventListener("click", () =>{
    navLinks.classList.toggle("active");

});