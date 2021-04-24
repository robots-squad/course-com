/****************************** pop up logic ************************************************* */

function Popup(content, card,close){

  // Get the modal
  var modal = document.getElementById(content);

  // Get the button that opens the modal
  var btn = document.getElementById(card);

  // Get the <span> element that closes the modal
  var span = document.getElementById(close);

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

Popup("html-popUp","html","close-html");
Popup("css-popUp","css","close-css");
Popup("js-popUp","js","close-js");
Popup("oracle-popUp","oracle","close-oracle");