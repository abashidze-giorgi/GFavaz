// Define ShopClass
$.fn.ShopClass = function(data){
    this.itemList = data;
    return this;
  };
  
  // Define method to get item list
  $.fn.ShopClass.prototype.getItemList = function(){
    return this.itemList;
  };
  
  // Fetch data from API URL and create new instance of ShopClass
  $.ajax({
    url: 'http://api.fakeshop-api.com/products/getAllProducts',
    success: function(data) {
      var shop = new $.fn.ShopClass(data);
      console.log(shop.getItemList());
    },
    error: function() {
      console.log('Error fetching data from API');
    }
  });
  