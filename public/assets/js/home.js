$(function () {
    $("#addbook").on("click" , (event) => {
        window.location.pathname = '/add-book'
    });

    $("#browsebook").on("click" , (event) => {
        window.location.pathname = '/browse-book'
    });

});

