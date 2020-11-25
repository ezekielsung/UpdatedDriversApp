var modal = document.getElementById("id1");


// Get the button that opens the modal
var btn = document.getElementById("done");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}


function collapse(){
var x = document.getElementById("collapseInfo");
var y = document.getElementById("afterCollapseInfo");
x.style.display="none";
y.style.display="block";
}

function collapse2(){
var x = document.getElementById("collapseInfo2");
var y = document.getElementById("afterCollapseInfo2");
x.style.display="none";
y.style.display="block";
}

function collapse3(){
var x = document.getElementById("collapseInfo3");
var y = document.getElementById("afterCollapseInfo3");
x.style.display="none";
y.style.display="block";
}

function back(){
	var x = document.getElementById("collapseInfo");
	var y = document.getElementById("afterCollapseInfo");
	x.style.display="block";
	y.style.display="none";
}
function back2(){
	var x = document.getElementById("collapseInfo2");
	var y = document.getElementById("afterCollapseInfo2");
	x.style.display="block";
	y.style.display="none";
}

function back3(){
	var x = document.getElementById("collapseInfo3");
	var y = document.getElementById("afterCollapseInfo3");
	x.style.display="block";
	y.style.display="none";
}


function textCustomer(){
	var x = document.getElementById("text");
	x.innerHTML="Sent";
	x.style.background="gray";
}
function textCustomer2(){
	var x = document.getElementById("text2");
	x.innerHTML="Sent";
	x.style.background="gray";
}
function textCustomer3(){
	var x = document.getElementById("text3");
	x.innerHTML="Sent";
	x.style.background="gray";
}

function close2(){
	var y = document.getElementById("afterCollapseInfo2");
	y.style.display="none";
}
function close3(){
	var y = document.getElementById("afterCollapseInfo3");
	y.style.display="none";
}

function closeer(){
	var y = document.getElementById("afterCollapseInfo");
	y.style.display="none";
}
