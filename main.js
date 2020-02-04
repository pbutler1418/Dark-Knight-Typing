// const DOMAIN = `https://data.cityofchicago.org/api/odata/v4/x2n5-8w5q`
// const key = `PPhGxIh8x9w9odkeGqMlWek8N`
// var soda = axios.get('../lib/soda-js');
// console.log(response)
// // const crimeInput = document.querySelector('input')
// // let input = crimeInput.value
let startButton = document.querySelector(`button`)
let yesButton = document.querySelector(`.yes`)
let object = document.querySelector('Object')
let start = document.querySelector('start')
let firstScreen = document.querySelector('.firstScreen')
let random = Math.floor(Math.random() * 8) 
let secondScreen = document.querySelector('.secondScreen')
  

const crime = () => {
  response = axios.get("https://data.cityofchicago.org/resource/ijzp-q8t2.json", app_token = "PPhGxIh8x9w9odkeGqMlWek8N")
    .then(response = (object) => {
      let crime = (object.data[random].primary_type)
      let location = (object.data[random].block)
      console.log(`There's some kind of ${crime} at ${location}`)
  })
}
  

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

const hideFirst = () => {
  if (firstScreen.style.display === "none") {
    firstScreen.style.display = "block";
  } else {
    firstScreen.style.display = "none";
  }
  }
const showSecond = () => {
  if (secondScreen.style.display = "none") {
    secondScreen.style.display = "flex";
  }
}

startButton.addEventListener('click', function () {
  showDiv();
  hideDiv();
})

yesButton.addEventListener(`click`, function () {
  console.log(crime());
  showSecond();
  hideFirst();
})