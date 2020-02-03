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

button.addEventListener('click', function firstPage(){
  }
  
  );

const crimeData = () => {
  response = axios.get("https://data.cityofchicago.org/resource/ijzp-q8t2.json", app_token = "PPhGxIh8x9w9odkeGqMlWek8N")
  
  return response.then(function () {
    console.log(response)
  }
  )
}

function firstPage() {
  id.classList.toggle("firstScreen")
}
