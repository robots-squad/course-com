'use strict';

const feedbackForm = document.getElementById('feedbackForm');
const feedbacks = document.getElementById('feedbacks');


function Feed(feedback) {
    this.feedback = feedback;

    Feed.allFeeds.push(this);
    saveToLs();
}

Feed.allFeeds = [];


function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    const feedback = event.target.feedback.value;

    new Feed(feedback);

    renderFeedBack();
}


function saveToLs() {

    let arrStr = JSON.stringify(Feed.allFeeds);

    localStorage.setItem('feedSaved', arrStr);

}


function gettingFeedFormLs() {
    let data = localStorage.getItem('feedSaved');

    console.log(data);
    let order = JSON.parse(data);
    console.log(order);
    if (order !== null) {
        Feed.allFeeds = order;
    }
    renderFeedBack();

}


function renderFeedBack() {
    feedbacks.textContent = '';

    for (let i = 0; i < Feed.allFeeds.length; i++) {
        const feedli = document.createElement('li');

        feedli.textContent = `${Feed.allFeeds[i].feedback} `;
        feedbacks.appendChild(feedli);
    }
}




feedbackForm.addEventListener('submit', handleSubmit);

gettingFeedFormLs();