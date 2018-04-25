$(function () {

    // elemek összegyűjtésetlocale

    let $menuItems = $('ul');
    let $menuItemsAndMenuButton = $('ul, button');
    let $menuOpened = false;

    // gombnomás kezelése
    $menuItemsAndMenuButton.click(function () {
        // click történt

        if ($menuOpened) {
            $menuItems.slideUp();
            $menuOpened = false;

        } else {
            $menuItems.slideDown();
            $menuOpened = true;
        }




    });




});
