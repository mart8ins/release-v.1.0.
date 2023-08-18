export default function Book({book}){
    return <div className="book">
      <div>Author name: {book.author}</div>
      <div>Book title: {book.title}</div>
    </div>
}