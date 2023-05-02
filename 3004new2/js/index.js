$(document).ready(function(){
    var slides = [
        {image: src="./images/image1.jpg"},
        {image: src="./images/image2.jpg"},
        {image: src="./images/image3.jpg"},
        {image: src="./images/image4.jpg"},
    ]
    slides.forEach(slide=>{
        const image = `
        <div class = "image" style = "background-image: url(${slide.image}); background-size: cover; text-align: center;"></div>`;
        $(`.slider`).append(image);
    });


    $(`.slider`).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: true,
        centerMode: true,
        centerPadding: 500,
        swipeToSlide: 5,
        fade: false,
        cssEase: 'ease-in-out'                
    });
});