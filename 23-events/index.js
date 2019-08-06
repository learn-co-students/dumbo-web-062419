
const tacoButton = document.getElementById("taco")
const ul = document.getElementById("blobs")

function deleteMe(event){
  event.preventDefault()
  // console.log(this)
  event.target.remove()
}

tacoButton.addEventListener("click", function(){

  // create a list item
  const li = document.createElement("li")

  // add a friggin taco
  li.innerText = "🌮"

  li.addEventListener("contextmenu", deleteMe)
  li.addEventListener("click", itemClicked)

  // appending the list item to the list
  ul.append(li)

})

const lis = document.querySelectorAll("li")

function itemClicked(event){
  event.target.innerText = "🥥"
}


function doThisToEachLiPlease(item){
  item.addEventListener("contextmenu", deleteMe)
  item.addEventListener("click", itemClicked)
}

lis.forEach(doThisToEachLiPlease)

// lis.addEventListener("click", function(){

// })










