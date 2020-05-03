$(function(){
    
    //Veno Box
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    
    //NavBg
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
           $('.navbar').addClass('navbg');
        }
    });
    
    // Slick Slider
    $('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        nextArrow: '.fa-arrow-right',
        prevArrow: '.fa-arrow-left',
        
        responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
            
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
        
    });

    // Slick Slider
    $('.slide2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        speed: 1500,
        nextArrow: '.right',
        prevArrow: '.left',
        
        responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
            
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
        
    });
    
        
    //Back to TOp    
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1500);
    });

    // back top button fadein fadeout / menu add class  
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
           $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 200){
        $('.navbar').addClass('navbg')
    }
    else {
        $(".navbar").removeClass('navbg');
    }
    }); 
        
    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500, );
                return false;
            }
        }
    });       
    

});