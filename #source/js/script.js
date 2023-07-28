/*----------------------ВСПЛЫВАЮЩИЕ ОКНА------------------------*/
//
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //
    //-----попап Телефон
    $('#header__phone-img2').click(function(event) {
        $('.header-popup__phone-wrapper').addClass('visible');
        $('body').addClass('lock');
    });
    $('.header-popup__btn-close-phone').click(function(event) {
        $('.header-popup__phone-wrapper').removeClass('visible');
        $('body').removeClass('lock');
    });
    //
    //-----попап бронь
    $('#demonstration-block__btn').click(function(event) {
        $('.popup-reserv__wrapper').addClass('visible');
        $('body').addClass('lock');
    });
    $('#popup-reserv__btn-close').click(function(event) {
        $('.popup-reserv__wrapper').removeClass('visible');
        $('body').removeClass('lock');
    });

    /*--------------------------------------------------------------*/

    //name
    $('#name').hover(function() {
        var nameText = $('#name').val();
        //
        var nameError1 = 'The field is not filled';
        var nameError2 = 'At least 2 characters';
        var nameError3 = 'Only latin letters';
        //
        if (nameText == nameError1) {
            console.log('yes');
            $('#name').val('');
        } else if (nameText == nameError2) {
            console.log('yes2');
            $('#name').val('');
        } else if (nameText == nameError3) {
            console.log('yes2');
            $('#name').val('');
        }
    });

    //email
    $('#email').hover(function() {
        var emailText = $('#email').val();
        //
        var emailError1 = 'The field is not filled';
        var emailError2 = 'Incorrect email';
        //
        if (emailText == emailError1) {
            console.log('yes');
            $('#email').val('');
        } else if (emailText == emailError2) {
            console.log('yes2');
            $('#email').val('');
        }
    });

    //text
    $('#request').hover(function() {
        var requestText = $('#request').val();
        //
        var requestError1 = 'The field is not filled';
        var requestError2 = 'At least 2 characters';

        //
        if (requestText == requestError1) {
            console.log('yes');
            $('#request').val('');
        } else if (requestText == requestError2) {
            console.log('yes2');
            $('#request').val('');
        }
    });

    //
});