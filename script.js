document.addEventListener("DOMContentLoaded", function () {
  const adviceNumberValue = document.getElementById("adviceNumberValue");
  const adviceText = document.getElementById("advice");
  const loader = document.getElementById("loader");
  const dice = document.getElementById("diceClass");

  dice.addEventListener("click", function () {
    // Show the loader while waiting for the response
    loader.style.display = "block";
    adviceText.style.display = "none";

    // Make a request to the advice API
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        // Update the advice number and advice text on the page
        adviceNumberValue.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;

        // Hide the loader and show the advice
        loader.style.display = "none";
        adviceText.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);

        // Hide the loader and show an error message or handle it as needed
        loader.style.display = "none";
        adviceText.style.display = "block";
      });
  });
});
