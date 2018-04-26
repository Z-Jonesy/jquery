$(function () {

    // elemek gyűjtése
    let $contentwrapper = $('#content-wrapper');
    let $buttons = $('button');


    let templateArticle = {
        title: 'kismacska',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, necessitatibus, animi. Facilis voluptate assumenda minus quisquam, asperiores repellendus enim officia quam cupiditate laborum eligendi, rerum!'
    };

    let articleCollection = [];
    let pageSize = 5;

    for (let index = 0; index < 15; index++) {
        articleCollection.push(templateArticle);
    }

    // gombnyomásra reagálás
    $buttons.click(function () {
        let $currentButton = $(this);
        let pageIndex = $currentButton.text();
        RenderPage(pageIndex);
    })




    /////////   fuctions

    function RenderPage(pageIndex) {

        $contentwrapper.html('');

        for (let index = (pageIndex - 1) * pageSize; index < pageIndex * pageSize; index++) {
            RenderArticle(index);
        }

    }


    function RenderArticle(index) {
        let article = articleCollection[index];
        let html = '<div><strong>' + article.title + '</strong><p></p>' + article.body + '</div>';

        $contentwrapper.append()
    }


});
