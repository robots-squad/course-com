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

Popup("html-popUp","html-topics","close-html");
Popup("css-popUp","css-topics","close-css");
Popup("js-popUp","js-topics","close-js");

Popup("python-popUp","python-topics","close-python");
Popup("Nodejs-popUp","Nodejs-topics","close-Nodejs");
Popup("c++-popUp","c++-topics","close-c++");


Popup("oracle-popUp","oracle-topics","close-oracle");
Popup("sql-popUp","sql-topics","close-sql");
Popup("mongodb-popUp","mongodb-topics","close-mongodb");

/************************ show and hide cards ************************************/

//list buttons:
let AllButton = document.getElementById('all');
let FrontButton = document.getElementById('front');
let BackButton = document.getElementById('back');
let DataBaseButton = document.getElementById('data');

// cards:
let HTMLcard = document.getElementById('html');
let CSScard = document.getElementById('css');
let JScard = document.getElementById('js');

let PyhtonCard = document.getElementById('python');
let NodejsCard = document.getElementById('Nodejs');
let CCard = document.getElementById('c++');

let OracleCard = document.getElementById('oracle');
let sqlCard = document.getElementById('sql');
let mongodbCard = document.getElementById('mongodb');


let AllArr = [HTMLcard,CSScard,JScard,PyhtonCard,NodejsCard,CCard,OracleCard,sqlCard,mongodbCard];
let frontArr = [HTMLcard,CSScard,JScard];
let backArr = [PyhtonCard,NodejsCard,CCard];
let dataBaseArr = [OracleCard,sqlCard,mongodbCard];

// event listners: 
AllButton.addEventListener('click',function(){

  for(let i=0; i < AllArr.length; i++){
    AllArr[i].style.display = 'block';
  }

});

FrontButton.addEventListener('click',function(){

  for(let i=0; i < AllArr.length; i++){
    AllArr[i].style.display = 'none';
  }

  for(let i=0; i <frontArr.length; i++){
    frontArr[i].style.display = 'block';
  }

});

BackButton.addEventListener('click',function(){

  for(let i=0; i < AllArr.length; i++){
    AllArr[i].style.display = 'none';
  }

  for(let i=0; i <backArr.length; i++){
    backArr[i].style.display = 'block';
  }

});

DataBaseButton.addEventListener('click',function(){

  for(let i=0; i < AllArr.length; i++){
    AllArr[i].style.display = 'none';
  }

  for(let i=0; i <dataBaseArr.length; i++){
    dataBaseArr[i].style.display = 'block';
  }

});
