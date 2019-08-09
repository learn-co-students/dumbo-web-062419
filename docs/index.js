
function nukeFromOrbit(event){
  const id = event.target.dataset.id
  fetch(`https://to-do-list-git-rich-die-prying.herokuapp.com/to_do_items/${ id }`, {
    method: "DELETE"
  }).then(res => res.json())
    .then(data => {
      const li = document.querySelector("#to-do-" + id)
      li.remove()
    })
}

function slapDonenessOnTheDOM(toDo){
  // console.log(toDo)
  const li = document.querySelector("#to-do-" + toDo.id)
  // console.log(li.classList.contains("done"))

  if (toDo.done)
    li.classList.add("done")
  else
    li.classList.remove("done")
}


function updateToDoDoneness(event){

  const id = event.target.dataset.id
  const done = event.target.checked

  //optimistic

  fetch(`https://to-do-list-git-rich-die-prying.herokuapp.com/to_do_items/${ id }`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json", //sending
      "Accept": "application/json" //recieving
    },
    body: JSON.stringify({
      done: done,
      // fork: true,
      // numberOfTimesSaved: 29
    })
  }).then(response => response.json())
    .then(slapDonenessOnTheDOM)

  //optimistic  

}


function slapOneToDoOnTheDOM(toDoItem) {
  const ol = document.getElementById("to-do-items")

  // console.log(toDoItem)
  const li = document.createElement("li")
  li.className = "item"
  li.id = "to-do-" + toDoItem.id
  if (toDoItem.done) {
    li.classList.add("done")
  }

  li.innerHTML = `
    <input id="to-do-item-${ toDoItem.id }" data-id="${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : ""  } />
    <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>
    <button class="delete" data-id="${ toDoItem.id }">&times;</button>
  `

  const checkbox = li.querySelector("[type=checkbox]")
  const button = li.querySelector(".delete")
  // checkbox.dataset.id = toDoItem.id

  checkbox.addEventListener("click", updateToDoDoneness)
  button.addEventListener("click", nukeFromOrbit)

  ol.append(li)

}


function slapToDosOnTheDOM(toDoItemArray){
  toDoItemArray.forEach(slapOneToDoOnTheDOM)
}

function createToDo(event){
  event.preventDefault()
  const newToDoTitle = event.target.title.value


  event.target.reset()

  fetch("https://to-do-list-git-rich-die-prying.herokuapp.com/to_do_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      title: newToDoTitle,
      done: false,
      // banana: "🍌",
      // potato: [{}, {}, NaN, undefined, null, []]
    })
  }).then(res => res.json())
    .then(slapOneToDoOnTheDOM)

}

document.addEventListener("DOMContentLoaded", function(){


  const form = document.getElementById("new-to-do")
  form.addEventListener("submit", createToDo)

  fetch("https://to-do-list-git-rich-die-prying.herokuapp.com/to_do_items")
    .then(function(response){
      return response.json()
    }).then(slapToDosOnTheDOM)


})












