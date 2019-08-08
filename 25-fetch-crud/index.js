
function slapOneToDoOnTheDOM(toDoItem) {
  const ol = document.getElementById("to-do-items")

  // console.log(toDoItem)
  const li = document.createElement("li")
  li.className = "item"
  if (toDoItem.done) {
    li.classList.add("done")
  }

  li.innerHTML = `
    <input id="to-do-item-1" type="checkbox" ${ toDoItem.done ? "checked" : ""  } />
    <label for="to-do-item-1" class="js-title middle aligned content">${ toDoItem.title }</label>
  `
  ol.append(li)
}


function slapToDosOnTheDOM(toDoItemArray){
  // console.log(ol)
  toDoItemArray.forEach(slapOneToDoOnTheDOM)
}

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("new-to-do")
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const newToDoTitle = event.target.title.value


    event.target.reset()

    fetch("http://localhost:3000/to-do-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        title: newToDoTitle,
        done: false
      })
    }).then(res => res.json())
      .then(slapOneToDoOnTheDOM)

  })

  fetch("http://localhost:3000/to-do-items")
    .then(function(response){
      return response.json()
    }).then(slapToDosOnTheDOM)
})












