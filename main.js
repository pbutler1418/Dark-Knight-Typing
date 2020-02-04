// const DOMAIN = `https://data.cityofchicago.org/api/odata/v4/x2n5-8w5q`
// const key = `PPhGxIh8x9w9odkeGqMlWek8N`
// var soda = axios.get('../lib/soda-js');
// console.log(response)
// // const crimeInput = document.querySelector('input')
// // let input = crimeInput.value
let button = document.querySelector(`button`)
let demo = document.querySelector(`firstScreen`)
let object = document.querySelector('Object')
let id = document.querySelector('start')
let random = Math.floor(Math.random() * 8) 

button.addEventListener('click', function () {
  console.log(crime());
  
  }
  
  );

const crime = () => {
  response = axios.get("https://data.cityofchicago.org/resource/ijzp-q8t2.json", app_token = "PPhGxIh8x9w9odkeGqMlWek8N")
    .then(response = (object) => {
      let crime = (object.data[random].primary_type)
      let location = (object.data[random].block)
      console.log(`There's some kind of ${crime} at ${location}`)
  })
}
  
// const block = () => {
//   response = axios.get("https://data.cityofchicago.org/resource/ijzp-q8t2.json", app_token = "PPhGxIh8x9w9odkeGqMlWek8N")
//     .then(response = (object) => {
//     console.log(object.data[random].block)
//   })
//   }

// function firstPage() {
//   id.classList.toggle("firstScreen")
// }
