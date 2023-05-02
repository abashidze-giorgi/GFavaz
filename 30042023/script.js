document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelector(".slides");
    const prevBtn = document.getElementById("btnPrev");
    const nextBtn = document.getElementById("btnNext");

    var currentSlideIndex = 0;
    const slideCounter = slides.children.length;

    function goToSlide(slideIndex)
    {
        if(slideIndex < 0){
            currentSlideIndex = slideCounter-1;
        }
        else if(currentSlideIndex >= slideCounter)
        {
            currentSlideIndex = 0;
        }else
        {
            currentSlideIndex = slideIndex;
        }

        var trX = (currentSlideIndex * 100) + '%'; 
        slides.style.transform = `translateX(-${trX})`
    }

    prevBtn.addEventListener('click', () =>{
        currentSlideIndex += 1;
        goToSlide(currentSlideIndex);
    });

    nextBtn.addEventListener('click', () =>{
        currentSlideIndex -= 1;
        goToSlide(currentSlideIndex);
    });

    goToSlide(0);
});