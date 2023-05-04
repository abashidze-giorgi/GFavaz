$(document).ready(function(){

    const character = [
        {
            id: 1,
            name: "Captain America",
            actor: "Steven Rogers",
            image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg"
        },
        {
            id: 2,
            name: "Iron Man",
            actor: "Anthony Stark",
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
        },
        {
            id: 3,
            name: "Hawkeye",
            actor: "Clinton Barton",
            image: "https://www.nme.com/wp-content/uploads/2020/07/Hawkeye-Marvel.jpg"
        },
        {
            id: 4,
            name: "Black Widow",
            actor: "Natalia Romanoff",
            image: "https://www.gannett-cdn.com/-mm-/514922ee78c25e2bb90a92cf29ab3e31e5542750/c=0-153-3000-1848/local/-/media/2016/05/02/USATODAY/USATODAY/635977980700627911-SP-20701-R.jpg"
        },
        {
            id: 5,
            name: "Scarlet Witch",
            actor: "Wanda Maximoff",
            image: "https://variety.com/wp-content/uploads/2022/05/SRV-12030_R.jpg?w=681&h=383&crop=1"
        },
    ];
    character.forEach(heroe =>{
        const heroeCard = `
        <div class = "heroeClass" style = "background-image: url(${heroe.image}); background-size: cover; text-align: center;">
            <h1 style = "position: absolute; left: 20px; bottom: 60px; ">${heroe.name} </h1>
            <h2 style = "position: absolute; left: 20px; bottom: 20px; font-size: medium;">${heroe.actor}</h2>
        </div>
        `;
        $(`.carousel`).append(heroeCard);
    });

    $(`.carousel`).slick({
                    infinite: true,
                    slidesToShow: 4,
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
        autoplay: false,
        autoplaySpeed: 500,
        responsive: true,
        centerMode: true,
        centerPadding: 500,
        swipeToSlide: 5,
        fade: false,
        cssEase: 'ease-in-out'                
    });
});