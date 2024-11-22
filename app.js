// script.js
const steps = document.querySelectorAll(".step");
const contents = document.querySelectorAll(".step-content");
const details = document.querySelectorAll(".step-detail")
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentStep = 0;

console.log(steps.length);

function updateStepper() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        step.classList.toggle("activated", index < currentStep);
    });
    contents.forEach((content, index) => {
        if (index < 4)
            content.classList.toggle("active", index === currentStep);
    });
    details.forEach((detail, index) => {
        detail.classList.toggle("active", index === currentStep)
    })

    prevButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === steps.length - 1;
    if (currentStep >= steps.length - 2) {
        nextButton.innerHTML = "Finish";
    } else {
        nextButton.innerHTML = "Next";
    }
}

prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStepper();
    }
});

nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepper();
    }
});

updateStepper();
