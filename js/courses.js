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

Popup('html-popUp', 'html-topics', 'close-html');
Popup('css-popUp', 'css-topics', 'close-css');
Popup('js-popUp', 'js-topics', 'close-js');
Popup('oracle-popUp', 'oracle-topics', 'close-oracle');
Popup('python-popUp', 'python-topics', 'close-python');
// continue here

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
let OracleCard = document.getElementById('oracle');
let PyhtonCard = document.getElementById('python');
// continue here

let AllArr = [HTMLcard, CSScard, JScard, OracleCard, PyhtonCard];
let frontArr = [HTMLcard, CSScard, JScard];
let backArr = [PyhtonCard];
let dataBaseArr = [OracleCard];
// continue adding to the above arrays

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
  this.rate;
  Cards.allCourses.push(this);
  saveTols();
}//End constructor

Cards.allCourses = [];

let html = new Cards('html','../img/HTML.png');
let css = new Cards('css','../img/CSS.png');

/********************************* Html Card *************************************/

// Buy:

function BuyCourse(buttonId, linkId, object){

  let BuyBtn = document.getElementById(buttonId);
  let Link = document.getElementById(linkId);

  BuyBtn.addEventListener('click', function () {

    object.buy = true;
    // add to profile page
    alert('Thanks for Buying');
    this.style.display = 'none';
    Link.style.display = 'block';

  });
};

BuyCourse('html-button','html-course',html);
BuyCourse('css-button','css-course',css);


// fav:
function Fav(favId, Object){

  let Fav = document.getElementById(favId);

  Fav.addEventListener('click', function (e) {

    Object.fav = e.target.checked;
  });
}

Fav('html-fav',html);
Fav('css-fav',css);


// rate:

function Rate(rateButtonId, sliderId, Object){

  let Rate = document.getElementById(rateButtonId);
  let Slider = document.getElementById(sliderId);
  
  Rate.addEventListener('click', function(){
  
    let Range = document.getElementById('html-range');
    Object.rate = parseInt(Range.value);
    alert('Thanks for rating');
    this.style.display = 'none';
    Slider.style.display = 'none';
  });

}

Rate('html-rate-button','html-rating-slider',html);
Rate('css-rate-button','css-rating-slider',css);


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





