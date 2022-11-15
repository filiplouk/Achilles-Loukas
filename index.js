
document.querySelector(".chapter a").style.textDecoration = "underline"
window.addEventListener('scroll', function() {
  const vh =  window.innerHeight;
  const percentage = window.pageYOffset;
  // document.querySelector('.chapter a').innerHTML = percentage +"%";
  const chapters = document.querySelectorAll(".chapter a");
  if (percentage<700 ){
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
  else if (percentage<4800){
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
