const original = document.getElementById("frame");

function createJobItem(
  posicionName,
  enterpriseName,
  status,
  category,
  images,
  time,
  agreement,
  country,
  role,
  level,
  webPage,
  bladeStyle,
  programming,
  showBorder
) {
  const clone = original.cloneNode(true);
  clone.removeAttribute("id");
  clone.getElementsByClassName("posicion-name")[0].innerHTML = posicionName;
  clone.getElementsByClassName("enterprise-name")[0].innerHTML = enterpriseName;
  clone.getElementsByClassName("status")[0].style.display = status
    ? "block"
    : "none";
  clone.getElementsByClassName("category")[0].style.display = category
    ? "block"
    : "none";
  clone.getElementsByClassName("images")[0].src = images;
  clone.getElementsByClassName("time")[0].innerHTML = time;
  clone.getElementsByClassName("agreement")[0].innerHTML = agreement;
  clone.getElementsByClassName("country")[0].innerHTML = country;
  clone.getElementsByClassName("role")[0].innerHTML = role;
  clone.getElementsByClassName("level")[0].innerHTML = level;
  clone.getElementsByClassName("web-page")[0].innerHTML = webPage;
  clone.getElementsByClassName("blade-style")[0].innerHTML = bladeStyle;
  clone.getElementsByClassName("programming")[0].style.display = programming
    ? "block"
    : "none";
  clone.getElementsByClassName("programming")[0].innerHTML = programming;
  if (!showBorder){
    clone.classList.remove("border-left-green");
  }
  original.after(clone);
}

createJobItem(
  "Junior Frontend Developer",
  "Insure",
  "",
  "",
  "images/insure.svg",
  "2w ago",
  "Full Time",
  "USA only",
  "Frontend",
  "Junior",
  "HTML",
  "Sass",
  "JavaScript",
  false
);
createJobItem(
  "Junior Developer",
  "Shortly",
  "",
  "",
  "images/shortly.svg",
  "2w ago",
  "Full Time",
  " Worldwide",
  "Frontend",
  "Junior",
  "HTML",
  "Sass",
  "JavaScript"
);
createJobItem(
  "Junior Backend Developer",
  "FaceIt",
  "",
  "",
  "images/faceit.svg",
  "2w ago",
  "Full Time",
  "UK only",
  "Backend",
  "Junior",
  "Ruby",
  "RaR",
  ""
);
createJobItem(
  "Software Engineer",
  "Loop Studios",
  "",
  "",
  "images/loop-studios.svg",
  "1w ago",
  "Full Time",
  "Worldwide",
  "Fullstack",
  "Midweight",
  "JavaScript",
  "Sass",
  "Ruby"
);
createJobItem(
  "Junior Frontend Developer ",
  "MyHome",
  "",
  "",
  "images/myhome.svg",
  "5d ago",
  "Contract",
  "USA only",
  "Frontend",
  "Junior",
  "CSS",
  "JavaScript",
  ""
);
createJobItem(
  "Junior Frontend Developer ",
  "Account",
  "NEW!",
  "",
  "images/account.svg",
  "2d ago",
  "Part Time",
  "USA only",
  "Frontend",
  "Junior",
  "React",
  "Sass",
  "JavaScript"
);
createJobItem(
  "Fullstack Developer",
  "Manage",
  "NEW!",
  "FEATURED",
  "images/manage.svg",
  "1d ago",
  "Part Time",
  "Remote",
  "Fullstack",
  "Midweight",
  "Python",
  "React",
  "",
  true
);
