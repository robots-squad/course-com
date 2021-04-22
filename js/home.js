'use strict';

let imgIndex = 1;
rendershowImg(imgIndex);
function previous()
{
  rendershowImg(--imgIndex);
 // console.log(imgIndex+'Preeeeee');
}
function next()
{
  rendershowImg(++imgIndex);
  //console.log(imgIndex+'nexxxxx');
}


function rendershowImg(c)
{let slides =document.getElementsByClassName('myslider');
 // console.log(slides);
  if(c < 1){imgIndex= slides.length;}
  if(c>slides.length)
  { imgIndex=1;}
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display='none';

  }
  slides[imgIndex-1].style.display='block';
  //console.log(imgIndex+'lassssssssss');
}


