$(function () {
    const validClass = 'is-valid';
    const invalidClass = 'is-invalid';

    // note: elemek összegyűjtése
    let $button = $('form button');
    let $checkbox = $('input#aszf');
    let $username = $('input#username')
    let $password = $('input#password')
    let $passwordAgain = $('input#passwordAgain')
    let $alert = $('div.alert');
    let $alertFieldlist = $('div.alert ul');
    let $successText = $('div#successText');
    let $form = $('form');


    //note: gombokra reagálás
    $button.click(function (event) {
        event.preventDefault();
        let invalidFields = [];

        //note: mezők ellenőrzése
        //felhasználónév
        let username = $username.val();
        if (username.length == 0) {
            // hibás kitöltés
            invalidFields.push('Felhasználónév');
            $username.removeClass(validClass);
            $username.addClass(invalidClass);
        } else {
            // helyes kitöltés
            $username.removeClass(invalidClass);
            $username.addClass(validClass);
        }

        //jelszó
        let password = $password.val();
        if (password <= 5) {
            //hibás kitöltés
            invalidFields.push('Jelszó');
            $password.removeClass(validClass);
            $password.addClass(invalidClass);
        } else {
            // helyes kitöltés
            $password.removeClass(invalidClass);
            $password.addClass(validClass);
        }

        // jelszó megerősítés
        let passwordAgain = $passwordAgain.val();
        if (password != passwordAgain || passwordAgain.length <= 5) {
            invalidFields.push('Jelszó megerősítés');
            $passwordAgain.removeClass(validClass);
            $passwordAgain.addClass(invalidClass);
        } else {
            $passwordAgain.removeClass(invalidClass);
            $passwordAgain.addClass(validClass);
        }


        // ÁsZF
        let isChecked = $checkbox.prop('checked');
        if (!isChecked) {
            invalidFields.push('ÁSZF');
            $checkbox.removeClass(validClass);
            $checkbox.addClass(invalidClass);
        } else {
            $checkbox.removeClass(invalidClass);
            $checkbox.addClass(validClass);
        }

        // note: sikeres - sikertelen elágazás
        if (invalidFields.length == 0) {
            $form.hide();
            $alert.hide();
            $successText.show();
        } else {
            // hibák kiírása
            $alert.show();
            $alertFieldlist.html('')
            $.each(invalidFields, function (index, field) {
                console.log(index + ': ' + field);
                $alertFieldlist.append('<li>' + field + '</li>')
            });
        }



        console.log(invalidFields);
    });

});
