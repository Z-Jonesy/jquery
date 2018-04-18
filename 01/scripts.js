$(function () {
    // elem megkeresése

    let button = $('button#btn-random');

    button.click(function () {
        //rgb kód előállítása

        let max = 255;
        let red = Math.round(max * Math.random(), 0);
        let green = Math.round(max * Math.random(), 0);
        let blue = Math.round(max * Math.random(), 0);

        // rgb szín beállítása  
        button.css(
            'background-color',
            'rgb(' + red + ',' + green + ',' + blue + ')'
        );


        // átlagolás
        let avg = (red + green + blue) / 3;
        if (avg / 255 > 0.5) {
            button.css('color', 'black');
        } else {
            button.css('color', 'white');
        }

    });
});

// note: 3. feladat -> Progress bar

$(function () {

    // gyűjtsük össze az elemeket
    let $progressbar = $('.progress-bar');
    let $input = $('input[type="number"]');

    $input.change(function () {
        // kérjük le a százalékot
        let percent = $input.val();

        // állítsuk be a progressbart
        $progressbar.text(percent + '%');
        $progressbar.css('width', percent + '%');
        $progressbar.attr('aria-valuenow', percent);

    })
});


// note: 5. feladat -> login window

$(function () {

    const email = 'user@domain.hu';
    const password = '123';

    //elemek összegyűjtése
    let $button = $('button.btn-primary');
    let $email = $('input[type="email"]');
    let $password = $('input[type="password"]');
    let $alertsuccess = $('.alert-success');
    let $alertdanger = $('.alert-danger');
    $alertdanger.hide();
    $alertsuccess.hide();

    // click eseményre reagálás megakasztása
    $button.click(function (event) {
        event.preventDefault();


        // megnézzük jót írtak-e be
        if (email === $email.val() && password === $password.value()) {
            $alertdanger.hide();
            $alertsuccess.show();
        } else {
            $alertsuccess.hide();
            $alertdanger.show();
        }

    });

});
