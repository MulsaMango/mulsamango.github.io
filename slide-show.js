let pageNumber = 0

const pages = [
  {copy:"Customer Service/Engagement Officer"},
  {copy:"Health Promotion Officer"},
  {copy:"UX Intern"},
  {copy:'Digital Marketing Intern'},
  {copy:'Project Officer'},
  {copy:'Research Assistant'},
  {copy:'Program Coordinator'},
  {copy:'Got something better in mind? <a href="mailto:tulsadaley@gmail.com">Email Me!</a>'}
]



const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('.open-to #role-title')
const slideTag = document.querySelector(".slide-show")

const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }
    updateSection()
}

// const random = function () {
//   pageNumber = Math.floor (Math.random() * pages.length)
  
//   updateSection()
// }

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
}

nextTag.addEventListener('click', function() {
  next()
})

previousTag.addEventListener('click', function() {
  previous()
})

// randomTag.addEventListener('click', function() {
//   random()
// })


document.addEventListener("keyup", function (event){
  console.log(event)
  
  if (event.key === 'ArrowRight') {
    next()
  }
  
  if (event.key === 'ArrowLeft') {
    previous()
  }
  
})

