// dbl-click projects to open case studies
// rotating Iam

let formSubmit = document.querySelector("#formButton");

// formSubmit.addEventListener("click", function (event) {
//   setTimeout(closeWindow, 100);
// });

function closeWindow() {
  window.close();
}

let Iam = document.querySelector("#iAmCycle");
let IamButton = document.querySelector("#iAmCycleButton");

IamButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    Iam.innerHTML = " Interested in Aerospace Engineering";
  } else if (randomNumber === 2) {
    Iam.innerHTML = " Interested in Cybersecurity";
  } else {
    Iam.innerHTML = " Interested in Motorsports Engineering";
  }
});

let caseStudyNav = document.querySelector("#navProjectsH1");

caseStudyNav.addEventListener("dblclick", function () {
  console.log("double clicked");
  window.location.href = "caseStudies.html";
});
