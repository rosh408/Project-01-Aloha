document.addEventListener("DOMContentLoaded", function(){

var flkty = new Flickity( '.main-carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true
  });
document.getElementById("subscribe-form").addEventListener('submit', function(e){
e.preventDefault();
const emailInsert = document.getElementsByClassName('email-container');
function validateEmail(email) {
  return re.test(String(email).toLowerCase());
}
console.log(emailInsert.value());
  if (emailInsert.value() == validateEmail() ) {
    alert("Thank you for subscribing!");
  } else {
    alert("Please insert valid email address!");
  }
});

}); //end of doc ready




