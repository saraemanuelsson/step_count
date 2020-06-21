document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);
    const deleteButton = getElement("#delete-all")
    deleteButton.addEventListener("click", handleDeleteClick);
});

const handleFormSubmit = function(event) {    
    event.preventDefault();
    const stepLog = getElement("#step-log");
    const listItem = createElement("li");
    const steps = createElement("div");
    const date = createElement("div");
    const stepType = createElement("div");
    steps.setAttribute("id", "steps-data");
    date.setAttribute("id", "date-data");
    stepType.setAttribute("id", "step-type-data")
    steps.textContent = `Steps: ${prettySteps(event.target.steps.value)}`;
    date.textContent = `${event.target.date.value}`;
    stepType.textContent = getCheckedType()
    stepLog.appendChild(listItem);
    listItem.appendChild(steps);
    listItem.appendChild(date);
    listItem.appendChild(stepType);
    resetForm();
};

const prettySteps = function(steps) {
    const numbersArray = steps.split("");
    let prettyNumber
    if (numbersArray.length > 6) {
        numbersArray.splice((-6), 0, ",");
        numbersArray.splice((-3), 0, ",");
        prettyNumber = numbersArray.join("");
        return prettyNumber;
    } else if (numbersArray.length > 3) {
        numbersArray.splice((-3), 0, ",");
        prettyNumber = numbersArray.join("");
        return prettyNumber;
    }else {
        return steps
    };
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

