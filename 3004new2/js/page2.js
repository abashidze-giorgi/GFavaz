document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelector(".slides");
    const nextBtn = document.getElementById("#btnNext")
    const prevBtn = document.getElementById("#btnPrev");
    

    var currentSlideIndex = 0;
    const slideCount = slides.children.length;

    function goToSlide(index){
        if(index < 0){
                currentSlideIndex - slideCount-1;
        }else if(index >= slideCount){
            currentSlideIndex = 0;
        }else{
            currentSlideIndex = index;
        }

        var transitionX = (currentSlideIndex * 100) + '%';
        slides.style.transform = `translateX(-${transitionX})`;
    }

    nextBtn.addEventListener('click', ()=>{
        currentSlideIndex += 1;
        goToSlide(currentSlideIndex);
    });
    prevBtn.addEventListener('click', ()=>{
        currentSlideIndex -= 1;
        goToSlide(currentSlideIndex);
    })

    goToSlide(0);

});