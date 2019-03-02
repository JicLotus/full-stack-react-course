$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if ($("#carousel-button-icon").hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $("#carousel-button-icon").removeClass('fa-pause');
            $("#carousel-button-icon").addClass('fa-play');
        }else if ($("#carousel-button-icon").hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $("#carousel-button-icon").removeClass('fa-play');
            $("#carousel-button-icon").addClass('fa-pause');
        }
    });

    $('#reserveTableButton').click(function(){
        $('#reserveTableModal').modal({show:true});
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal({show:true});
    });

});