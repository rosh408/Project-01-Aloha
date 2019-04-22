document.addEventListener("DOMContentLoaded", function(){

//All of your code goes under
console.log('this is working');

var flkty = new Flickity( '.main-carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true
  });

}); //end of doc ready

const emailInsert = documentGetElementByTagName('input');

if (emailInsert.value == 'string') {
  // run same action alert
  alert("Thank you for subscribing!");
} else {
  // alert please enter email.
  alert("Please insert valid email address!");
}
