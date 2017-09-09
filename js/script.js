$("#carousel-button").click(function(){
    if ($("#carousel-button").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');                    
    }
});

$("#loginModalButton").click(function() {
    // console.log( 'click detected');
    $('#loginModal').modal('show');
});

$("#loginModalCancel").click(function() {
    // console.log( '#loginModalCancel - click detected');
    $('#loginModal').modal('hide');
});

$("#loginModalCancelX").click(function() {
    // console.log( '#loginModalCancelx - click detected');
    $('#loginModal').modal('hide');
});

$("#reservationModalButton").click(function() {
    // console.log( 'click detected');
    $('#reservationModal').modal('show');
});

$("#reservationModalCancel").click(function() {
    console.log( '#reservationModalCancel - click detected');
    $('#reservationModal').modal('hide');
});

$("#reservationModalCancelX").click(function() {
    console.log( '#reservationModalCancelx - click detected');
    $('#reservationModal').modal('hide');
});