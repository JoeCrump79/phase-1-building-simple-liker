// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal')
errorModal.hidden = true
const hearts = document.getElementsByClassName('like-glyph')
for (const element of hearts) {
  element.addEventListener('click', () => {
    if (element.classList.contains ('activated-heart')){
      //if the heart is not empty 
      element.classList.remove('activated-heart')
      element.textContent = EMPTY_HEART
    }
    else {
      mimicServerCall()
      .then(()=>{
        element.classList.add('activated-heart')
      element.textContent = FULL_HEART
      }) 
      .catch((error) => {
        errorModal.hidden = false
        errorModal.textContent = error
        setTimeout(() => {
          errorModal.hidden = true
        },3000)
      })
    }
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
