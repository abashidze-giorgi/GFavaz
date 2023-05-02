$(document).ready(function() {
    var ImageSlider = $(".output img");
  
    var ImageIndex = 0;
  
    var SliderSpeed = 2000;
  
    function NextImage() {
      ImageSlider.eq(ImageIndex).removeClass("active");
  
      ImageIndex = (ImageIndex + 1) % ImageSlider.length;
  
      ImageSlider.eq(ImageIndex).addClass("active");
    }
  
    setInterval(NextImage, SliderSpeed);
  });
