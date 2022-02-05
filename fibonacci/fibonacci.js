const three_output_data = document.getElementById('three_output')
const three_preparation_button = document.getElementById('three_preparation_data')
const three_input = document.getElementById('three_screen_input')

const fibonacci = (num) => {
  if( num < 2 ) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

three_preparation_button.addEventListener('click',
  ()=>three_output_data.innerText = fibonacci(three_input.value))
