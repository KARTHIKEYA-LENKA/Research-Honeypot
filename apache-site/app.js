document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signupBtn");
    const signinBtn = document.getElementById("signinBtn");
    const title = document.getElementById("title");

    signupBtn.addEventListener("click", function() {
        title.innerText = "Sign Up";
    });

    signinBtn.addEventListener("click", function() {
        title.innerText = "Sign In";
    });
});
