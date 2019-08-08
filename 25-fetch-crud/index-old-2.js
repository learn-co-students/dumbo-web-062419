
function deleteToDo(event){
  event.preventDefault();
  const id = event.currentTarget.dataset.id;
  fetch(`http://localhost:3000/to-do-items/${ id }`, {
    method: "DELETE"
  }).then(function(){
    event.currentTarget.remove()
  })

}


function updateToDo(event){
  const id = event.target.dataset.id

  //load
  fetch(`http://localhost:3000/to-do-items/${ id }`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ "done": event.target.checked })
  }).then(response => response.json())
  .then(function(data){
    const li = document.querySelector("#list-item-" + data.id)
    if (data.done) {
      li.classList.add("done")
    } else {
      li.classList.remove("done")
    }
  })
}


function slapOneToDoOnTheDOM(ol, toDoItem){
  const li = document.createElement("li");
  // console.log("list-item-" + toDoItem.id)
  li.id = "list-item-" + toDoItem.id // this helps us get it back in the update
  li.dataset.id = toDoItem.id
  li.className = "item" // for CSS
  if (toDoItem.done) {
    li.classList.add("done")
  }
  // console.log(toDoItem)
  li.innerHTML = `
    <input data-id="${ toDoItem.id }" class="js-checkbox" id="to-do-item-${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : "" } />
    <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>
  `
  const checkbox = li.querySelector(".js-checkbox")
  // checkbox.dataset.id = toDoItem.id
  checkbox.addEventListener("change", updateToDo)
  li.addEventListener("contextmenu", deleteToDo)
  ol.append(li)
}

function slapToDosOnTheDOM(listItems){
  const ol = document.querySelector("#to-do-items")
  listItems.forEach(function(listItem){ 
    slapOneToDoOnTheDOM(ol, listItem)
  })
}

document.addEventListener("DOMContentLoaded", function(){
  const promise = fetch("http://localhost:3000/to-do-items")
  promise.then(response => response.json())
         .then(slapToDosOnTheDOM)


  const form = document.querySelector("#new-to-do")
  const ol = document.querySelector("#to-do-items")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    fetch("http://localhost:3000/to-do-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Warm-in-Here": "true"
      },
      body: JSON.stringify({
        "title": form.title.value,
        "done": false
      })
    })
      .then(res => res.json())
      .then(data => slapOneToDoOnTheDOM(ol, data))
  })
}) 












