$(document).ready(function() {

    $("#search-btn").on("click", (event) => {
        event.preventDefault();
        const value=$("#search-box").val();
        window.location.pathname = `/search-apibook/${value}`;
    })
});
