$(function() {
    /* fixed header*/
   let header = $('#header');
    let intro = $('#intro');
    let introH;
    let scrollPos = $(window).scrollTop();
    
    
    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if(scrollPos > introH) {
                header.addClass('fixed');

        } else {
                header.removeClass('fixed');

        }     
         
    });

    
    
    /* smooth scroll */
    $('[data-scroll]').on ('click',function(event){
        event.preventDefault();
        
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass('show');
        
        console.log(elementOffset);
        
        $('html, body').animate({
           scrollTop: elementOffset - 70 
        }, 800);
    
    
    });
    
    
    
    /* Navb Toggle*/
    
    let nav = $('#nav');
    let navToggle = $('#navToggle');
    $('navToggle').on('click', function(event) {
         event.preventDefault();
        
        nav.toggleClass('show');
    });
    
    
});























