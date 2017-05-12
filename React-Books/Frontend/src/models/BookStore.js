import {observable, action, useStrict, extendObservable} from 'mobx'
import axios from 'axios'
var baseFetchUrl = "http://localhost:3050"

useStrict(true)
class BookStore {

  @observable _books = [];

  constructor() {
   this._books = this.fetchBooks()
  }


  getAllBooks() {
    return this._books
  }

  getSingleBook = action((id) =>{
    if(this._books == null){
      return null
    } 
    var returnBook;
    this._books.forEach((book,index) =>{
      if(book.id == id){
        returnBook = this._books[index]
      } 
    })
    return returnBook;
  })

  changeBooks = action((books) =>{
    this._books = books
  })

  addBook = action((book) =>{

    axios.post(`${baseFetchUrl}/api/books`,{book})
      .then((response) =>{
        console.log(response)
        this.fetchBooks()
      })
      .catch((error) =>{
        console.log(error)
      })
    
  })

  editBook = action((book) => {

    if(book.id == null) throw Error("no Id!")
    axios.put(`${baseFetchUrl}/api/books`,{book})
    .then((response) =>{
      console.log(response)
      this.fetchBooks()
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  deleteBook = action((bookId) =>{
    axios.delete(`${baseFetchUrl}/api/books/${bookId}`)
      .then((response) =>{
        console.log(response)
        this.fetchBooks()
      })
      .catch((error) =>{
        console.log(error)
      })
  })

  fetchBooks = () =>{
    fetch(`${baseFetchUrl}/api/books `).then((response) =>{
      return response.json()
    }).then((response) =>{
      this.changeBooks(response)
    }).catch((err) =>{
      console.log(err)
    })
  }

}


let store = new BookStore()
window.store = store

export default store