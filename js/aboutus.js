'use strict';
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
    console.log(name);
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
    let count = 0;
    for (let i = Feed.allFeeds.length - 1; i >= 0; i--) {
        const feedli = document.createElement('li');
        count++;
        feedli.textContent = `${Feed.allFeeds[i].feedback} `;
        feedbacks.appendChild(feedli);
        if (count == 5) {
            break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
function gettingFeedbackDate() {
    let d = new Date();
    // const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // const monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    // let day = days[d.getDay()];
    // let month = monthNames[d.getMonth() + 1] ;
    // console.log(month);
    // console.log( day);
    // console.log(typeof d);
    let time = d.toLocaleTimeString();
    // let time = d.toTimeString();
    let date = d.toDateString();
    date += " " + time;
    return date;
}
//////////////////////////////////////////////////////////////////////////////////////////
feedbackForm.addEventListener('submit', handleSubmit);
gettingFeedFormLs();