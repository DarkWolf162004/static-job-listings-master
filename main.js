const original = document.getElementById("frame");

function createJobItem(posicionName, images) {
  const clone = original.cloneNode(true);
  clone.removeAttribute("id");
  clone.getElementsByClassName("posicion-name")[0].innerHTML = posicionName;
  clone.getElementsByClassName("images")[0].src = images;
  clone.getElementsByClassName("enterprise-name")[0].innerHTML = "Manage";
  clone.getElementsByClassName("agreement")[0].innerHTML = "Part Time";
  clone.getElementsByClassName("country")[0].innerHTML = "Remote";
  clone.getElementsByClassName("role")[0].innerHTML = "Fullstack";
  clone.getElementsByClassName("level")[0].innerHTML = "Midweight";
  clone.getElementsByClassName("web-page")[0].innerHTML = "Python";
  clone.getElementsByClassName("blade-style")[0].innerHTML = "React";
  clone.getElementsByClassName("programming")[0].style.display = "none";
  clone.classList.remove("border-left-green");
  original.after(clone);
}


createJobItem("Junior Frontend  Developer",);
createJobItem("Junior Frontend  Developer ", "images/account.svg");
createJobItem("Fullstack Developer", "images/manage.svg"  );