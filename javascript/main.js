// Obtain the elements of the class close
let links = document.querySelectorAll(".close");
// Come over each element
links.forEach(function(link){
  link.addEventListener('click',function(ev){
    // ev.preventDefault();
    let content = document.querySelector(".content");
    // Remove class for animation
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    // Add class when getting out fadeOutUp
    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    setTimeout(function(){
      location.href="/newsletters"; // Redirectioning with JS
    },200); // Time in ms

    // return false;
  });
});
