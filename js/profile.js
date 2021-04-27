
let image = null;
let href = null;

let purRender = document.getElementById('purchases');
let favRender = document.getElementById('favourites');

let hrefArr = ['https://youtu.be/6QAELgirvjs?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
'https://youtu.be/WZ2uqGkHoR0?list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7',
'https://youtu.be/ItYye9h_RXg?list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB',
 'https://youtu.be/aZ2gjTe4vLo',
'https://youtu.be/Apq8FuGNODM?list=PLF8OvnCBlEY25O_Ql0CrgQUAc5NVYkWF2',
'https://youtu.be/9OPP_1eAENg?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u',
'https://youtu.be/rfscVS0vtbw',
'https://youtu.be/CTxrpmY1At8?list=PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz',
'https://youtu.be/18c3MTX0PK0?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb']
/****************** test / local storage get ************************** */

// let Cards = {
//   allCourses: [
//     {name: 'html',fav: true, buy: true, src: '../img/HTML.png'},
//     {name: 'css',fav: true, buy: true, src: '../img/CSS.png'}

//   ]
// }
let data=[];
function getLs() {
   data = JSON.parse(localStorage.getItem('courses'));
}
getLs();

/************************************************************************ */

let emptyCourseBuy = document.createElement('h2');
    purRender.appendChild(emptyCourseBuy);
    emptyCourseBuy.textContent = "You haven't purchase any courses";

let emptyCoursefav = document.createElement('h2');
  favRender.appendChild(emptyCoursefav);
  emptyCoursefav.textContent = "You haven't choose any favourite courses";

 function renderCourses(){

    for(let i = 0; i <data.length; i++){
      if (data[i].buy){

        emptyCourseBuy.style.display= 'none';

        href = document.createElement('a');
        href.setAttribute('href',hrefArr[i]);
        href.setAttribute('target','_blank')

        image = document.createElement('img');
        href.appendChild(image);
        image.setAttribute('src', data[i].src);

        purRender.appendChild(href);
        
      }

     if(data[i].fav){

        emptyCoursefav.style.display= 'none'

        image = document.createElement('img');
        favRender.appendChild(image);
        image.setAttribute('src', data[i].src)
     } 
    
  }   
 }
renderCourses();
