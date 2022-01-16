jQuery(document).ready(function(){
    
    jQuery(".testimonial-content").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        nav: true
    })

    $(".owl-prev").html(" ");
    $(".owl-next").html(" ");
    // Gumshoe 
    const gumshoe = new Gumshoe(".primary-menu a");

//  Fixed Menu 
jQuery(window).scroll(function(){
    if(jQuery(this).scrollTop() > 0){
        jQuery("#header").addClass("fixed-menu");
    }else{
        jQuery("#header").removeClass("fixed-menu");
    }
})


// Mobile Menu 
jQuery(".humberger").click(function(){
    jQuery(".primary-menu").toggleClass("mobilemenu");
    if(jQuery(".primary-menu").hasClass("mobilemenu")){
        jQuery(".humberger i.fa").addClass("fa-times");
    }else{
        jQuery(".humberger i.fa").removeClass("fa-times");
    }
})



})

const anchor = document.querySelectorAll(".primary-menu a");

anchor.forEach(function(e){
    e.addEventListener("click",function(){
      jQuery(".primary-menu").removeClass("mobilemenu");
        jQuery(".humberger i.fa").removeClass("fa-times");

    })
})