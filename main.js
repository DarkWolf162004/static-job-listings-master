var original = document.getElementById("frame");
var clone = original.cloneNode(true);
clone.removeAttribute("id");



clone.getElementsByClassName("posicion-name")[0].innerHTML="Fullstack Developer"
clone.getElementsByClassName("images")[0].src="images/manage.svg"
clone.getElementsByClassName("enterprise-name")[0].innerHTML="Manage"
clone.getElementsByClassName("agreement")[0].innerHTML="Part Time"
clone.getElementsByClassName("country")[0].innerHTML="Remote"
clone.getElementsByClassName("role")[0].innerHTML="Fullstack"
clone.getElementsByClassName("level")[0].innerHTML="Midweight"
clone.getElementsByClassName("web-page")[0].innerHTML="Python"
clone.getElementsByClassName("blade-style")[0].innerHTML="React"
clone.getElementsByClassName("programming")[0].style.display="none"
clone.classList.remove("border-left-green");
//clone.getElementsByClassName("secundary")[0].innerHTML=""




original.after(clone)








