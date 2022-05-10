/* 
1. Selecting Elements
2. Event Listener
3. Basic Validation

*/

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

btn.addEventListener('click', function (e) {
  e.preventDefault() // Removed submit default behavior

  if(title.value == '' && author.value == '' && year.value == '') {
    alert('Bhaii Akta kichu denn!')
  } else {
    const newRow = document.createElement('tr')

    // creating element for table
    const newTitle = document.createElement('th')
    newTitle.innerHTML = title.value
    newRow.appendChild(newTitle) 
  
    const newAuthor = document.createElement('th')
    newAuthor.innerHTML = author.value
    newRow.appendChild(newAuthor) 
  
    const newYear = document.createElement('th')
    newYear.innerHTML = year.value
    newRow.appendChild(newYear) 

    bookList.appendChild(newRow)
  }

})