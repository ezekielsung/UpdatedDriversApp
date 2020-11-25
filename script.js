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


function collapse(button){
var z = button.id;

switch (z){
  case 'done':
    var x = document.getElementById("collapseInfo");
    var y = document.getElementById("afterCollapseInfo");
    x.style.display="none";
    y.style.display="block";
    break;
  case 'done2':
    var x = document.getElementById("collapseInfo2");
    var y = document.getElementById("afterCollapseInfo2");
    x.style.display="none";
    y.style.display="block";
    break;
  case 'done3':
    var x = document.getElementById("collapseInfo3");
    var y = document.getElementById("afterCollapseInfo3");
    x.style.display="none";
    y.style.display="block";
    break;
  return false;
}

}

function back(button){
  var z=button.id;

  switch (z){
    case 'back':
      var x = document.getElementById("collapseInfo");
      var y = document.getElementById("afterCollapseInfo");
      x.style.display="block";
      y.style.display="none";
      break;
    case 'back2':
      var x = document.getElementById("collapseInfo2");
      var y = document.getElementById("afterCollapseInfo2");
      x.style.display="block";
      y.style.display="none";
      break;
    case 'back3':
      var x = document.getElementById("collapseInfo3");
      var y = document.getElementById("afterCollapseInfo3");
      x.style.display="block";
      y.style.display="none";
      break;
    return false;
  }
}


function textCustomer(button){
  var y = button.id;

  switch(y){
    case 'text':
      var x = document.getElementById("text");
      x.innerHTML="Sent";
      x.style.background="gray";
      break;
    case 'text2':
      var x = document.getElementById("text2");
    	x.innerHTML="Sent";
    	x.style.background="gray";
      break;
    case 'text3':
      var x = document.getElementById("text3");
    	x.innerHTML="Sent";
    	x.style.background="gray";
      break;
    return false;
  }

}

function closeer(button){
  var x = button.id;

switch(x){
  case 'close1':
    var y = document.getElementById("afterCollapseInfo");
    y.style.display="none";

    var q = document.getElementById("cust1");
    q.style.marginBottom="30px";

    break;
  case 'close2':
    var y = document.getElementById("afterCollapseInfo2");
    y.style.display="none";
    var q = document.getElementById("cust2");
    q.style.marginBottom="30px";
    break;
  case 'close3':
    var y = document.getElementById("afterCollapseInfo3");
    y.style.display="none";
    var q = document.getElementById("cust3");
    q.style.marginBottom="30px";

    var z = document.getElementById("button2");
    z.style.pointerEvents="all";
    z.style.background="#008CBA";
    break;
  return false;
}


}
