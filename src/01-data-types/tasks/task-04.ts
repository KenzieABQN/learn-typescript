/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBN: number
    title: String
    author: String
    pages: number
    category: String
    availability: boolean
}

const book1: Book = {
    ISBN: 1421523213,
    title: `Solanin`,
    author: `Inio Asano`,
    pages: 432,
    category: `Psychological Horror`,
    availability: false
}
const book2: Book = {
    ISBN: 1620100002,
    title: `Scott Pilgrim's Precious Little Life`,
    author: `Bryan Lee O' Malley`,
    pages: 300,
    category: `Action Comedy`,
    availability: true
}
const book3: Book = {
    ISBN: 1975399684,
    title: `The Guy She Was Interested In Wasn't A Guy At All`,
    author: `Sumiko Arai`,
    pages: 300,
    category: `Romance`,
    availability: true
}

console.log(`title: ${book1.title}`)
console.log(`ISBN: ${book1.ISBN}`)
console.log(`author: ${book1.author}`)
console.log(`number of pages: ${book1.pages}`)
console.log(`category: ${book1.category}`)
console.log(`is available: ${book1.availability}`)

console.log()

console.log(`title: ${book2.title}`)
console.log(`ISBN: ${book2.ISBN}`)
console.log(`author: ${book2.author}`)
console.log(`number of pages: ${book2.pages}`)
console.log(`category: ${book2.category}`)
console.log(`is available: ${book2.availability}`)

console.log()

console.log(`title: ${book3.title}`)
console.log(`ISBN: ${book3.ISBN}`)
console.log(`author: ${book3.author}`)
console.log(`number of pages: ${book3.pages}`)
console.log(`category: ${book3.category}`)
console.log(`is available: ${book3.availability}`)
