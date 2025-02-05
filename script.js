document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const foodButtons = document.querySelectorAll(".foodChoice");

    yesButton.addEventListener("click", function () {
        document.getElementById("page1").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");
    });

    foodButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("page2").classList.add("hidden");
            document.getElementById("page3").classList.remove("hidden");
        });
    });
});
