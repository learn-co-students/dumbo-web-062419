
// var introduce = function(){
//   console.log(this)
//   return `Hey, I'm ${ this.fullName }`
// }

// const annie = {
//   fullName: "Anne Souza",
//   name: "Annie",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   introduce: introduce
// }

// const randy = {
//   fullName: "Randy Herasme",
//   name: "Randy",
//   introduce: introduce
// }

// randy.introduce()

// const thisIsAFunction = randy.introduce
// console.log(thisIsAFunction())

// console.log(thisIsAFunction === randy.introduce)

// console.log(annie.introduce())
// console.log(graham.introduce())
// console.log(randy.introduce())

// console.log(annie.introduce === graham.introduce)
// console.log(annie.introduce() === graham.introduce())


class ButtonThing {

  constructor(color){
    this.color = color

    // console.log(this)
    // console.log(this.color)

    this.button = document.createElement("button");
    this.button.innerText = `blort ${ this.color }`

    this.onButtonClick = this.onButtonClick.bind(this)

    this.button.addEventListener("click", this.onButtonClick)

    document.body.append(this.button)
  }

  onButtonClick() {
    // console.log("will it blend")
    console.log(this)
    document.body.style.backgroundColor = this.color;
  }

}

// // var thing1 = new ButtonThing("#f00");
// // var thing1 = new ButtonThing("#90f");
// // var thing1 = new ButtonThing("#0f0");
// // var thing1 = new ButtonThing("#00f");

["#f00", "#90f", "#0f0", "#00f"].forEach(function(color){
  // console.log(this)
  new ButtonThing(color);
})









// function add(oneNumber){
//   return (function(otherNumber) {
//     return oneNumber + otherNumber
//   })
// }



// scores = [1,6,9,4,8,2,6,8,99]



// console.log(Math.max.apply(null, scores))


// // function potato(){
// //   return [1,2]
// // }

// // function doStuff(banana, potato) {
// //   console.log(banana)
// //   console.log(potato)
// //   console.log(this)
// // }

// // doStuff.apply(potato(), [2,6])

// // // doStuff("secondThing", 555555)


// // // console.log(doStuff)
// // // console.dir(doStuff)

// // // console.log(doStuff.name)


// function doStuff(banana, potato) {
//   console.log(banana)
//   console.log(potato)
//   console.log(this)
// }



// var returnValue = doStuff.bind({ foo: "bar" })

// console.log(returnValue)


// returnValue("hellop", 555)
// returnValue("hop", 9999)





























