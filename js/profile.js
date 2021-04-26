
let image = null;
let nameCourse = null;

let purRender = document.getElementById('purchases');
let favRender = document.getElementById('favourites');

function renderCourses(){
  let vr=null;
    for(let i = 0; i <50; i++){
      vr=document.createElement('h1');
   favRender.appendChild(vr);
   vr.textContent=5;
 }   

    }

    renderCourses();
      // if (Cards.allCourses[i].buy){

    //   image = document.createElement('img');
    //   purRender.appendChild(image);
    //   image.setAttribute('src', Cards.allCourses[i].src)
      
    //   nameCourse = document.createElement('p');
    //   purRender.appendChild(nameCourse);
    //   nameCourse.textContent = `${Cards.allCourses[i].name}`;
    // } else { 
    //     nameCourse = document.createElement('h2');
    //     purRender.appendChild(nameCourse);
    //     nameCourse.textContent = "You haven't purchase any courses";
    // }

    //  if(Cards.allCourses[i].fav){
    //     image = document.createElement('img');
    //     favRender.appendChild(image);
    //   image.setAttribute('src', Cards.allCourses[i].src)
      
    //   nameCourse = document.createElement('p');
    //   favRender.appendChild(nameCourse);
    //   nameCourse.textContent = `${Cards.allCourses[i].name}`; 
    //  } else {
    //     nameCourse = document.createElement('h2');
    //     favRender.appendChild(nameCourse);
    //     nameCourse.textContent = "You haven't choose any favourite courses";
    //  }
    
    // }   
// }

