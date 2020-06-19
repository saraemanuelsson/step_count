document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);

    const deleteDiv = document.querySelector("#below-list");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete All";
    deleteButton.setAttribute("type", "button");
    deleteDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", handleDeleteClick);

});

const handleFormSubmit = function(event) {
    console.log(event);
    
    event.preventDefault();
    const stepLog = document.querySelector("#step-log");
    const listItem = document.createElement("li");
    const steps = document.createElement("div");
    const date = document.createElement("div");
    steps.setAttribute("id", "steps");
    date.setAttribute("id", "date")
    steps.textContent = `Steps: ${event.target.steps.value}`;
    date.textContent = `${event.target.date.value}`;
    stepLog.appendChild(listItem);
    listItem.appendChild(steps);
    listItem.appendChild(date);
    resetForm();
};

const resetForm = function() {
    document.querySelector("#new-item-form").reset();
};

const handleDeleteClick = function() {
    document.querySelectorAll("li").forEach(log => log.remove());
};