$(function () {
    // konstansok
    const itemCount = 51;

    // elemek összegyűjtése
    let $templateCollection = $('templateCollection');
    let $contentWrapper = $('#content-Wrapper');

    // változók
    let templates = $templateCollection.children();


    $.each($templateCollection.children(), function (index, template) {
        let currentItem = $(template);
        $contentWrapper.append;
    });

    for (let index = 0; index < itemCount; index++) {

        // template index generálás
        // random
        let templateIndex = Math.random();
        // * 3
        templateIndex *= 3;
        // eltolás
        templateIndex = templateIndex - 0.5;
        // kerekítés
        templateIndex = Math.round(templateIndex, 1);
        // template HTML összeállítás
        let templateHTML = $(templates[templateIndex].html());

        // content wrapperhez fűzés
        $contentWrapper.append(templateHTML);


    }

    // masonry
    $contentWrapper.imagesLoaded(function () {
        $contentWrapper.masonry({
            itemSelector: '.content-item',
            gutter: 15;
        });
    });


});
