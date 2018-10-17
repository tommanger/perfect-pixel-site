function toggleMenu() {
    // var menuEl = document.getElementById('main-nav');
    document.body.classList.toggle('open');
}

function toggleModal(){
    document.body.classList.toggle('openModal');

}



 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
   // Do something else, like open/close menu
 });

