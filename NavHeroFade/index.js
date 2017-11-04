$(".opaquinator").height($(".hero").height());


$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    if( scroll > 35 ) {
        $( "#navbar" ).addClass( "scrolled" );
    } else {
        $( "#navbar" ).removeClass( "scrolled" );
    }
});

$(window).scroll(function(){
    var vh = ($(".hero").height() * 0.66);
    $(".opaquinator").css("opacity", $(window).scrollTop() / vh);
  });


$( document ).ready(function() {
    
    $( ".hamburger" ).click(function() {
        $( ".nav_menu" ).toggleClass( "fullscreen_menu" );
            $( ".nav_menu" ).slideToggle( "slow", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
            });
    });
    
    $( ".cross" ).click(function() {
        $( ".nav_menu" ).slideToggle( "slow", function() {     
            $( ".nav_menu" ).toggleClass( "fullscreen_menu" ); 
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });    
}); 