'use strict'

function renderBooks() {
  const elBooks = document.querySelector('.book-container')
  const strHTMLs = getBooks().map((book) => {
    return `<tr> 
              <td>${book.title}</td>
              <td>$${book.price}</td>
              <td>${book.rating} ★</td>
              <td>${book.countReview} Reviews</td>
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
  renderBooks()
}

function onAddOrUpdateBook(id = null) {
  document.querySelector('.book-update').showModal()
  if (id === null) {
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook()">Add new book</button>`
    document.querySelector('.book-name-txt').value = ''
    document.querySelector('.book-price-txt').value = ''
    document.querySelector('.book-img-url-txt').value = ''
    document.querySelector('.book-info-txt').value = ''
    document.querySelector('.book-rating-txt').value = ''
    document.querySelector('.book-count-review-txt').value = ''
  } else {
    var book = getBook(id)
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook('${id}')">Update book details</button>`
    document.querySelector('.book-name-txt').value = book.title
    document.querySelector('.book-price-txt').value = book.price
    document.querySelector('.book-img-url-txt').value = book.imgUrl
    document.querySelector('.book-info-txt').value = book.info
  }
}

function addNewBook(id = null) {
  var title = document.querySelector('.book-name-txt').value
  var price = document.querySelector('.book-price-txt').value
  var imgUrl = document.querySelector('.book-img-url-txt').value
  var info = document.querySelector('.book-info-txt').value

  if (id === null) {
    addBook(title, price, imgUrl, info)
  } else {
    updateBook(id, title, price, imgUrl, info)
  }
  closeModalUpdate()
  renderBooks()
}

function closeModalUpdate() {
  document.querySelector('.book-update').close()
}

function closeModalDetails() {
  document.querySelector('.book-details').close()
}

function onShowDetails(id) {
  var bookModal = document.querySelector('.book-details')
  bookModal.showModal()
  var book = getBook(id)
  var imgUrl = document.querySelector('.book-img')
  imgUrl.innerHTML = `<img src="img/${book.imgUrl}" onerror="this.onerror=null; this.src='img/error.jpg';" alt="Book Image">`
  bookModal.querySelector('.book-name-txt').textContent = book.title
  bookModal.querySelector('.book-price-txt').textContent = `$${book.price}`
  bookModal.querySelector('.book-info-txt').textContent = book.info
  bookModal.querySelector('.book-rating-txt').textContent = `${book.rating} ★`
  bookModal.querySelector('.book-count-review-txt').textContent = `${book.countReview} Reviews`
}
