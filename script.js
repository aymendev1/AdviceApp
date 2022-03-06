var IDtxt = document.getElementById("AdviceID");
var quotetxt = document.getElementById("quote");
// Now let's Fetch the API
function LoadAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(function (data) {
      IDtxt.innerHTML = data.slip.id;
      quotetxt.innerHTML = data.slip.advice;
    });
}
// Load advice after clicking the button
document.getElementById("dicebtn").addEventListener("click", LoadAdvice);
// LOAD Advice when the browser refreshed or entred to the page
LoadAdvice();
