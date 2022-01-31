const default_data = document.getElementById('data')
const output_data = document.getElementById('output')
const preparation_button = document.getElementById('preparation_data')
const array = [1,[2, 7, 8],[3, 4, [5, [6, 7]],]];

default_data.insertAdjacentText('beforeend', JSON.stringify(array))

const preparationArray = (arr) => {
  for (let elem of arr) {
    if(typeof elem === 'object') {
      preparationArray(elem)
    }else {
      output_data.insertAdjacentText('beforeend', JSON.stringify(elem))
    }
  }
}

preparation_button.addEventListener('click', () => !output_data.textContent && preparationArray(array))
