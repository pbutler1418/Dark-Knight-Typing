// const DOMAIN = `https://data.cityofchicago.org/api/odata/v4/x2n5-8w5q`
// const key = `PPhGxIh8x9w9odkeGqMlWek8N`
// var soda = axios.get('../lib/soda-js');
// console.log(response)
// // const crimeInput = document.querySelector('input')
// // let input = crimeInput.value
let startButton = document.querySelector('button')
let yesButton = document.querySelector('.yes')
let answerButton = document.querySelector('.answer')
let object = document.querySelector('Object')
let start = document.querySelector('start')
let firstScreen = document.querySelector('.firstScreen')
let secondScreen = document.querySelector('.secondScreen')
let message = document.querySelector('.message')
let secondMessage = document.querySelector('.secondMessage')
let firstRound = document.querySelector('.firstRound')
let gameInput = document.querySelector('#blank')
let secondGameInput = document.querySelector('#secondBlank')
let prompt1 = document.querySelector(`.prompt1`)
let thirdScreen = document.querySelector(`.thirdScreen`)



// Access to the API Info
const crime = async () => {
  const response = await axios.get("https://data.cityofchicago.org/resource/ijzp-q8t2.json", app_token = "PPhGxIh8x9w9odkeGqMlWek8N")
  let random = Math.floor(Math.random() * 8)
  let crime = (response.data[random].primary_type)
  let location = (response.data[random].block)
  let prompt = `There's some kind of ${crime} at ${location}`
  return prompt
}

// Switch from "start" screen to "rules" screen
const hideDiv = () => {
  let x = document.querySelector(".start");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const showDiv = () => {
  if (firstScreen.style.display = "none") {
    firstScreen.style.display = "flex";
  }
}

startButton.addEventListener('click', function () {
  showDiv();
  hideDiv();
})

// Switch from "rules" screen to "round 1" screen.
const hideFirst = () => {
  if (firstScreen.style.display === "none") {
    firstScreen.style.display = "block";
  } else {
    firstScreen.style.display = "none";
  }
}
const showSecond = () => {
  if (secondScreen.style.display = "none") {
    secondScreen.style.display = "block";

  }
}

const hideSecond = () => {
  if (secondScreen.style.display === "none") {
    secondScreen.style.display = "block";
  } else {
    secondScreen.style.display = "none";
  }
}
const showThird = () => {
  if (thirdScreen.style.display = "none") {
    thirdScreen.style.display = "block";

  }
}
yesButton.addEventListener(`click`, async () => {
  hideFirst();
  showSecond();
  let text = await crime()
  message.innerHTML = `<h1 class = "prompt1">${text}</h1>`
})

// Round 1

answerButton.addEventListener(`click`, async () => {
  let input = gameInput.value;
  let h1 = document.querySelector('.prompt1');
  console.log(h1.textContent)
  if (input === h1.textContent) {
    alert("Success! On to the next one!");
    hideSecond();
    showThird();
    let text = await crime()
    secondMessage.innerHTML = `<h1 class = "prompt2">${text}</h1>`
  } else {
    alert("Thats not it! Try again!");
  }
})

//  Round 2

answerButton.addEventListener(`click`,  () => {
  let input = secondGameInput.value;
  let h2 = document.querySelector('.prompt2');
  console.log(h2.textContent)
  if (input === h2.textContent) {
    alert("Success! On to the next one!");
    // hideSecond();
    // showThird();
  //   let text = await crime()
  //   secondMessage.innerHTML = `<h1 class = "prompt2">${text}</h1>`
  } else {
    alert("Thats not it! Try again!");
  }
})
