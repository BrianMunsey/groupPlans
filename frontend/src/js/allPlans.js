export default function allPlans(plans) {
    return `
    ${plans.map(plan => {
        return`
        <div class="plan-card"
            <h1>${plan.name}</h1>
            <p>${plan.details}</p>
            <p>${plan.date}</p>
        </div>

        `}).join("")}
    `;
}