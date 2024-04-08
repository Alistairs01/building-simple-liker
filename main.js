// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// grab the element
let simpleLikes = document.querySelectorAll(".like-glyph");
// iterating over the hearts using forEach
simpleLikes.forEach(setLike => {
  // set hearts that are supposed to be empty
  setLike.textContent = EMPTY_HEART;
// invoke the server callback
  mimicServerCall().then(() => {

  })
  .catch((error) => {
    let errorShow = document.querySelector("#modal-message");
    errorShow.textContent = error;
  });
  // create the event listener
  setLike.onclick = (e) => {
    if (e.target.textContent === EMPTY_HEART) {
      e.target.textContent = FULL_HEART
      e.target.classList.add("activated-heart");
    }else {
      e.target.textContent = EMPTY_HEART
      e.target.classList.remove("activated-heart");
    }
    // grab the element with for hiding 
    let hidingModal = document.querySelector(".hidden");
    // remove the class name hidden 
    hidingModal.classList.remove("hidden");
    // add back the hidden modal after 3 seconds 
     setTimeout(() => {
      hidingModal.classList.add("hidden");
     },3000);
  };
});



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
