$(function () {
    const validClass = 'is-valid';
    const invalidClass = 'is-invalid';
    // note: elemek összegyűjtése
    let $button = $('button');
    let $checkbox = $('input[type="checkbox]');
    let $invalidFieldlist = $('div.alert-danger ul');
    let $alert = $('div.alert-danger');
    let successText = $('div#successText');
    let $form = $('form');
    let $username = $('input#username')
    let $password = $('input#password')

    //note: gombokra reagálás
    $button.click(function (event) {
        event.preventDefault();

        let invalidFields = [];
        $invalidFieldlist.html('');

        //note: mezők ellenőrzése
        //felhasználónév
        let username = $username.val();
        if(username.length == 0){
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
        if(password <= 5){
            //hibás kitöltés
            invalidFields.push('Jelszó');
            $password.removeClass(validClass);
            $password.addClass(invalidClass);
        } else {
            // helyes kitöltés
            $password.removeClass(invalidClass);
            $password.addClass(validClass);
        }


        // ÁsZF
        let isChecked = $checkbox.prop('checked');
        if (!isChecked) {
            invalidFields.push('ÁSZF');
            $checkbox.removeClass('is-valid');
            $checkbox.addClass('is-invalid');
        } else {
            $checkbox.removeClass('is-invalid');
            $checkbox.addClass('is-valid');
        }

        // note: sikeres - sikertelen elágazás
        if (invalidFields.length == 0) {
            $successText.show();
            $form.hide();
            $alert.hide();
        } else {
            // hibák kiírása
            $alert.show();
            $invalidFieldlist.append('<li>teszt</li>')
            $.each(function (index, field) {
                console.log(index + ': ' + field);
                $invalidFieldlist.append('<li' + field + '</li>')
            });
        }



        console.log(invalidFields);
    });

});
