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
        let avg = (red + green + blue)/3;
        console.log(avg);
        if (avg /255 > 0.5) {
            button.css('color','black');
        } else {
            button.css('color','white');
        }

    });
});