/*форма отпраки*/
$(document).ready(function() {
    $('#popup-reserv__phone').mask('+32-9-999-99-99');
    var validName = 1;
    var validSurame = 1;
    var validPhone = 1;
    var validPersons = 1;
    /*----------ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ----------*/
    /*----------имя----------*/
    $('.popup-reserv__form').mouseover(function() {
        var nameReserv = $('#popup-reserv__name').val();
        var nameQuestions = $('#name').val();
        var rv_name = /^[a-zA-Z]+$/; //для имени и фамилии
        var nameValid = rv_name.test(nameReserv);
        var nameQuestionsValid = rv_name.test(nameQuestions);
        if (nameReserv.length < 2) {
            validName = 1;
            $('#fail-name').text('At least 2 characters').css({ color: 'red' });
        } else if (nameReserv == '') {
            validName = 1;
            $('#fail-name').text('The field is not filled').css({ color: 'red' });
        } else if (!nameValid) {
            validName = 1;
            $('#fail-name').text('Only latin letters').css({ color: 'red' });
        } else {
            $('#fail-name').html('Ok').css({ color: 'green' });
            return (validName = 0);
        }
    });
    /*----------фамилия----------*/
    $('.popup-reserv__form').mouseover(function() {
        var surnameReserv = $('#popup-reserv__surname').val();
        var rv_surname = /^[a-zA-Z]+$/;
        var surnameValid = rv_surname.test(surnameReserv);
        if (surnameReserv.length < 2) {
            validSurame = 1;
            $('#fail-surname').text('At least 2 characters').css({ color: 'red' });
        } else if (surnameReserv == '') {
            validSurame = 1;
            $('#fail-surname').text('The field is not filled').css({ color: 'red' });
        } else if (!surnameValid) {
            validSurame = 1;
            $('#fail-surname').text('Only latin letters').css({ color: 'red' });
        } else {
            $('#fail-surname').html('Ok').css({ color: 'green' });
            return (validSurame = 0);
        }
    });
    /*----------телефон----------*/
    $('.popup-reserv__form').mouseover(function() {
        var phoneReserv = $('#popup-reserv__phone').val();
        //+32-9-999-99-99
        var rv_phone = /^\+32\-\d{1}-\d{3}-\d{2}-\d{2}$/;
        var phoneValid = rv_phone.test(phoneReserv);
        if (phoneReserv == '') {
            validPhone = 1;
            $('#fail-phone').text('The field is not filled').css({ color: 'red' });
        } else if (!phoneValid) {
            validPhone = 1;
            $('#fail-phone').text('Incorrect phone').css({ color: 'red' });
        } else {
            $('#fail-phone').html('Ок').css({ color: 'green' });
            validPhone = 0;
        }
    });
    /*----------количество людей----------*/
    $('.popup-reserv__form').mouseover(function() {
        var personsReserv = +$('#popup-reserv__persons').val();
        var rv_persons = /^[0-9]+$/;
        var personsValid = rv_persons.test(personsReserv);

        if (!personsValid) {
            validPersons = 1;
            $('#fail-person').text('Incorrectly completed').css({ color: 'red' });
        } else if (personsReserv == '') {
            validPersons = 1;
            $('#fail-person').text('The field is not filled').css({ color: 'red' });
        } else {
            $('#fail-person').html('Ok').css({ color: 'green' });
            validPersons = 0;
        }
    });

    //ОТПРАВКА В  PHP
    $('#popup-reserv__btn').on('click', function() {
        var nameReserv = $('#popup-reserv__name').val();
        var surnameReserv = $('#popup-reserv__surname').val();
        var phoneReserv = $('#popup-reserv__phone').val();
        var personsReserv = $('#popup-reserv__persons').val();
        var commentReserv = $('#popup-reserv__comments').val();

        if (
            validName == 0 &&
            validSurame == 0 &&
            validPhone == 0 &&
            validPersons == 0
        ) {
            console.log('отправлено');
            $.ajax({
                url: 'php/ajax-popup.php',
                type: 'POST',
                cache: false,
                data: {
                    nameReserv: nameReserv,
                    surnameReserv: surnameReserv,
                    phoneReserv: phoneReserv,
                    personsReserv: personsReserv,
                    commentReserv: commentReserv,
                },
                dataType: 'html',
                success: function(data) {
                    $('#fail-form').html('Sent').css({ color: 'green' });
                    $('#popup-reserv__name')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#popup-reserv__surname')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#popup-reserv__phone')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#popup-reserv__persons')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#popup-reserv__comments')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('.popup-reserv__wrapper').removeClass('visible');
                    $('body').removeClass('lock');
                    alert('Message Sent');
                },
            });
            return false;
        } else {
            $('#fail-form').html('Not sent!').css({ color: 'red' });
            console.log('Not sent');
            return false;
        }
    });

    //
    /*-------ФОРМА-ОТПРАВКИ-INDEX-страницы---------*/
    var validName2 = 1;
    var validEmail2 = 1;
    var validRequest2 = 1;

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/
    //----------имя----------
    $('.questions__btn').click(function() {
        var nameQuestions = $('#name').val();
        var rv_name = /^[a-zA-Z]+$/;
        var nameQuestionsValid = rv_name.test(nameQuestions);
        if (nameQuestions.length < 2) {
            validName2 = 1;
            $('#name')
                .val('At least 2 characters')
                .css({ borderColor: 'red', color: 'red' });
        } else if (nameQuestions == '') {
            validName2 = 1;
            $('#name')
                .val('The field is not filled')
                .css({ borderColor: 'red', color: 'red' });
        } else if (!nameQuestionsValid) {
            validName2 = 1;
            $('#name')
                .val('Only latin letters')
                .css({ borderColor: 'red', color: 'red' });
        } else {
            $('#name').css({ borderColor: 'green', color: 'green' });
            return (validName2 = 0);
        }
    });
    //---------Email----------
    $('.questions__btn').click(function() {
        var emailQuestions = $('#email').val();
        var rv_email =
            /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; //для почты
        var emailValid = rv_email.test(emailQuestions);
        if (emailQuestions == '') {
            validEmail2 = 1;
            $('#email')
                .val('The field is not filled')
                .css({ borderColor: 'red', color: 'red' });
        } else if (!emailValid) {
            validEmail2 = 1;
            $('#email')
                .val('Incorrect email')
                .css({ borderColor: 'red', color: 'red' });
        } else {
            $('#email').css({ borderColor: 'green', color: 'green' });
            validEmail2 = 0;
        }
    });
    //----------ТЕКСТ----------
    $('.questions__btn').click(function() {
        var requestQuestions = $('#request').val();
        if (requestQuestions.length < 2) {
            validRequest2 = 1;
            $('#request')
                .val('At least 2 characters')
                .css({ borderColor: 'red', color: 'red' });
        } else if (requestQuestions == '') {
            validRequest2 = 1;
            $('#request')
                .text('The field is not filled')
                .css({ borderColor: 'red', color: 'red' });
        } else {
            $('#request').css({ borderColor: 'green', color: 'green' });
            validRequest2 = 0;
        }
    });

    /*--------ОТПРАВКА В  PHP---------*/
    $('.questions__btn').on('click', function() {
        var nameQuestions = $('#name').val();
        var emailQuestions = $('#email').val();
        var requestQuestions = $('#request').val();

        if (validName2 == 0 && validEmail2 == 0 && validRequest2 == 0) {
            console.log('отправлено');
            $.ajax({
                url: 'php/ajax-index.php',
                type: 'POST',
                cache: false,
                data: {
                    nameQuestions: nameQuestions,
                    emailQuestions: emailQuestions,
                    requestQuestions: requestQuestions,
                },
                dataType: 'html',
                success: function(data) {
                    $('#request')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#email')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    $('#name')
                        .val('')
                        .css({ borderColor: '$smokeColor', color: '$blackColor' });
                    alert('Sent');
                },
            });
            return false;
        } else {
            $('questions__btn').css({
                boxShadow: '0px 0px 10px 1px $goldColor',
                color: 'red',
            });
            console.log('Not sent');
            return false;
        }
    });
});