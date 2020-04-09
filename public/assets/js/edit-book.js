$(function () {

    $("#delete").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: window.location.pathname,
            type: 'DELETE',
            success: function (result) {
                window.location.pathname = `/api/book/search`
            },
            error: function (request, msg, error) {
                console.log("Error ....")
            }
        });
    });
});



