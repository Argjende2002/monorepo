document.addEventListener("DOMContentLoaded", function () {
    const checkboxContainer = document.getElementById("checkboxContainer");
    const shuffleButton = document.getElementById("shuffleButton");
    const changeButton = document.getElementById("changeButton");
    const showSelectedButton = document.getElementById("showSelectedButton");
    const selectedValuesDiv = document.getElementById("selectedValues");

    shuffleButton.addEventListener("click", function () {
        const divs = Array.from(checkboxContainer.querySelectorAll("div"));
        divs.sort(() => Math.random() - 0.5);
        divs.forEach((div) => {
            checkboxContainer.appendChild(div);
        });
    });

    changeButton.addEventListener("click", function () {
    const checkboxes = Array.from(checkboxContainer.querySelectorAll("input[type='checkbox']:checked"));
    const selectedFirstLetters = checkboxes.map((checkbox) => checkbox.value.charAt(0));
    selectedValuesDiv.textContent = "Selected Values: " + selectedFirstLetters.join(", ");
});

    showSelectedButton.addEventListener("click", function () {
        const selectedCheckboxes = Array.from(checkboxContainer.querySelectorAll("input[type='checkbox']:checked"));
        const selectedValues = selectedCheckboxes.map((checkbox) => checkbox.value);
        selectedValuesDiv.textContent = "Selected Values: " + selectedValues.join(", ");
    });
});
