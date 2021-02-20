"use strict";

var pageNumber = 0;
var pages = [{
  copy: "Customer Service/Engagement Officer"
}, {
  copy: "Health Promotion Officer"
}, {
  copy: "UX Intern"
}, {
  copy: 'Digital Marketing Intern'
}, {
  copy: 'Project Officer'
}, {
  copy: 'Research Assistant'
}, {
  copy: 'Program Coordinator'
}, {
  copy: 'Got something better in mind? <a href="mailto:tulsadaley@gmail.com">Email Me!</a>'
}];
var nextTag = document.querySelector('footer img.next');
var previousTag = document.querySelector('footer img.prev');
var outputTag = document.querySelector('.open-to #role-title');
var slideTag = document.querySelector(".slide-show");

var next = function next() {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

var previous = function previous() {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
}; // const random = function () {
//   pageNumber = Math.floor (Math.random() * pages.length)
//   updateSection()
// }


var updateSection = function updateSection() {
  outputTag.innerHTML = pages[pageNumber].copy;
};

nextTag.addEventListener('click', function () {
  next();
});
previousTag.addEventListener('click', function () {
  previous();
}); // randomTag.addEventListener('click', function() {
//   random()
// })

document.addEventListener("keyup", function (event) {
  console.log(event);

  if (event.key === 'ArrowRight') {
    next();
  }

  if (event.key === 'ArrowLeft') {
    previous();
  }
});