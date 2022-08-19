
import allPlans from "./allPlans.js"

const homeContainer = document.querySelector(".anchor");

function makeHomeView() {
    fetch("http://localhost:8080/plans")
    .then(res => res.json())
    .then(plans => {
        makeHomeViewFromJSON(plans);
    })
}

function makeHomeViewFromJSON(plans) {
    homeContainer.innerHTML = allPlans(plans);
}

makeHomeView();