var myVar;
var nav = document.getElementById("myTopnav");
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
var stevensWeb = document.querySelector(".stevens");
var coll = document.getElementsByClassName("collapsible");
var x = document.getElementsByTagName("P");
var h3 = document.getElementsByTagName("h3");
var h4 = document.getElementsByTagName("h4");

function topNav() {
	  if (nav.className === "topnav") {
	    nav.className += " responsive";
	  } else {
	    nav.className = "topnav";
	  }
}

function toggleButton() {
	  if (dots.style.display === "none") {
	    dots.style.display = "inline";
	    btnText.innerHTML = "See more"; 
	    moreText.style.display = "none";
	  } else {
	    dots.style.display = "none";
	    btnText.innerHTML = "See less"; 
	    moreText.style.display = "inline";
	  }
}

stevensWeb.addEventListener("click", function(){
		location.href = "https://www.stevens.edu/";
	});

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function changeColor(){

	for (var i = 0; i < x.length; i++) {
		    x[i].style.color = "red";
		  }

		  for (var i = 0; i < h3.length; i++) {
		    h3[i].style.color = "red";
		  }

		  for (var i = 0; i < h4.length; i++) {
		    h4[i].style.color = "red";
		  }
}