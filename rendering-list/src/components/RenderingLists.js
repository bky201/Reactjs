import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title:'to kill a mockingbird',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title:'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        },
        {
            title:'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            
                books.map((book, index) => {
                    const uniqueKey = `${book.title}-${index}`;
                    return (
                <div key={uniqueKey}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
                    )
        })}
        <hr />
        {
            books.map((book, index) => {
                const uniqueKey = `${book.title}-${index}`;
                return <Book key={uniqueKey} book={book}/>
            })
        }
    </div>
    

  )
}

export default RenderingLists