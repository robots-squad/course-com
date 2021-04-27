/****************************** pop up logic ***********************************************/
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
////////////////////////  Constructor ////////////////////////////////


function Cards(name, src) {
  this.name = name;
  this.src = src;
  this.buy = false;
  this.fav = false;
  this.rate = 0;
  this.allRrte = 0;
  this.count = 0;
  Cards.allCourses.push(this);
}

Cards.allCourses = [];

let html = new Cards('html', '../img/HTML.png');
let css = new Cards('css', '../img/CSS.png');
let js = new Cards('js', '../img/JS.png');
let oracle = new Cards('oracle', '../img/oracle.png');
let sql = new Cards('sql', '../img/sql.png');
let mongodb = new Cards('mongodb', '../img/mongodb.png');
let python = new Cards('python', '../img/python.png');
let nodejs = new Cards('nodejs', '../img/Nodejs.png');
let cplus = new Cards('cplus', '../img/c++.jpg');

/*********************************  Card Functions *************************************/


// buy pop up function:
function showPopUp(Id, closeId) {

  let buyPopup = document.getElementById(Id);
  buyPopup.style.display = 'block';

  let close = document.getElementById(closeId);
  close.onclick = function () {
    buyPopup.style.display = 'none';

  };
}

function confirmPopUp(Id, closeId) {

  let confirmPopup = document.getElementById(Id);
  confirmPopup.style.display = 'block';

  let close = document.getElementById(closeId);
  close.onclick = function () {
    confirmPopup.style.display = 'none';
  };
}

function hide() {
  document.getElementById('buy-popUp').style.display = 'none';
}

// Buy:
function BuyCourse(buttonId, linkId, object) {
  
  let BuyBtn = document.getElementById(buttonId);
  let Link = document.getElementById(linkId);

  BuyBtn.addEventListener('click', function () {

    // add to profile page
    showPopUp('buy-popUp', 'close-buy');

    let yesbtn = document.getElementById('true');
    let nobtn = document.getElementById('false');

    yesbtn.addEventListener('click', function () {

      confirmPopUp('confirmbuy-popUp', 'close-confirmbuy');

      hide();
      object.buy = true;
      BuyBtn.style.pointerEvents = 'none';
      BuyBtn.style.opacity = '0.3';
      Link.style.display = 'block';
      saveTols();
      
    });

    nobtn.addEventListener('click', function () {
      Link.style.display = 'none';
      hide();
    });
  });
}

BuyCourse('html-button', 'html-course', html);
BuyCourse('css-button', 'css-course', css);
BuyCourse('js-button', 'js-course', js);
BuyCourse('oracle-button', 'oracle-course', oracle);
BuyCourse('sql-button', 'sql-course', sql);
BuyCourse('mongodb-button', 'mongodb-course', mongodb);
BuyCourse('python-button', 'python-course', python);
BuyCourse('nodejs-button', 'nodejs-course', nodejs);
BuyCourse('cplus-button', 'cplus-course', cplus);

// fav:
function Fav(favId, object) {

  let Fav = document.getElementById(favId);

  Fav.addEventListener('click', function (e) {
    x= true;
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

function rateShowPopup(Id, closeId) {

  let ratePopup = document.getElementById(Id);
  ratePopup.style.display = 'block';

  let close = document.getElementById(closeId);
  close.onclick = function () {
    ratePopup.style.display = 'none';

  };

}


function Rate(rateButtonId, sliderId, object, rangeId, indx) {
  getLsRate();
  
  let Rate = document.getElementById(rateButtonId);
  let Slider = document.getElementById(sliderId);

  Rate.addEventListener('click', function () {
    
    let Range = document.getElementById(rangeId);

    rateShowPopup('rate-popUp', 'close-rate');

    object.rate = parseInt(Range.value);
    Cards.allCourses[indx].count++;
    Cards.allCourses[indx].allRrte += object.rate;
    
    saveTols();
    
    this.style.pointerEvents = 'none';
    this.style.opacity = '0.3';
    Slider.style.pointerEvents = 'none';
    Slider.style.opacity = '0.3';
  });

}

Rate('html-rate-button', 'html-rating-slider', html, 'html-range', 0);
Rate('css-rate-button', 'css-rating-slider', css, 'css-range', 1);
Rate('js-rate-button', 'js-rating-slider', js, 'js-range', 2);
Rate('oracle-rate-button', 'oracle-rating-slider', oracle, 'oracle-range', 3);
Rate('sql-rate-button', 'sql-rating-slider', sql, 'sql-range', 4);
Rate('mongodb-rate-button', 'mongodb-rating-slider', mongodb, 'mongodb-range', 5);
Rate('python-rate-button', 'python-rating-slider', python, 'python-range', 6);
Rate('nodejs-rate-button', 'nodejs-rating-slider', nodejs, 'nodejs-range', 7);
Rate('cplus-rate-button', 'cplus-rating-slider', cplus, 'cplus-range', 8);


//////////////////////////////////Local Storage//////////////////////////////

function saveTols() {
  localStorage.setItem('courses', JSON.stringify(Cards.allCourses));
  
}


///////////////////////////// Get local storage ///////////////////////////////

function getLs() {
  let data = JSON.parse(localStorage.getItem('courses'));
  if (data !=null) {
    Cards.allCourses = data;
  }
}

function getLsRate() {
  let data = JSON.parse(localStorage.getItem('courses'));
  if (data !=null) {
    for(let i=0;i<data.length;i++){
      Cards.allCourses[i].allRrte = data[i].allRrte;
      Cards.allCourses[i].count = data[i].count;
    }
    
  }
}

/***************************** chart *****************************************/

// get courses names and avg rating:

let namesArr = [];
let rateArr = [];
let avg=0;

for(let i=0; i< Cards.allCourses.length; i++){
  namesArr.push(Cards.allCourses[i].name);

  if(Cards.allCourses[i].allRrte != 0){  // to prevent dividing on 0
    avg = Cards.allCourses[i].allRrte / Cards.allCourses[i].count;
  }else{
    avg = 0;
  }

  rateArr.push(avg);
}

// chart:
function chart(){ 

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: 'Rating',
        data: rateArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 100, 200, 0.5)',
          'rgba(100, 159, 50, 0.5)',
          'rgba(53, 30, 250, 0.5)'
        ],
        borderWidth: 2
      }]
    }
  })
}

chart();