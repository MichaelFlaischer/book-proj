'use strict'

function renderBooks(updatedTitle = null, updatedInfo = null, updatedPrice = null, updatedReviews = null, updatedRating = null) {
  let books
  const elBooks = document.querySelector('.book-container')
  let filterTitle
  let filterText
  let minPrice
  let minReviews
  let minRating

  if (updatedTitle) {
    filterTitle = updatedTitle
    document.querySelector('.filterTitle').value = filterTitle
  } else {
    filterTitle = document.querySelector('.filterTitle').value
  }
  if (updatedInfo) {
    filterText = updatedInfo
    document.querySelector('.filterText').value = filterText
  } else {
    filterText = document.querySelector('.filterText').value
  }
  if (updatedPrice) {
    minPrice = updatedPrice
    document.querySelector('.minPrice').value = minPrice
  } else {
    minPrice = document.querySelector('.minPrice').value
  }
  if (updatedReviews) {
    minReviews = updatedReviews
    document.querySelector('.minReviews').value = minReviews
  } else {
    minReviews = document.querySelector('.minReviews').value
  }
  if (updatedRating) {
    minRating = updatedRating
    document.querySelector('.minRating').value = minRating
  } else {
    minRating = document.querySelector('.minRating').value
  }

  books = getBooks(filterTitle, filterText, minPrice, minReviews, minRating)

  let strHTMLs
  if (books.length !== 0) {
    strHTMLs = books
      .map((book) => {
        return `<tr> 
                <td>${book.title}</td>
                <td>$${book.price}</td>
                <td>${book.rating} ★</td>
                <td>${book.countReview} Reviews</td>
                <td class="actions">
                    <button onclick="onShowDetails('${book.id}')">Read</button>
                    <button onclick="onAddOrUpdateBook('${book.id}')">Update</button>
                    <button onclick="onRemoveBook('${book.id}')">Delete</button>
                </td>
            </tr>`
      })
      .join('')
  } else {
    strHTMLs = `<tr><td colspan="5"><h2>No matching books were found...</h2></td></tr>`
  }
  elBooks.innerHTML = strHTMLs
  updatePriceRanges()
}

function renderFilterCount(countBooks) {
  document.querySelector('.filter-count').textContent = 'Count filter result: ' + countBooks
}

function renderSearchUrl() {
  const updatedSearchParams = new URLSearchParams(window.location.search)
  var updatedTitle = updatedSearchParams.get('title')
  var updatedInfo = updatedSearchParams.get('info')
  var updatedPrice = updatedSearchParams.get('price')
  var updatedReviews = updatedSearchParams.get('rewiews')
  var updatedRating = updatedSearchParams.get('rating')

  renderBooks(updatedTitle, updatedInfo, updatedPrice, updatedReviews, updatedRating)
}
function onRemoveBook(id) {
  removeBook(id)
  renderBooks()
  showPopup('The book was removed successfully')
}

function onAddOrUpdateBook(id = null) {
  document.querySelector('.book-update').showModal()
  if (id === null) {
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook(event)">Add new book</button>`
    document.querySelector('.book-name-txt').value = null
    document.querySelector('.book-price-txt').value = null
    document.querySelector('.book-img-url-txt').value = null
    document.querySelector('.book-info-txt').value = null
    document.querySelector('.book-rating-txt').value = null
    document.querySelector('.book-count-review-txt').value = null
  } else {
    var book = getBook(id)
    document.querySelector('.add-btn').outerHTML = `<button class="add-btn" onclick="addNewBook(event,'${id}')">Update book details</button>`
    document.querySelector('.book-name-txt').value = book.title
    document.querySelector('.book-price-txt').value = book.price
    document.querySelector('.book-img-url-txt').value = book.imgUrl
    document.querySelector('.book-info-txt').value = book.info
  }
}

function addNewBook(event, id = null) {
  event.preventDefault()

  var valuesOk = true
  var title = document.querySelector('.book-name-txt').value
  var price = document.querySelector('.book-price-txt').value
  var imgUrl = document.querySelector('.book-img-url-txt').value
  var info = document.querySelector('.book-info-txt').value

  if (info.length === 0) {
    valuesOk = false
    showPopup('Info is required')
  }
  if (imgUrl.length === 0) {
    valuesOk = false
    showPopup('Image URL is required')
  }
  if (price.length === 0) {
    valuesOk = false
    showPopup('Price is required')
  }
  if (title.length === 0) {
    valuesOk = false
    showPopup('Title is required')
  }

  if (valuesOk) {
    if (id === null) {
      addBook(title, price, imgUrl, info)
      showPopup('The book was added successfully')
    } else {
      updateBook(id, title, price, imgUrl, info)
      showPopup('The book details were updated successfully')
    }
    closeModalUpdate()
  }
}

function closeModalUpdate() {
  document.querySelector('.book-update').close()
  renderBooks()
}

function closeModalDetails() {
  document.querySelector('.book-details').close()
  renderBooks()
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

function clearFilter() {
  document.querySelector('.filterTitle').value = ''
  document.querySelector('.filterText').value = ''
  document.querySelector('.minPrice').value = ''
  document.querySelector('.minReviews').value = ''
  document.querySelector('.minRating').value = ''
  page = 1
  renderBooks()
  showPopup('Filters were cleared')
}
function showPopup(message) {
  const popup = document.querySelector('.popup-message')
  popup.textContent = message
  popup.style.display = 'block'
  setTimeout(() => {
    popup.style.opacity = 1
  }, 10)

  setTimeout(() => {
    popup.style.opacity = 0
    setTimeout(() => {
      popup.style.display = 'none'
    }, 500)
  }, 3000)
}

function updatePriceRanges() {
  document.querySelector('.below-80-count').textContent = countBooksBelow80()
  document.querySelector('.between-80-200-count').textContent = countBooksBetween80And200()
  document.querySelector('.above-200-count').textContent = countBooksAbove200()
}

function toggleFilter() {
  const filterContainer = document.querySelector('.filter-container')
  filterContainer.classList.toggle('hidden')
}

function renderFilterCount(count) {
  document.querySelector('.filter-count').textContent = 'Count filter result: ' + count
}
