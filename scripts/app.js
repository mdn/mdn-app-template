var flipBox = document.querySelector('x-flipbox');
var toggleButton = document.getElementById('flipper');

// assume that toggleButton and flipBox are already
// defined as their respective DOM elements
toggleButton.addEventListener("click", function(){
    flipBox.toggle(); 
});

Top