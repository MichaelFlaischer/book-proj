'use strict'

function onInit() {
  renderSearchUrl()
}

function filterBooksByTitle(books, title) {
  if (title !== '' && title !== null) {
    books = books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()))
    updateURLParam('title', title)
  } else {
    updateURLParam('title', '')
  }
  return books
}

function filterBooksByInfo(books, info) {
  if (info !== '' && info !== null) {
    books = books.filter((book) => book.info.toLowerCase().includes(info.toLowerCase()))
    updateURLParam('info', info)
  } else {
    updateURLParam('info', '')
  }
  return books
}

function filterBooksByPrice(books, price) {
  if (price !== null && price != 0) {
    books = books.filter((book) => book.price > parseFloat(price))
    updateURLParam('price', price)
  } else {
    updateURLParam('price', '')
  }
  return books
}

function filterBooksByReviews(books, reviews) {
  if (reviews !== null && reviews != 0) {
    books = books.filter((book) => book.countReview > parseInt(reviews))
    updateURLParam('reviews', reviews)
  } else {
    updateURLParam('reviews', '')
  }
  return books
}

function filterBooksByRating(books, rating) {
  if (rating !== null && rating != 0) {
    books = books.filter((book) => book.rating > parseFloat(rating))
    updateURLParam('rating', rating)
  } else {
    updateURLParam('rating', '')
  }
  return books
}

function countBooksBelow80() {
  var books = getBooksFromLocalStorage()
  return books.filter((book) => book.price < 50).length
}

function countBooksBetween80And200() {
  var books = getBooksFromLocalStorage()
  return books.filter((book) => book.price >= 50 && book.price <= 150).length
}

function countBooksAbove200() {
  var books = getBooksFromLocalStorage()
  return books.filter((book) => book.price > 150).length
}

function updateURLParam(key, value) {
  const searchParams = new URLSearchParams(window.location.search)
  if (value) {
    searchParams.set(key, value)
  } else {
    searchParams.delete(key)
  }
  const newUrl = window.location.pathname + '?' + searchParams.toString()
  window.history.replaceState({}, '', newUrl)
}
