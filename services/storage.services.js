'use strict'

var books = [
  {
    id: 'bg4j78',
    title: 'The Adventure of Lori Ipsi',
    price: 120,
    imgUrl: 'lori-ipsi.jpg',
    info: 'An exciting adventure of Lori Ipsi.',
    rating: 4.5,
    countReview: 102,
  },
  {
    id: 'mk7d92',
    title: 'The Mystery of the Hidden Cave',
    price: 150,
    imgUrl: 'hidden-cave.jpg',
    info: 'A thrilling mystery of a hidden cave.',
    rating: 4.7,
    countReview: 87,
  },
  {
    id: 'kl5a11',
    title: 'Journey to the Ancient Ruins',
    price: 135,
    imgUrl: 'ancient-ruins.jpg',
    info: 'A journey to explore ancient ruins.',
    rating: 4.6,
    countReview: 56,
  },
  {
    id: 'qp9v56',
    title: 'The Secret of the Lost City',
    price: 140,
    imgUrl: 'lost-city.jpg',
    info: 'Uncover the secrets of the lost city.',
    rating: 4.8,
    countReview: 142,
  },
  {
    id: 'dr3x45',
    title: 'The Enchanted Forest Chronicles',
    price: 130,
    imgUrl: 'enchanted-forest.jpg',
    info: 'Chronicles of the enchanted forest.',
    rating: 4.4,
    countReview: 99,
  },
  {
    id: 'tw8z34',
    title: 'The Quest for the Golden Treasure',
    price: 160,
    imgUrl: 'golden-treasure.jpg',
    info: 'A quest for the legendary golden treasure.',
    rating: 4.9,
    countReview: 74,
  },
]

function getBooks(gFilterBy = null) {
  return books.slice()
}

function getBook(id) {
  var indexBook = books.findIndex((book) => book.id === id)
  return books[indexBook]
}

function addBook(title, price, imgUrl, info, rating = 0, countReview = 0) {
  var id = generateId()
  books.push({ id, title, price, imgUrl, info, rating, countReview })
}

function updateBook(id, title, price, imgUrl, info) {
  var indexBook = books.findIndex((book) => book.id === id)
  books[indexBook].title = title
  books[indexBook].price = price
  books[indexBook].imgUrl = imgUrl
  books[indexBook].info = info
}

function removeBook(id) {
  var indexBook = books.findIndex((book) => book.id === id)
  books.splice(indexBook, 1)
}

function generateId() {
  return Math.random().toString(36).substr(2, 9)
}
