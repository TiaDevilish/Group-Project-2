$(function () {
    $(".deleteFromCart").on("click", (event) => {
        event.preventDefault();
        const bookId = event.currentTarget.dataset.id;
        $.ajax({
            url: bookId,
            type: 'DELETE',
            success: function (result) {
                window.location.pathname = `api/cart/`
            },
            error: function (request, msg, error) {
                console.log("Error ....")
            }
        });
    })
});