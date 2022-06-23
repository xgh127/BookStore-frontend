import React from "react";
import '../css/basicBackground.css'
class BookRow extends React.Component{
    render(){
        const book=this.props.book;
        return(
            <tr>
              {/*<div className="book_text">*/}
                <box className="books-box">
                <img src={book.url} alt={book.name} />
                <p>{book.name}{' '}{book.price}元</p>
                </box>
             {/*</div>*/}
            </tr>
        )
    }
}
class BookList extends React.Component{
    render(){
        const rows=[];
        this.props.bookList.forEach((book)=>
        {
            rows.push(
               <BookRow book={book}></BookRow>
            )
        })
        return(
            <table>
            <tbody>{rows}</tbody>
            </table>

        )
    }
}
export default BookList;