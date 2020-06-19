document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);

    const deleteDiv = getElement("#below-list");
    const deleteButton = createElement("button");
    deleteButton.textContent = "Delete All";
    deleteButton.setAttribute("type", "button");
    deleteDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", handleDeleteClick);

});

const handleFormSubmit = function(event) {
event.preventDefault();
    const stepLog = getElement("#step-log");
    const listItem = createElement("li");
    const steps = createElement("div");
    const date = createElement("div");
    steps.setAttribute("id", "steps");
    date.setAttribute("id", "date")
    steps.textContent = `Steps: ${event.target.steps.value}`;
    date.textContent = `${event.target.date.value}`;
    stepLog.appendChild(listItem);
    listItem.appendChild(steps);
    listItem.appendChild(date);
    resetForm();
};

const getElement = function(identifier) {
    return document.querySelector(identifier);
} 

const createElement = function(element) {
    return document.createElement(element);
};

const resetForm = function() {
    getElement("#new-item-form").reset();
};

const handleDeleteClick = function() {
    document.querySelectorAll("li").forEach(log => log.remove());
};