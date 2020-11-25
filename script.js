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
if (x.style.display=="block"){
  x.style.display="none";
}


}
