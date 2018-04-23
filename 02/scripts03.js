$(function(){

    // elemek összegyűjtése
    let $progressbar = $('.progress-bar');
    let $input = $('form input');
    let $button = $('button[type="submit"]');
    let $questionsWrapper = $('div.questions');
    let $thanksWrapper = $('div.thanks');

    // progress és kezdeti értékek megadása
    UpdateProgressBar(0);



    // függvények ----------------------------------------- //
    // progress bar beállítása

    function UpdateProgressBar(percent){
        $progressbar.attr('aria-valuenow', percent);
        $progressbar.css('width', percent + '%');
        $progressbar.text('percent + '%');
    }

    // kitöltött mezők megszámlálása


});
