
// Get the modal
var modal = document.getElementById("storyModal");

// Get the button that opens the modal
var btn = document.getElementById("storyBtn");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal 
span.onclick = function(event) {
  var closeBtn = event.target
  closeBtn.closest("#storyModal").style.display = "none";
}


// Get the modal
var secondModal = document.getElementById("alterationModal");

// Get the button that opens the modal
var btn = document.getElementById("alterationBtn");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  secondModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal <-------------------- this not working
span.onclick = function() {
  secondModal.style.display = "none";
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Get the button:
mybutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwUCKszbKH-y8UqJKhRRkFplTdEPpXr1NRxOlEtWQ/dev'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    alert("Thanks for signing up!")
    form.innerHTML = ""
    var heading = document.querySelector("#mailing-list")
    heading.innerHTML = ""
})
