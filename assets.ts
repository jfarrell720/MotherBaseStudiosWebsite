document.addEventListener("DOMContentLoaded", () => {
    const assetsButton = document.getElementById("assetsButton");
    if (assetsButton) {
      assetsButton.addEventListener("click", () => {
        window.location.href = "assets.html";
      });
    }
  });
  