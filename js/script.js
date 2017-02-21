function scrollDown() {
    jQuery('#main-wrapper section.active:not(:last-child)').removeClass('active').delay(300).queue(function(){
        jQuery(this).next().addClass('active').dequeue();
    });
    return false;
}
function scrollUp() {
    jQuery('#main-wrapper section.active:not(:first-child)').removeClass('active').delay(300).queue(function() {
        jQuery(this).prev().addClass('active').dequeue();
    });
    return false;
}

jQuery(window).bind('DOMMouseScroll', function(e){
     if(e.originalEvent.detail > 0) { scrollDown(); }
     else { scrollUp(); }
     return false;
 });

 //IE, Opera, Safari
 jQuery(window).bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) { scrollDown(); }
     else { scrollUp(); }
     return false;
 });

 jQuery('.back-to-top, a[href="#Landing"]').click(scrollUp);
 jQuery('a[href="#Subscribe"]').click(scrollDown);
