function addTodo() {
  let input = document.getElementById("todoInput");
  let todoText = input.value.trim();
  if (todoText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
        <input type="text" class="edit-input" value="${todoText}" onblur="saveEdit(this)" readonly>
        <div>
            <button class="edit-btn" onclick="editTodo(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        </div>
    `;

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

function editTodo(button) {
  let li = button.parentElement.parentElement;
  let input = li.querySelector(".edit-input");
  input.removeAttribute("readonly");
  input.focus();
}

function saveEdit(input) {
  input.setAttribute("readonly", true);
}

function deleteTodo(button) {
  let li = button.parentElement.parentElement;
  li.remove();
}
