$(function () {
    // elemek behúzása

    let $window = $(window);
    let $htmlBody = $(html, body);
    let $scrollToTop = $('#scroll-to-top');

    const triggerDistance = 200;

    let actualDistance = $htmlBody.scrollTop();

    if (actualDistance >= triggerDistance) {
        console.log('megjelenítés');
        $scrollToTop.show();
    } else {
        console.log('elrejtés');
        $scrollToTop.hide();
    }

    // scrollra reagálás
    $window.scroll(function () {
        let actualDistance = $htmlBody.scrollTop();

        if (actualDistance >= triggerDistance) {
            console.log('megjelenítés');
            $scrollToTop.show();
        } else {
            console.log('elrejtés');
            $scrollToTop.hide();
        }

        console.log(actualDistance);
    });


    // gombnyomás figyelés
    $scrollToTop.click(function () {
        $htmlBody.animate({
            scrollTop: 0
        }, 500);
    });


});
