'use strict'

function onInit() {
  renderBooks()
}

var books = [
  { id: 'bg4j78', title: 'The Adventure of Lori Ipsi', price: 120, imgUrl: 'lori-ipsi.jpg' },
  { id: 'mk7d92', title: 'The Mystery of the Hidden Cave', price: 150, imgUrl: 'hidden-cave.jpg' },
  { id: 'kl5a11', title: 'Journey to the Ancient Ruins', price: 135, imgUrl: 'ancient-ruins.jpg' },
  { id: 'qp9v56', title: 'The Secret of the Lost City', price: 140, imgUrl: 'lost-city.jpg' },
  { id: 'dr3x45', title: 'The Enchanted Forest Chronicles', price: 130, imgUrl: 'enchanted-forest.jpg' },
  { id: 'tw8z34', title: 'The Quest for the Golden Treasure', price: 160, imgUrl: 'golden-treasure.jpg' },
]

function getBooks(gFilterBy = null) {
  return books.slice()
}

function addBook(title, price, imgUrl) {
  var id = generateId()
  books.push({ id, title, price, imgUrl })
}
function updateBook(id, title, price, imgUrl) {
  var indexBook = books.findIndex((book) => book.id === id)
  books[indexBook].title = title
  books[indexBook].price = price
  books[indexBook].imgUrl = imgUrl
}

function removeBook(id) {
  var indexBook = books.findIndex((book) => book.id === id)
  books.splice(indexBook, 1)
  renderBooks()
}

function renderBooks() {
  const elBooks = document.querySelector('.book-container')
  const strHTMLs = getBooks().map((book) => {
    return `<tr> 
              <td>${book.title}</td>
              <td>$${book.price}</td>
              <td class="actions">
                <button onclick="onShowDetails('${book.id}')" >Read</button>
                <button onclick="onAddOrUpdateBook('${book.id}')" >Update</button>
                <button onclick="onRemoveBook('${book.id}')" >Delete</button>
                </td>
                </tr>`
  })
  elBooks.innerHTML = strHTMLs.join('')
}

function onRemoveBook(id) {
  removeBook(id)
}

function onAddOrUpdateBook(id = null) {
  document.querySelector('.book-details').showModal()
  if (id === null) {
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook()">Add new book</button>`
    document.querySelector('.book-name-txt').value = ''
    document.querySelector('.book-price-txt').value = ''
    document.querySelector('.book-img-url-txt').value = ''
  } else {
    var copyBooks = getBooks()
    var indexBook = copyBooks.findIndex((book) => book.id === id)
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook('${id}')">Update book details</button>`
    document.querySelector('.book-name-txt').value = copyBooks[indexBook].title
    document.querySelector('.book-price-txt').value = copyBooks[indexBook].price
    document.querySelector('.book-img-url-txt').value = copyBooks[indexBook].imgUrl
  }
}

function addNewBook(id = null) {
  var title = document.querySelector('.book-name-txt').value
  var price = document.querySelector('.book-price-txt').value
  var imgUrl = document.querySelector('.book-img-url-txt').value
  console.log(price)

  if (id === null) {
    addBook(title, price, imgUrl)
  } else {
    updateBook(id, title, price, imgUrl)
  }
  renderBooks()
}

function closeModal() {
  document.querySelector('.book-details').close()
}
