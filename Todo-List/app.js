let data = document.querySelector(".data");
let btn = document.querySelector(".add-fields");

btn.addEventListener("click", () => {
  addTask();
});

data.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let outputContainer = document.querySelector(".output-container");
  let clearBtn = document.querySelector(".clear-items");

  let form = document.createElement("form");
  let label = document.createElement("label");
  let input = document.createElement("input");
  input.type = "checkbox";
  let taskText = document.createElement("p");
  let icons = document.createElement("div");

  let taskValue = data.value.trim();

  if (taskValue === "") {
    return;
  }

  label.appendChild(input);
  label.appendChild(taskText);
  label.appendChild(icons);
  form.appendChild(label);
  outputContainer.appendChild(form);

  outputContainer.classList.add("output-container");
  label.classList.add("custom-checkbox");
  icons.classList.add("icons");
  taskText.innerHTML = taskValue;
  icons.innerHTML = `
  <button style="color: red" class="icon-btn" id="delete-icon"><i class="fa-solid fa-trash"></i></button>
  <button style="color:green" class="icon-btn" id="edit-icon"><i class="fa-solid fa-pencil"></i></button>
  `;
  clearBtn.style.display = "block";

  clearBtn.addEventListener("click", () => {
    outputContainer.innerHTML = "";
    clearBtn.style.display = "none";
  })

  let deleteField = icons.querySelector("#delete-icon");
  let editField = icons.querySelector("#edit-icon");

  deleteField.addEventListener("click", (event) => {
    event.preventDefault();
    form.remove();
  });

  editField.addEventListener("click", (event) => {
    event.preventDefault();

    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskText.innerHTML;
    editInput.classList.add("edit-input");

    label.replaceChild(editInput, taskText);

    editInput.focus();

    editInput.addEventListener("blur", () => {
      taskText.innerHTML = editInput.value;
      label.replaceChild(taskText, editInput);
    });

    editInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        taskText.innerHTML = editInput.value;
        label.replaceChild(taskText, editInput);
      }
    });
  });

  input.addEventListener("change", () => {
    if (input.checked) {
      taskText.style.color = "gray";
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "black";
    }
  });

  data.value = "";
}
