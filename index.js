
// -----------------  Underline Section when scroll ------------------------

document.querySelector(".chapter a").style.textDecoration = "underline"
window.addEventListener('scroll', function() {
  const vh =  window.innerHeight;
  const percentage = window.pageYOffset;
  // document.querySelector('.chapter a').innerHTML = percentage +"%";
  const chapters = document.querySelectorAll(".chapter a");
  if (percentage<600 ){
    chapters.forEach(function(element){
      element.style.textDecoration = "none";
    });
    chapters[0].style.textDecoration = "underline";
  }
  else if (percentage<1250){
    chapters.forEach(function(element){
      element.style.textDecoration = "none";
    });
    chapters[1].style.textDecoration = "underline";
  }
  else if (percentage<3300){
    chapters.forEach(function(element){
      element.style.textDecoration = "none";
    });
    chapters[2].style.textDecoration = "underline";
  }
  else if (percentage<4300){
    chapters.forEach(function(element){
      element.style.textDecoration = "none";
    });
    chapters[3].style.textDecoration = "underline";
  }
  else{
    chapters.forEach(function(element){
      element.style.textDecoration = "none";
    });
    chapters[4].style.textDecoration = "underline";
  }

});


// ------------------ Label 2 Typing -----------------------
let txt = "I'm a Developer";
let i = 0;
let speed = 150;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("label_2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// ----------------------Enable Popovers-----------------------------
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
