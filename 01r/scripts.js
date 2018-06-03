$(function () {

    // elem megkeresése
    let button = $('button#btn-random');

    button.click(function () {

        // rgb kód előállítása
        let max = 255;
        let red = Math.round(max * Math.random(), 0);
        let green = Math.round(max * Math.random(), 0);
        let blue = Math.round(max * Math.random(), 0);
        console.log(red, green, blue);

        // rgb szín beállítás
        button.css(
            'background-color',
            'rgb(' + red + ',' + green + ',' + blue + ')'
        );

        // átlagolás a szöveg szín megállapításhoz
        let avg = (red + green + blue) / 3;
        console.log(avg);
        if (avg / 255 > 0.5) {
            button.css('color', 'black');
        } else {
            button.css('color', 'white');
        }

    });
}); // gombszínező script vége

// formos feladat
$(function () {
    // konstansok a példa kedvéért
    const EMAIL = 'z@com';
    const PASSWORD = 'hey';

    // elemek összegyűjtése
    let $button = $('button.btn-primary');
    let $email = $('input[type="email"]');
    let $password = $('input[type="password"]');
    let $alertsuccess = $('.alert-success');
    let $alertdanger = $('.alert-danger');

    $alertdanger.hide();
    $alertsuccess.hide();

    // click eseményre default reagálás megakasztása 
    $button.click(function (event) {
        event.preventDefault();

        // megnézzük jót írtak-e be
        if (EMAIL === $email.val() && PASSWORD === $password.val()) {
            $alertdanger.hide();
            $alertsuccess.show();

        } else {
            $alertdanger.show();
            $alertsuccess.hide();
        }
    });
}); // formos feladat vége

// Progress bar
$(function () {


}); // progress bar