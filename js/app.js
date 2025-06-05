// find out button element
const rsvpBtn = document.getElementById("rsvp-btn");

// add our event listener
rsvpBtn.addEventListener("click", handleShowForm);

function handleShowForm(e) {
  e.preventDefault();
  const form = document.querySelector("form");
  form.style.display = "flex";
  hideHero();
}

function hideHero() {
  document.querySelector(".hero").style.display = "none";
}

function handleHideInputs(e){
  e.preventDefault();
  document.getElementById("attending-inputs").style.display = "none"
}


function handleShowInputs(e){
  e.preventDefault();
  document.getElementById("attending-inputs").style.display = "flex"
}


document.get

