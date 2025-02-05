document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running...");

    const yesButton = document.getElementById("yesButton");
    const foodButtons = document.querySelectorAll(".foodChoice");

    if (yesButton) {
        yesButton.addEventListener("click", function () {
            console.log("Yes button clicked!");
            document.getElementById("page1").classList.add("hidden");
            document.getElementById("page2").classList.remove("hidden");
        });
    } else {
        console.error("Yes button not found.");
    }

    if (foodButtons.length > 0) {
        foodButtons.forEach(button => {
            button.addEventListener("click", function () {
                console.log(`${button.innerText} button clicked!`);
                document.getElementById("page2").classList.add("hidden");
                document.getElementById("page3").classList.remove("hidden");
            });
        });
    } else {
        console.error("Food buttons not found.");
    }
});
