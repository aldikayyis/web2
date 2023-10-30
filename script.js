const addActivityFieldInput = document.querySelector(
  ".add-activity-field-input"
);
const addActivityFieldButton = document.querySelector(
  ".add-activity-field-button"
);
const editActivityFieldButton = document.querySelector(
  ".edit-activity-field-button"
);
const listActivitiesItemContainer = document.querySelector(
  ".list-activities-item-container"
);

var indexOfElement = 0;

addActivityFieldButton.addEventListener("click", () => {
  const newElement = `
        <div class="list-activities-item">
            <p class="list-activities-item-text">${addActivityFieldInput.value}</p>
            <div class="list-activities-item-options">
                <div class="list-activities-item-options-button">
                    <i class="bx bx-check"></i>
                </div>
                <div class="list-activities-item-options-button list-activities-item-options-button-orange">
                    <i class="bx bx-edit-alt"></i>
                </div>
                <div class="list-activities-item-options-button list-activities-item-options-button-red">
                    <i class="bx bx-trash-alt"></i>
                </div>
            </div>
        </div>
    `;

  listActivitiesItemContainer.insertAdjacentHTML("beforeend", newElement);
  addActivityFieldInput.value = "";
});

editActivityFieldButton.addEventListener("click", () => {
  editActivityFieldButton.classList.add("button-none");
  addActivityFieldButton.classList.remove("button-none");

  listActivitiesItemContainer.children[indexOfElement].children[0].innerHTML =
    addActivityFieldInput.value;

  addActivityFieldInput.value = "";
});

listActivitiesItemContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("bx-trash-alt")) {
    const elementToRemove = event.target.closest(".list-activities-item");
    if (elementToRemove) {
      listActivitiesItemContainer.removeChild(elementToRemove);
    }
  }
  if (event.target.classList.contains("bx-check")) {
    const elementToCheck = event.target.closest(".list-activities-item");
    if (elementToCheck) {
      const pervInnerHtml = elementToCheck.querySelector(
        ".list-activities-item-text"
      ).innerHTML;
      elementToCheck.querySelector(
        ".list-activities-item-text"
      ).innerHTML = `<s>${pervInnerHtml}<s/>`;
    }
  }
  if (event.target.classList.contains("bx-edit-alt")) {
    editActivityFieldButton.classList.remove("button-none");
    addActivityFieldButton.classList.add("button-none");
    const elementToEdit = event.target.closest(".list-activities-item");
    if (elementToEdit) {
      const pervInnerHtml = elementToEdit.querySelector(
        ".list-activities-item-text"
      ).innerHTML;
      addActivityFieldInput.value = pervInnerHtml;
      const index = Array.from(listActivitiesItemContainer.children).indexOf(
        elementToEdit
      );
      indexOfElement = index;
    }
  }
});
