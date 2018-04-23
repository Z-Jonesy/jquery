$(function () {

    // gyűjtsük össze az elemeket
    let $button = $('button#createPost');
    let $postList = $('div#postList');
    let $postTitle = $('input#postTitle');
    let $postBody = $('textarea#postBody');
    let $modal = $('#exampleModal')

    // gombnyomásra reagálás
    $button.click(function () {
        // értékek összeszedése
        let title = $postTitle.val();
        let body = $postBody.val();

        // bejegyzés létrehozása
        CreatePost(title, body);

        // előző értékek kitakarítása
        $postTitle.val('');
        $postBody.val('');

        //modal bezárása
        $modal.modal(hide);

    });



    // függvények ///////////////////////////////////////////////////////

    function CreatePost(title, body) {

        let postHTML = '<div class="mb-4"><header><strong>' +
            title +
        '</strong></header><main>' +
            body +
        '</main></div>'

        $postList.prepend(postHTML);

    };

});
