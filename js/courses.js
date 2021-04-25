/****************************** pop up logic ************************************************* */

function Popup(content, card, close) {

  // Get the modal
  let modal = document.getElementById(content);

  // Get the button that opens the modal
  let btn = document.getElementById(card);

  // Get the <span> element that closes the modal
  let span = document.getElementById(close);

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}



Popup("html-popUp","html-topics","close-html");
Popup("css-popUp","css-topics","close-css");
Popup("js-popUp","js-topics","close-js");

Popup("python-popUp","python-topics","close-python");
Popup("nodejs-popUp","nodejs-topics","close-nodejs");
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


let NodejsCard = document.getElementById('nodejs');
let CCard = document.getElementById('c++');

let OracleCard = document.getElementById('oracle');
let sqlCard = document.getElementById('sql');
let mongodbCard = document.getElementById('mongodb');


let AllArr = [HTMLcard,CSScard,JScard,PyhtonCard,NodejsCard,CCard,OracleCard,sqlCard,mongodbCard];
let frontArr = [HTMLcard,CSScard,JScard];
let backArr = [PyhtonCard,NodejsCard,CCard];
let dataBaseArr = [OracleCard,sqlCard,mongodbCard];


// event listners:
AllButton.addEventListener('click', function () {

  for (let i = 0; i < AllArr.length; i++) {
    AllArr[i].style.display = 'block';
  }

});

FrontButton.addEventListener('click', function () {

  for (let i = 0; i < AllArr.length; i++) {
    AllArr[i].style.display = 'none';
  }

  for (let i = 0; i < frontArr.length; i++) {
    frontArr[i].style.display = 'block';
  }

});

BackButton.addEventListener('click', function () {

  for (let i = 0; i < AllArr.length; i++) {
    AllArr[i].style.display = 'none';
  }

  for (let i = 0; i < backArr.length; i++) {
    backArr[i].style.display = 'block';
  }

});

DataBaseButton.addEventListener('click', function () {

  for (let i = 0; i < AllArr.length; i++) {
    AllArr[i].style.display = 'none';
  }

  for (let i = 0; i < dataBaseArr.length; i++) {
    dataBaseArr[i].style.display = 'block';
  }

});
//////////////////////////////////////////////////////////////////////
/////////////  Constructor //////////////////////////////////////


function Cards(name, src) {
  this.name = name;
  this.src = src;
  this.buy= false;
  this.fav = false;
  this.rate = 0;
  Cards.allCourses.push(this);
}//End constructor

Cards.allCourses = [];

let html = new Cards('html','../img/HTML.png');
let css = new Cards('css','../img/CSS.png');
let js = new Cards('js','../img/JS.png');
let python = new Cards('python','../img/python.png');
let nodejs = new Cards('nodejs', '../img/Nodejs.png');
let cpluse = new Cards('cpluse', '../img/c++.jpg');
let oracle = new Cards('oracle','../img/oracle.png');
let sql = new Cards('sql', '../img/sql.png');
let mongodb = new Cards('mongodb','../img/mongodb.jpg');

/*********************************  Card Functions *************************************/

// Buy:

function BuyCourse(buttonId, linkId, object){

  let BuyBtn = document.getElementById(buttonId);
  let Link = document.getElementById(linkId);

  BuyBtn.addEventListener('click', function () {

    object.buy = true;
    // add to profile page
    alert('Thanks for Buying');
    // this.style.display = 'none';
    this.style.pointerEvents = 'none';
    this.style.opacity = '0.3';
    Link.style.display = 'block';
  });
}

BuyCourse('html-button','html-course',html);
BuyCourse('css-button','css-course',css);
BuyCourse('js-button','js-course',js);
BuyCourse('python-button','python-course',python);
BuyCourse('nodejs-button','nodejs-course',nodejs);
BuyCourse('c++-button','c++-course',cpluse);
BuyCourse('oracle-button','oracle-course',oracle);
BuyCourse('sql-button','sql-course',sql);
BuyCourse('mongodb-button','mongodb-course',mongodb);


// fav:
function Fav(favId, Object){

  let Fav = document.getElementById(favId);

  Fav.addEventListener('click', function (e) {

    Object.fav = e.target.checked;
  });
}

Fav('html-fav',html);
Fav('css-fav',css);
Fav('js-fav',js);
Fav('oracle-fav',oracle);
Fav('sql-fav',sql);
Fav('mongodb-fav',mongodb);
Fav('python-fav',python);
Fav('nodejs-fav',nodejs);
Fav('c++-fav',cpluse);


// rate:

function Rate(rateButtonId, sliderId, Object){

  let Rate = document.getElementById(rateButtonId);
  let Slider = document.getElementById(sliderId);

  Rate.addEventListener('click', function(){

    let Range = document.getElementById('html-range');
    Object.rate += parseInt(Range.value);
    alert('Thanks for rating');
    this.style.pointerEvents = 'none';
    this.style.opacity = '0.3';
    Slider.style.pointerEvents = 'none';
    Slider.style.opacity = '0.3';
  });

}

Rate('html-rate-button','html-rating-slider',html);
Rate('css-rate-button','css-rating-slider',css);
Rate('js-rate-button','js-rating-slider',js);
Rate('oracle-rate-button','oracle-rating-slider',oracle);
Rate('sql-rate-button','sql-rating-slider',sql);
Rate('mongodb-rate-button','mongondb-rating-slider',mongodb);
Rate('python-rate-button','python-rating-slider',python);
Rate('nodejs-rate-button','nodejs-rating-slider',nodejs);
Rate('c++-rate-button','c++-rating-slider',cpluse);


///////////////////////////////////////////////Local Storage//////////////////////////////
function saveTols()
{
  let arrstr=JSON.stringify(Cards.allCourses);
  localStorage.setItem('courses',arrstr);
}

let card = null;
for(let i=0; i < Cards.allCourses.length;i++ ){

  card = document.getElementsByClassName('card')[i];

  card.addEventListener('click',function(){
    saveTols();
  });
}

/////////////// Get local storage///////////////
function getLs()
{
  let data = localStorage.getItem('courses');
  console.log('gitelmentttt'+data);
  let item = JSON.parse(data);
  console.log('item '+ item);

}
getLs();







