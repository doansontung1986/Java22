$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
      loop: true, //Vong lap
      margin: 10, //Khoang cach giua cac item
      nav: false, //Thanh dieu huong
      dots: true, //nut chuyen slider
      autoplay: false, //slider tu chay
      autoplayTimeout: 3000 ,//Setting phan tu chay ms
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  
  
  });
  