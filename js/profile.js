
let image = null;
let href = null;

let purRender = document.getElementById('purchases');
let favRender = document.getElementById('favourites');

let hrefArr = ['https://youtu.be/ibPDmf83z_k', ]
/****************** test / local storage get ************************** */

let Cards = {
  allCourses: [
    {name: 'html',fav: true, buy: true, src: '../img/HTML.png'},
    {name: 'css',fav: true, buy: true, src: '../img/CSS.png'}

  ]
}

/************************************************************************ */

let emptyCourseBuy = document.createElement('h2');
    purRender.appendChild(emptyCourseBuy);
    emptyCourseBuy.textContent = "You haven't purchase any courses";

let emptyCoursefav = document.createElement('h2');
  favRender.appendChild(emptyCoursefav);
  emptyCoursefav.textContent = "You haven't choose any favourite courses";

 function renderCourses(){

    for(let i = 0; i <Cards.allCourses.length; i++){
      if (Cards.allCourses[i].buy){

        emptyCourseBuy.style.display= 'none';

        href = document.createElement('a');
        href.setAttribute('href',hrefArr[i]);
        href.setAttribute('target','_blank')

        image = document.createElement('img');
        href.appendChild(image);
        image.setAttribute('src', Cards.allCourses[i].src);

        purRender.appendChild(href);
        
      }

     if(Cards.allCourses[i].fav){

        emptyCoursefav.style.display= 'none'

        image = document.createElement('img');
        favRender.appendChild(image);
        image.setAttribute('src', Cards.allCourses[i].src)
     } 
    
  }   
 }
renderCourses();
