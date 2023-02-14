const form = document.querySelector("form");
form.addEventListener("submit", handleSubmitForm);


function handleSubmitForm(event) {
  event.preventDefault();
  const answer1 = document.querySelector("#answer1").value;
  const answer2 = document.querySelector("#answer2").value;
  const answer3 = document.querySelector("#answer3").value;
  const answer4 = document.querySelector("#answer4").value;
  const answer5 = document.querySelector("#answer5").value;

  let reactCount = 0;
  let symfonyCount = 0;
  let integratorCount = 0;

  if (answer1 === "front-end") {
    reactCount++;
  }
  if (answer1 === "back-end") {
    symfonyCount++;
  }

  if (answer2 === "oui") {
    reactCount++;
  }
  if (answer3 === "non") {
    reactCount++;
  }
  if (answer4 === "oui") {
    reactCount++;
  }

  if (answer3 === "oui") {
    symfonyCount++;
  }
  if (answer5 === "non") {
    symfonyCount++;
  }

  if (answer2 === "non") {
    integratorCount++;
  }
  if (answer5 === "oui") {
    integratorCount++;
  }

  let specialization;
  if (reactCount >= symfonyCount && reactCount >= integratorCount) {
    specialization = "React";
  } else if (symfonyCount >= reactCount && symfonyCount >= integratorCount) {
    specialization = "Symfony";
  } else {
    specialization = "Intégrateur web";
  }

let txtAnim = document.querySelector(".title_response_text");

new Typewriter(txtAnim, {
  loop: false,
})

.typeString('Aaah Je vois... ')
.pauseFor(300)
.typeString("Aaah D'accord... ")
.pauseFor(1000)
.typeString(` : ${specialization} !`)
.start();
}







