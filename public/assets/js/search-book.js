$(function () {
    $("#addBook").on("click", (event) => {
        window.location.pathname = `/add-book`
    });

    $(".editBook").on("click", (event) => {
        event.preventDefault();
        const bookId = event.currentTarget.dataset.id;
        window.location.pathname = `../api/book/` + bookId;
    });

    $(".addToCart").on("click", (event) => {
        event.preventDefault();
        const bookId = event.currentTarget.dataset.id;
        const url = `/api/cart/add/` + bookId;

        $.post(url)
            .then(function () {
                window.location.reload();
            })
            .catch(function (err) {
            console.log(err);
        });
    });
});