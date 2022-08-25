/*This function handles revealing elements when user is scrolling down
Tutorial I used https://alvarotrigo.com/blog/css-animations-scroll/
*/
function reveal() {

    //this selects all the classes that have reveal in their name
    var reveals = document.querySelectorAll(".reveal"); 
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;


        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
  }
  
window.addEventListener("scroll", reveal); //when user scrolls, reveal 

// To check the scroll position on page load
reveal();