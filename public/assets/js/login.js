$(function () {
    var loginForm = $("form.login");
    var usernameInput = $("input#username");
    var passwordInput = $("input#password");

    loginForm.on("submit", function (event) {
        event.preventDefault();
        const userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    function loginUser(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        }).then(function () {
            window.location.reload();
        }).catch(function (err) {
            console.log(err);
        });
    }
});

  