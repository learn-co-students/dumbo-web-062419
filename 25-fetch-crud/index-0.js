
// const headers = {
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// }
// const spiceGirl = {
//   name: "Geri Halliwell",
//   adjective: "Ginger"
// }
// const config = {
//   method: "POST",
//   headers: headers,
//   body: JSON.stringify(spiceGirl)
// }


// fetch("http://localhost:3000/spice-girls/", config)

function liRightClicked(event, id){
  event.preventDefault()

  const li = event.currentTarget;

  fetch("http://localhost:3000/to-do-items/" + id, {
    method: "DELETE"
  }).then(res => res.json())
    .then(() => {
      li.remove()
    })
}



function checkboxClicked(event){
  const id = event.target.dataset.toDoId

  const done = event.target.checked;

  fetch("http://localhost:3000/to-do-items/" + id, {
    "method": "PATCH",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      done
    })
  })

  console.log(event.target.parentNode)

  const li = document.querySelector("#to-do-list-item-" + id)

  if (done)
    li.classList.add("done")
  else
    li.classList.remove("done")


}


// ## Read
// 1. When DOMContentLoaded event happens
// 2. Make GET /to-do-items fetch happen
// 3. Slap li's on the DOM!

function makeLiTagOutOfData(oneToDoItemWorthOfData) {
  const li = document.createElement("li")
    li.className = "item"
    li.id = "to-do-list-item-" + oneToDoItemWorthOfData.id

    if (oneToDoItemWorthOfData.done)
      li.classList.add("done")

    li.innerHTML = `
      <input data-to-do-id="${ oneToDoItemWorthOfData.id }" class="js-checkbox" id="to-do-item-${ oneToDoItemWorthOfData.id }" type="checkbox" ${ oneToDoItemWorthOfData.done ? "checked" : "" } />
      <label for="to-do-item-${ oneToDoItemWorthOfData.id }" class="js-title middle aligned content">${ oneToDoItemWorthOfData.title }</label>
    `
    const checkbox = li.querySelector(".js-checkbox")
    // checkbox.dataset.toDoId = oneToDoItemWorthOfData.id
    checkbox.addEventListener("click", checkboxClicked)

    li.addEventListener("contextmenu", function(event){ 
      liRightClicked(event, oneToDoItemWorthOfData.id)
    })

  return li
}

function slapLisOnTheDOM(data){

  const ol = document.querySelector("#to-do-items")

  // console.log(ol)
  data.forEach((toDoItem) => {
    

    ol.append(makeLiTagOutOfData(toDoItem))
  })
}

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/to-do-items/")
    .then(response => response.json())
    .then(slapLisOnTheDOM)

//     ## Create
// 1. When Click on the Add button event happens
// 2. Make POST /to-do-items fetch
// 3. Slap the single to-do item on the DOM!

  const form = document.querySelector("#new-to-do")
  // const input = document.querySelector("#new-to-do input[type='text']")
  

  form.addEventListener("submit", function(event){

    event.preventDefault()

    const form = event.target
    const title = form.title.value
    form.reset()

    fetch("http://localhost:3000/to-do-items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: title
      })
    }).then(response => response.json())
      .then(toDo => {
        const ol = document.querySelector("#to-do-items")
        const li = makeLiTagOutOfData(toDo)
        ol.append(li)
      })



    

    // grab the UL
    // create the LI
    // populate this with the new info
    // slap it on the dom

  })

})











