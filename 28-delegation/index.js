
document.addEventListener("DOMContentLoaded", function(){

  let counter = 1;

  const tacoList = document.getElementById("items")
  const tacoButton = document.getElementById("taco")

  tacoList.addEventListener("click", function(event){
    // console.log(event.target)
    // console.log(event.target.parentElement)

    // console.log(event.target)
    // console.log(event.currentTarget)
    // console.log(event.target)
    // console.log(event.target.className)
    console.log(event.path)
    // if (event.target.classList.contains("js-delete-taco")){
    //   // event.target.parentElement.remove()
    // }

    console.log(event.target.dataset)
    if (event.target.dataset.isDeleteButton) {
      console.log("got me")
    }

    // console.log("dsfjkhsd")

    // leave it alone
  })

  tacoButton.addEventListener("click", function(){

    tacoList.innerHTML += `<li class="taco item">
        <span>🌮</span>
        <button data-id=${ counter++ } data-is-delete-button="true" class="js-delete-taco pretty-button">&times;</button>
      </li>`

    const allTacoButtons = tacoList.querySelectorAll(".delete-taco")
    /*
    // console.log(allTacoButtons)
    const justAddedTacoButton = allTacoButtons[allTacoButtons.length - 1]
    // console.log("taco added")
    // console.log(justAddedTacoButton)
    justAddedTacoButton.addEventListener("click", function(){
      // console.log("hello I was clicked and evertyhhgin is greate")
    })
    tacoList.innerHTML += ""
    */
  })

})