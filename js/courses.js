/****************************** pop up logic ************************************************* */

getLs();


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



Popup("html-popUp", "html-topics", "close-html");
Popup("css-popUp", "css-topics", "close-css");
Popup("js-popUp", "js-topics", "close-js");

Popup("python-popUp", "python-topics", "close-python");
Popup("nodejs-popUp", "nodejs-topics", "close-nodejs");
Popup("cplus-popUp", "cplus-topics", "close-cplus");


Popup("oracle-popUp", "oracle-topics", "close-oracle");
Popup("sql-popUp", "sql-topics", "close-sql");
Popup("mongodb-popUp", "mongodb-topics", "close-mongodb");


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
let CCard = document.getElementById('cplus');

let OracleCard = document.getElementById('oracle');
let sqlCard = document.getElementById('sql');
let mongodbCard = document.getElementById('mongodb');


let AllArr = [HTMLcard, CSScard, JScard, PyhtonCard, NodejsCard, CCard, OracleCard, sqlCard, mongodbCard];
let frontArr = [HTMLcard, CSScard, JScard];
let backArr = [PyhtonCard, NodejsCard, CCard];
let dataBaseArr = [OracleCard, sqlCard, mongodbCard];


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
  this.buy = false;
  this.fav = false;
  this.rate = 0;
  this.allRrte=0;
  Cards.allCourses.push(this);
} //End constructor

Cards.allCourses = [];



let html = new Cards('html', '../img/HTML.png');
let css = new Cards('css', '../img/CSS.png');
let js = new Cards('js', '../img/JS.png');
let python = new Cards('python', '../img/python.png');
let nodejs = new Cards('nodejs', '../img/Nodejs.png');
let cplus = new Cards('cplus', '../img/cplus.jpg');
let oracle = new Cards('oracle', '../img/oracle.png');
let sql = new Cards('sql', '../img/sql.png');
let mongodb = new Cards('mongodb', '../img/mongodb.jpg');

/*********************************  Card Functions *************************************/

// Buy:

function BuyCourse(buttonId, linkId, object) {

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
    saveTols();
  });
}

BuyCourse('html-button', 'html-course', html);
BuyCourse('css-button', 'css-course', css);
BuyCourse('js-button', 'js-course', js);
BuyCourse('python-button', 'python-course', python);
BuyCourse('nodejs-button', 'nodejs-course', nodejs);
BuyCourse('cplus-button', 'cplus-course', cplus);
BuyCourse('oracle-button', 'oracle-course', oracle);
BuyCourse('sql-button', 'sql-course', sql);
BuyCourse('mongodb-button', 'mongodb-course', mongodb);


// fav:
function Fav(favId, object) {

  let Fav = document.getElementById(favId);

  Fav.addEventListener('click', function (e) {

    object.fav = e.target.checked;
    saveTols();
  });
}

Fav('html-fav', html);
Fav('css-fav', css);
Fav('js-fav', js);
Fav('oracle-fav', oracle);
Fav('sql-fav', sql);
Fav('mongodb-fav', mongodb);
Fav('python-fav', python);
Fav('nodejs-fav', nodejs);
Fav('cplus-fav', cplus);


// rate:

function Rate(rateButtonId, sliderId, object, rangeId,indx) {
  getLs();
  let Rate = document.getElementById(rateButtonId);
  let Slider = document.getElementById(sliderId);
  Rate.addEventListener('click', function () {
    let Range = document.getElementById(rangeId);
    object.rate = parseInt(Range.value);
    Cards.allCourses[indx].allRrte +=object.rate  ;

    saveTols();
    alert('Thanks for rating');
    this.style.pointerEvents = 'none';
    this.style.opacity = '0.3';
    Slider.style.pointerEvents = 'none';
    Slider.style.opacity = '0.3';
    
  });

}
// 

Rate('html-rate-button', 'html-rating-slider', html, 'html-range',0);
Rate('css-rate-button', 'css-rating-slider', css, 'css-range',1);
Rate('js-rate-button', 'js-rating-slider', js, 'js-range',2);
Rate('oracle-rate-button', 'oracle-rating-slider', oracle, 'oracle-range',3);
Rate('sql-rate-button', 'sql-rating-slider', sql, 'sql-range',4);
Rate('mongodb-rate-button', 'mongodb-rating-slider', mongodb, 'mongodb-range',5);
Rate('python-rate-button', 'python-rating-slider', python, 'python-range',6);
Rate('nodejs-rate-button', 'nodejs-rating-slider', nodejs, 'nodejs-range',7);
Rate('cplus-rate-button', 'cplus-rating-slider', cplus, 'cplus-range',8);


///////////////////////////////////////////////Local Storage//////////////////////////////
function saveTols() {
  console.log(Cards.allCourses[0].allRrte);
  localStorage.setItem('courses', JSON.stringify(Cards.allCourses));
}


// let card = null;

// for (let i = 0; i < Cards.allCourses.length; i++) {

//   card = document.getElementsByClassName('card')[i];

//   card.addEventListener('click', function () {
//     saveTols();
//   });
// }

/////////////// Get local storage///////////////


function getLs() {

  let data = JSON.parse(localStorage.getItem('courses'));
  if (data) {
    Cards.allCourses = data;
  }


}