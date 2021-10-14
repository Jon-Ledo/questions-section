// USING SELECTORS INSIDE THE ELEMENT
const questions = document.querySelectorAll('.question')

questions.forEach(question => {
  const btn = question.querySelector('.question-btn')
  btn.addEventListener('click', () => {
    // Close unselected panels if they're open
    questions.forEach(article => {
      if(article !== question) {  
        article.classList.remove('show-text')
      }
    })

    // Toggle the currently selected button
    question.classList.toggle('show-text')
  })
})

// TRAVERSING THE DOM
// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     // Get the parent using property names
//     // console.log(e.currentTarget.parentElement.parentElement)
//     // Get the parent using the closest method
//     const parentElement = e.target.closest('.question')
//     parentElement.classList.toggle('show-text')
//   })
// })