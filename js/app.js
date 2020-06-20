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
    const steptype = createElement("div");
    steps.setAttribute("id", "steps-data");
    date.setAttribute("id", "date-data");
    type.setAttribute("id", "step-type-data")
    steps.textContent = `Steps: ${event.target.steps.value}`;
    date.textContent = `${event.target.date.value}`;
    steptype.textContent = getCheckedType()
    stepLog.appendChild(listItem);
    listItem.appendChild(steps);
    listItem.appendChild(date);
    listItem.appendChild(steptype);
    resetForm();
};

const getCheckedType = function() {
    let checkedBoxValue
    if (getElement("#walking").checked) {
        checkedBoxValue = "Walking"
    } else if (getElement("#running").checked) {
        checkedBoxValue = "Running"
    } else if (getElement("#biking").checked) {
        checkedBoxValue = "Biking"
    };
    return checkedBoxValue;
};

// const getTypeFromRadio = function(radios, type) {
//     radios = document.querySelectorAll('type');
//     const checkedButton = radios.find((radio) => {radio.checked});
//     return checkedButton.value;
// };

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