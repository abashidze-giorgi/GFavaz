$(document).ready(function(){

    const items = [
        {
            id: 1,
            name: "Cloud Solution",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 2,
            name: "Speed Optimisation",
            text: "text-1",
            image: "../images/image1.jpg"
        },
        {
            id: 3,
            name: "Online Marketing",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 4,
            name: "Website Design",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 5,
            name: "item-5",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 6,
            name: "item-6",
            image: "item-",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 7,
            name: "item-7",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 8,
            name: "item-8",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 9,
            name: "item-9",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 10,
            name: "item-10",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 11,
            name: "item-11",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 12,
            name: "item-12",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 13,
            name: "item-13",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 14,
            name: "item-14",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },
        {
            id: 15,
            name: "item-15",
            text: "text-1",
            image: "https://cdn-icons-png.flaticon.com/512/1103/1103496.png?w=826&t=st=1682749862~exp=1682750462~hmac=012d8c38e982e83a1ce39d48631adf71d4f5421b755eb13ed030e8aaad651e19"
        },

    ];

    items.forEach(item =>{
        const itemCard = `
        <div class="itemClass">
            <img src=${item.image}>
            <h1>${item.name}</h1>
            <p>${item.text}"></p>
        </div>
        `;
        $(`.carousel`).append(itemCard);
    });

    $(`.carousel`).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: true,
        centerMode: true,
        centerPadding: 500,
        fade: false,
        cssEase: 'ease-in-out'
    });
});