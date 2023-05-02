// import "../jQueryClasses/ShowText.js";

// $(document).ready(function() {
    
//     console.log("ready!");

//     var myObj = new $.fn.TextClass();
//     $(".output").append(myObj.getText());
// });


import "../jQueryClasses/ShopClass.js";
// Fetch data from API URL and create new instance of ShopClass
$.ajax({
    url: 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3',
    success: function(data) {
      var shop = new $.fn.ShopClass(data);
      $(".output").append(shop.getItemList());
    },
    error: function() {
        $(".output").append('Error fetching data from API');
    }
  });