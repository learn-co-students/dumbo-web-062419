
// console.log("hello from line 4")

function buttonClicked(){

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => console.log(response) || response.json())
    .then(dogObject => console.log(dogObject))

  // const promise = fetch("https://dog.ceo/api/breeds/image/random")

  // // console.log(promise)
  // promise.then(function(response){
  //   // console.log(response)
  //   console.log("fetch is done")
  //   response.json().then(function(thing){
  //     console.log(thing)
  //   })
  // })
  // promise.catch()

  // console.log("dfskjhsdfkjh")

  // console.log("fetch is about to get sent")

  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then(function(response){
  //     return response.json()
  //   }).then(function(data){
  //     console.log(data)
  //   })



  // console.log(dogObject)

}

document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("hello-button")

  button.addEventListener("click", buttonClicked)

  // console.log("hello from line 15")

})

// console.log("hello from line 20")
