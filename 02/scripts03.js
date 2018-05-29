$(function () {
    // elemek összegyűjtése
    let $progressbar = $('.progress-bar');
    let $input = $('form input');
    let $button = $('button[type="submit"]');
    let $questionsWrapper = $('div.questions');
    let $thanksWrapper = $('div.thanks');

    // progress és kezdeti értékek megadása
    UpdateProgressBar(0);

    // változásokra reagálás
    $input.keyup(function () {
        let percent = Math.round(CountFilledInputs() / CountInputs() * 100);
        UpdateProgressBar(percent);

        if (percent == 100) {
            $button.prop('disabled', false);
        } else {
            $button.prop('disabled', true);
        }
    });

    // submitra reagálás
    $button.click(function (event) {
        event.preventDefault();
        // kérdések elrejtése
        $questionsWrapper.hide();
        // köszönő szöveg megjelenítésetlocale
        $thanksWrapper.show();

    });

    // függvények ----------------------------------------- //
    // progress bar beállítása

    function UpdateProgressBar(percent) {
        $progressbar.attr('aria-valuenow', percent);
        $progressbar.css('width', percent + '%');
        $progressbar.text(percent + ' % ');
    }

    // kitöltött mezők megszámlálása
    function CountFilledInputs() {
        let count = 0;

        // összes mezőn végigfutás
        $input.each(function (index, element) {
            let $element = $(element);
            // számláló növelése ha nem üres a mező
            if ($element.val()) {
                count++;
            }
        });
        return count;
    }

    // összes mező megszámlálása
    function CountInputs() {
        let il = $input.length;
        console.log(il);
        return il;
    }
});
