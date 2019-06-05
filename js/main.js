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
      const emailInsert = document.getElementById("email-container");
      const emailInput = emailInsert.value;
      function validateEmail() {
        return emailInput.toLowerCase();
      }
      if (
        emailInput === validateEmail() &&
        emailInput.includes("@") &&
        emailInput.includes(".com")
      ) {
        emailInsert.value = "";
        setTimeout(function() {
          alert("Thank you for subscribing!");
        }, 250);
      } else {
        alert("Please insert valid email address!");
      }
    });
    
}); 