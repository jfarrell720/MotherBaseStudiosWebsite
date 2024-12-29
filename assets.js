document.addEventListener("DOMContentLoaded", function () {
    var assetsButton = document.getElementById("assetsButton");
    if (assetsButton) {
        assetsButton.addEventListener("click", function () {
            window.location.href = "assets.html";
        });
    }
});
