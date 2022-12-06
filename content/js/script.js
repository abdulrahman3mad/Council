let freeTrialsPlans = document.querySelector(".free-trials");
let NonTrialsPlans = document.querySelector(".non-free-trials");
let toggleCheckBox = document.querySelector("#plan-type");

toggleCheckBox.addEventListener("click", function () {
    freeTrialsPlans.classList.toggle("active")
    NonTrialsPlans.classList.toggle("active")
    Array.from(NonTrialsPlans.querySelectorAll(".plan")).forEach((plan)=> plan.classList.add("wow"))
})
