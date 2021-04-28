/************************** get name and show it instead of the login *****************************/

let userName;
function loginPopUp() { 

  // log in button:
  let btn = document.getElementById('login');
  // name input:
  let name = document.getElementById('name');
  // head parent
  let parent =document.getElementById('head-buttons');
  // pop up window
  let popUp = document.getElementById('login-popUp');
  popUp.style.display = 'block';

  btn.addEventListener('click',function (e) {

    let span = document.createElement('span');
    parent.appendChild(span);

    userName = name.value;
    if(userName){
      span.textContent = `Welcome ${userName}`;
      popUp.style.display = 'none'
      saveLS();
    }
    
  });
}

if(!getLS()){
  loginPopUp()
}else{

  let parent =document.getElementById('head-buttons');
  let span = document.createElement('span');
  parent.appendChild(span);
  span.textContent = `Welcome ${getLS()}`;
}


function saveLS() {  
  localStorage.setItem('name',(userName));
}

function getLS() { 
  let data = localStorage.getItem('name');
  if(data){
    return data;
  }else{
    return ''
  }
}



