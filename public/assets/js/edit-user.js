$(function () {

    $("#delete").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: $("#userId").html().trim(),
            type: 'DELETE',
            success: function (result) {
                window.location.pathname = `/api/user/search`
            },
            error: function (request, msg, error) {
                console.log("Error ....")
            }
        });
    });
});
