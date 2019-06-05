document.addEventListener("DOMContentLoaded", function() {
  let flkty = new Flickity(".main-carousel", {
    cellAlign: "left",
    contain: true,
    freeScroll: true
  });

  document
    .getElementById("subscribe-form")
    .addEventListener("submit", function(e) {
      e.preventDefault();
      const emailInput = document.getElementById("email-container");
      const emailValue = emailInput.value;
      function validateEmail() {
        return emailValue.toLowerCase();
      }
      if (
        emailValue === validateEmail() &&
        emailValue.includes("@") &&
        emailValue.includes(".com")
      ) {
        emailInput.value = "";
        setTimeout(function() {
          alert("Thank you for subscribing!");
        }, 250);
      } else {
        alert("Please insert valid email address!");
      }
    });
    
}); 