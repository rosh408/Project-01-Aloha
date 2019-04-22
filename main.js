document.addEventListener("DOMContentLoaded", function(){

//All of your code goes under
console.log('this is working');

// flickitiy
var flkty = new Flickity( '.main-carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true
  });



  // email validation
// I tried to email validate but it seems like its not working still VIA StackOverflow 
document.getElementById("button-container").addEventListener('click', function(e){

const emailInsert = document.getElementsByClassName('email-container');
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
console.log(emailInsert.value());
  if (emailInsert.value() == validateEmail() ) {
    // run same action alert\\

    alert("Thank you for subscribing!");
  } else {
    // alert please enter email.
    alert("Please insert valid email address!");
  }
  
});

}); //end of doc ready




