// script.js
const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const details = document.querySelectorAll(".step-detail")
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentStep = 0;

/**
 * Main functions
 */
const movementButtons = document.querySelector(".controls");
movementButtons.addEventListener("click", (event) => {
    if (event.target.classList.contains("movement-button")) {
        const action = event.target.dataset.button;
        switch (action) {
            case "prev":
                if (currentStep > 0) {
                    currentStep--;
                    updateStepper();
                    updateLinesBackward();
                }
                break;
            case "next":
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateStepper();
                    updateLinesForward();
                }
                break;
            default:
                console.error("Clicked button for unknown action:", action);
        }
        console.log(`Clicked button for action: ${action}`);
    }
})

function updateStepper() {
    updateSteps();
    updateStepDetails();
    updateButtons();
}

updateStepper();


/**
 * Helper functions
 */
function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
        step.classList.toggle("activated", index < currentStep);
        if (index < currentStep) {
            step.innerText = "✔"; // Checkmark
        } else if (index === currentStep) {
            step.innerText = index.toString(); // Reset to step number if not active
        }
    });
}

function updateLinesForward() {
    if (currentStep > 0 && currentStep < 4)
        lines[currentStep - 1].classList.toggle("activated");
}

function updateLinesBackward() {
    if (currentStep >= 0 && currentStep < 3)
        lines[currentStep].classList.toggle("activated");
}

function updateStepDetails() {
    details.forEach((detail, index) => {
        detail.classList.toggle("active", index === currentStep)
    })
}

function updateButtons() {
    prevButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === steps.length - 1;
    if (currentStep >= steps.length - 2) {
        nextButton.innerHTML = "Finish";
    } else {
        nextButton.innerHTML = "Next";
    }
}