'use strict';
if(!getLS()){
   location.replace('../index.html') 
}

//////////////////////////////////////////////////////////////////////////////////////////
const feedbackForm = document.getElementById('feedbackForm');
const feedbacks = document.getElementById('feedbacks');
const textarea = document.getElementById('textarea');
const textName = document.getElementById('name');
//////////////////////////////////////////////////////////////////////////////////////////
function Feed(feedback, name, date) {
    this.feedback = feedback;
    this.name = name;
    this.data = date;
    Feed.allFeeds.push(this);
    saveToLs();
}
Feed.allFeeds = [];
//////////////////////////////////////////////////////////////////////////////////////////
function handleSubmit(event) {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const name = event.target.name.value;
    let b = new Feed(feedback, name, gettingFeedbackDate());
    renderFeedBack();
}
//////////////////////////////////////////////////////////////////////////////////////////
function saveToLs() {
    let arrStr = JSON.stringify(Feed.allFeeds);
    localStorage.setItem('feedSaved', arrStr);
}
//////////////////////////////////////////////////////////////////////////////////////////
function gettingFeedFormLs() {
    let data = localStorage.getItem('feedSaved');
    if (JSON.parse(data) !== null) {
        Feed.allFeeds = JSON.parse(data);
    }
    renderFeedBack();
}
//////////////////////////////////////////////////////////////////////////////////////////
function renderFeedBack() {
    feedbacks.textContent = '';
    textarea.value = '';
    textName.value='';

    let count = 0;

    let feedText = null;
    let feedName = null;
    for (let i = Feed.allFeeds.length - 1; i >= 0; i--) {
        
        feedText = document.createElement('p');
        feedText.setAttribute('class','feedText');
        feedName = document.createElement('p');
        feedName.setAttribute('class','feedName');
        count++;

        feedText.textContent = `${Feed.allFeeds[i].feedback}`;
        feedName.textContent = `${Feed.allFeeds[i].name}  (${Feed.allFeeds[i].data}) :`;
        feedbacks.appendChild(feedName);
        feedbacks.appendChild(feedText);

        if (count == 7) {
            break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
function gettingFeedbackDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    
    let date = d.toDateString();
    date += " " + time;
    return date;
}
//////////////////////////////////////////////////////////////////////////////////////////
feedbackForm.addEventListener('submit', handleSubmit);
gettingFeedFormLs();


/****************** get user name**********************/

function getLS() { 
    let data = localStorage.getItem('name');
    if(data != null){
        return data;
    }
    return false
}
  
  if(getLS()){
    let parent =document.getElementById('head-buttons');
    let span = document.createElement('span');
    parent.appendChild(span);
    span.textContent = `Welcome ${getLS()}`;
}