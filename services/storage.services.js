'use strict'
var page = 0
var maxPages = 1
const RESULTS_PER_PAGE = 5

function saveBooksToLocalStorage(books) {
  localStorage.setItem('books', JSON.stringify(books))
}

function getBooksFromLocalStorage() {
  const books = JSON.parse(localStorage.getItem('books'))
  if (books.length === 0) {
    var booksDef = [
      {
        id: 'bg4j78',
        title: 'The Adventure of Lori Ipsi',
        price: 120,
        imgUrl: 'lori-ipsi.jpg',
        info: 'An exciting adventure of Lori Ipsi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 102,
      },
      {
        id: 'mk7d92',
        title: 'The Mystery of the Hidden Cave',
        price: 150,
        imgUrl: 'hidden-cave.jpg',
        info: 'A thrilling mystery of a hidden cave. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.7,
        countReview: 87,
      },
      {
        id: 'kl5a11',
        title: 'Journey to the Ancient Ruins',
        price: 135,
        imgUrl: 'ancient-ruins.jpg',
        info: 'A journey to explore ancient ruins. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.6,
        countReview: 56,
      },
      {
        id: 'qp9v56',
        title: 'The Secret of the Lost City',
        price: 140,
        imgUrl: 'lost-city.jpg',
        info: 'Uncover the secrets of the lost city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.8,
        countReview: 142,
      },
      {
        id: 'dr3x45',
        title: 'The Enchanted Forest Chronicles',
        price: 130,
        imgUrl: 'enchanted-forest.jpg',
        info: 'Chronicles of the enchanted forest. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.4,
        countReview: 99,
      },
      {
        id: 'tw8z34',
        title: 'The Quest for the Golden Treasure',
        price: 160,
        imgUrl: 'jpg/golden-treasure.jpg',
        info: 'A quest for the legendary golden treasure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.9,
        countReview: 74,
      },
      {
        id: 'bg5j78',
        title: 'The Return of the King',
        price: 125,
        imgUrl: 'return-king.jpg',
        info: 'The epic conclusion to the saga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 88,
      },
      {
        id: 'mk6d92',
        title: 'The Secret of the Pharaoh',
        price: 140,
        imgUrl: 'pharaoh-secret.jpg',
        info: 'An archaeological mystery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.7,
        countReview: 92,
      },
      {
        id: 'kl7a11',
        title: 'The Lost World',
        price: 130,
        imgUrl: 'lost-world.jpg',
        info: 'Exploring an unknown world. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.6,
        countReview: 67,
      },
      {
        id: 'qp8v56',
        title: 'The Hidden Fortress',
        price: 145,
        imgUrl: 'hidden-fortress.jpg',
        info: 'Defending the hidden fortress. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.8,
        countReview: 115,
      },
      {
        id: 'dr4x45',
        title: 'The Forbidden Island',
        price: 135,
        imgUrl: 'forbidden-island.jpg',
        info: 'Adventures on the forbidden island. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.4,
        countReview: 78,
      },
      {
        id: 'tw9z34',
        title: "The Dragon's Lair",
        price: 170,
        imgUrl: 'dragons-lair.jpg',
        info: 'Facing the dragon in its lair. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.9,
        countReview: 91,
      },
      {
        id: 'bg1j78',
        title: 'The Valley of Shadows',
        price: 110,
        imgUrl: 'valley-shadows.jpg',
        info: 'Journey through the valley of shadows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.3,
        countReview: 64,
      },
      {
        id: 'mk2d92',
        title: "The Pirate's Treasure",
        price: 150,
        imgUrl: 'pirates-treasure.jpg',
        info: "Hunting for the pirate's treasure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 4.6,
        countReview: 82,
      },
      {
        id: 'kl3a11',
        title: 'The Haunted Mansion',
        price: 140,
        imgUrl: 'haunted-mansion.jpg',
        info: 'Exploring the haunted mansion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 77,
      },
      {
        id: 'qp4v56',
        title: "The Guardian's Quest",
        price: 130,
        imgUrl: 'guardians-quest.jpg',
        info: 'The quest of the guardian. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.7,
        countReview: 95,
      },
      {
        id: 'dr5x45',
        title: 'The Ice Kingdom',
        price: 155,
        imgUrl: 'ice-kingdom.jpg',
        info: 'Adventures in the ice kingdom. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.4,
        countReview: 84,
      },
      {
        id: 'tw6z34',
        title: 'The Magic Sword',
        price: 160,
        imgUrl: 'magic-sword.jpg',
        info: 'The quest for the magic sword. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.8,
        countReview: 88,
      },
      {
        id: 'bg7j78',
        title: 'The Phantom Ship',
        price: 130,
        imgUrl: 'phantom-ship.jpg',
        info: 'Sailing on the phantom ship. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.3,
        countReview: 71,
      },
      {
        id: 'mk8d92',
        title: 'The Royal Heir',
        price: 140,
        imgUrl: 'royal-heir.jpg',
        info: 'The story of the royal heir. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 83,
      },
      {
        id: 'kl9a11',
        title: 'The Secret Garden',
        price: 135,
        imgUrl: 'secret-garden.jpg',
        info: 'Discovering the secret garden. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.6,
        countReview: 72,
      },
      {
        id: 'qp0v56',
        title: 'The Time Traveler',
        price: 145,
        imgUrl: 'time-traveler.jpg',
        info: 'Adventures of the time traveler. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.7,
        countReview: 90,
      },
      {
        id: 'dr1x45',
        title: 'The Wandering Knight',
        price: 150,
        imgUrl: 'wandering-knight.jpg',
        info: 'The tales of the wandering knight. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.4,
        countReview: 79,
      },
      {
        id: 'tw2z34',
        title: "The Wizard's Spellbook",
        price: 160,
        imgUrl: 'wizards-spellbook.jpg',
        info: "The magic of the wizard's spellbook. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 4.9,
        countReview: 85,
      },
      {
        id: 'bg3j78',
        title: "The Yeti's Lair",
        price: 120,
        imgUrl: 'yetis-lair.jpg',
        info: 'The hunt for the yeti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 76,
      },
      {
        id: 'mk4d92',
        title: 'The Zodiac Prophecy',
        price: 155,
        imgUrl: 'zodiac-prophecy.jpg',
        info: 'Unraveling the zodiac prophecy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.6,
        countReview: 81,
      },
      {
        id: 'kl5a11',
        title: 'The Ancient Scrolls',
        price: 135,
        imgUrl: 'ancient-scrolls.jpg',
        info: 'The secrets of the ancient scrolls. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.5,
        countReview: 68,
      },
      {
        id: 'qp6v56',
        title: 'The Hidden Temple',
        price: 140,
        imgUrl: 'hidden-temple.jpg',
        info: 'Exploring the hidden temple. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.8,
        countReview: 94,
      },
      {
        id: 'dr7x45',
        title: 'The Mystic River',
        price: 130,
        imgUrl: 'mystic-river.jpg',
        info: 'Journey along the mystic river. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.4,
        countReview: 80,
      },
      {
        id: 'tw8z34',
        title: "The Warrior's Path",
        price: 160,
        imgUrl: 'warriors-path.jpg',
        info: 'The path of the warrior. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4.9,
        countReview: 93,
      },
    ]
    saveBooksToLocalStorage(booksDef)

    return booksDef
  }

  return books
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

function paginateBooks(books) {
  const startIndex = page * RESULTS_PER_PAGE
  const endIndex = startIndex + RESULTS_PER_PAGE
  maxPages = Math.ceil(books.length / RESULTS_PER_PAGE)
  return books.slice(startIndex, endIndex)
}

function getBooks(title = null, info = null, price = null, reviews = null, rating = null) {
  var books = getBooksFromLocalStorage()

  books = filterBooksByTitle(books, title)
  books = filterBooksByInfo(books, info)
  books = filterBooksByPrice(books, price)
  books = filterBooksByReviews(books, reviews)
  books = filterBooksByRating(books, rating)
  renderFilterCount(books.length)

  if (page >= maxPages) {
    page = maxPages - 1
  }
  return paginateBooks(books)
}

function renderFilterCount(count) {
  document.querySelector('.filter-count').textContent = 'Count filter result: ' + count
}

function getBook(id) {
  var indexBook = getBooksFromLocalStorage().findIndex((book) => book.id === id)
  return getBooks()[indexBook]
}

function addBook(title, price, imgUrl, info, rating = 0, countReview = 0) {
  var books = getBooksFromLocalStorage()
  var id = generateId()
  books.push({ id, title, price, imgUrl, info, rating, countReview })
  saveBooksToLocalStorage(books)
}

function updateBook(id, title, price, imgUrl, info) {
  var books = getBooksFromLocalStorage()
  var indexBook = books.findIndex((book) => book.id === id)
  books[indexBook].title = title
  books[indexBook].price = price
  books[indexBook].imgUrl = imgUrl
  books[indexBook].info = info
  saveBooksToLocalStorage(books)
}

function removeBook(id) {
  var books = getBooksFromLocalStorage()
  var indexBook = books.findIndex((book) => book.id === id)
  books.splice(indexBook, 1)
  saveBooksToLocalStorage(books)
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

function pageUp() {
  if (page < maxPages - 1) {
    page += 1
  } else page = 0
  renderBooks()
}

function pageDown() {
  if (page > 0) {
    page -= 1
  } else page = maxPages - 1
  renderBooks()
}
