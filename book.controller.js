'use strict'

var books = [
  { id: 'bg4j78', title: 'The Adventure of Lori Ipsi', price: 120, imgUrl: 'lori-ipsi.jpg' },
  { id: 'mk7d92', title: 'The Mystery of the Hidden Cave', price: 150, imgUrl: 'hidden-cave.jpg' },
  { id: 'kl5a11', title: 'Journey to the Ancient Ruins', price: 135, imgUrl: 'ancient-ruins.jpg' },
  { id: 'qp9v56', title: 'The Secret of the Lost City', price: 140, imgUrl: 'lost-city.jpg' },
  { id: 'dr3x45', title: 'The Enchanted Forest Chronicles', price: 130, imgUrl: 'enchanted-forest.jpg' },
  { id: 'tw8z34', title: 'The Quest for the Golden Treasure', price: 160, imgUrl: 'golden-treasure.jpg' },
]

function onInit() {
  renderBooks()
}
function getBooks(gFilterBy = null) {
  return books.slice()
}

function renderBooks() {
  const elBooks = document.querySelector('.book-container')
  const strHTMLs = books.map((book, idx) => {
    return `<tr> 
              <td>${book.title}</td>
              <td>$${book.price}</td>
              <td class="actions">
                <button onclick="onShowDetails('${book.id}')" >Read</button>
                <button onclick="onAddOrUpdateBook('${book.id}', 'price')" >Update</button>
                <button onclick="onRemoveBook('${book.id}')" >Delete</button>
              </td>
            </tr>`
  })
  elBooks.innerHTML = strHTMLs.join('')
}
