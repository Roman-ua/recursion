const second_output_data = document.getElementById('second_output')
const second_preparation_button = document.getElementById('second_preparation_data')
const input = document.getElementById('second_screen_input')
let initial = [0]
const calculateData = (input_value) => {
  if(initial[initial.length -1] < input_value) {
    initial.push(initial[initial.length - 1] + 1)
    calculateData(input_value)
  }else {
    second_output_data.innerText = `${initial}`
  }
}
second_preparation_button.addEventListener('click', ()=>calculateData(input.value))

