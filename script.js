var IDtxt = document.getElementById("AdviceID");
var quotetxt = document.getElementById("quote");
// First of all we will need to generate a random number
// Now let's Fetch the API
function LoadAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(function (data) {
      IDtxt.innerHTML = data.slip.id;
      quotetxt.innerHTML = data.slip.advice;
    });
}
document.getElementById("dicebtn").addEventListener("click", LoadAdvice);
LoadAdvice();
