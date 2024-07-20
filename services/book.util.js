'use strict'

function generateId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const digits = '0123456789'

  let id = ''

  for (let i = 0; i < 4; i++) {
    const randomLetterIndex = Math.floor(Math.random() * letters.length)
    id += letters[randomLetterIndex]
  }
  for (let i = 0; i < 4; i++) {
    const randomDigitIndex = Math.floor(Math.random() * digits.length)
    id += digits[randomDigitIndex]
  }

  return id
}
