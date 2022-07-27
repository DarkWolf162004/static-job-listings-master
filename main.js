var original = document.getElementById("frame");
var clone = original.cloneNode(true);
clone.removeAttribute("id");

clone.getElementsByClassName("posicion-name")[0].innerHTML="Fulstack Diveloped"
clone.getElementsByClassName("images")[0].src="images/manage.svg"





original.after(clone)





