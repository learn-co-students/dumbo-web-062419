

function slapToDoOnTheDOM(toDoItem){
  const li = document.createElement("li")
  li.id = "list-item-" + toDoItem.id
  li.className = "item"
  li.innerHTML = `
  <input class="js-checkbox" id="to-do-item-${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : "" }/>
  <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>`
  // li.querySelector(".js-delete-button").addEventListener("click", destroyToDo)
  // li.querySelector(".js-edit-button").addEventListener("click", editToDo)
  return li
}

function slapToDosOnTheDOM(toDoListElement, data) {
  toDoListElement.append(...data.map(slapToDoOnTheDOM))
}

function fetchToDos(element) {
  return fetch("http://localhost:3000/to-do-items")
    .then(res => res.json())
}

function createToDo(event, toDoListElement){
  event.preventDefault();
  const title = event.target.title.value;
  if (!title.replace(/\s/g, "").length) {
    event.target.classList.add("error")
    return
  }
  event.target.reset()
  event.target.classList.remove("error")
  fetch("http://localhost:3000/to-do-items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      title: title
    })
  }).then(response => response.json())
  .then(data => {
    toDoListElement.append(slapToDoOnTheDOM(data))
  })
}

document.addEventListener("DOMContentLoaded", function(){
  const toDoListElement = document.getElementById("to-do-items");
  fetchToDos().then(data => slapToDosOnTheDOM(toDoListElement, data))
  const newForm = document.getElementById("new-to-do")
  newForm.addEventListener("submit", event => createToDo(event, toDoListElement))
})