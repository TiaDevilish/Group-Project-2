$(function () {

    $("#profile").on("click", (event) => {
        window.location.pathname = "/api/user/3"
    });
    $("#home").on("click", (event) => {
        window.location.pathname = "/";
    });
    $("#library").on("click", (event) => {
        window.location.pathname = "/browse-book";
    });

    $("#logOut").on("click", (event) => {
        $.get('/api/logout')
            .then(result => window.location.reload());
    });

    $("#cart").on("click", (event) => {
        window.location.pathname = "/api/cart/";
    });
    
});