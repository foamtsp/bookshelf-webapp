import React , { useState, useEffect } from 'react';
import Utility from '../dbConnector/utility'
import { withRouter } from 'react-router-dom';



function Table(props) {
  const [user, setUser] = useState(props.users);
  const [isbn, setIsbn] = useState('');
  const [bookName, setBookName] = useState('');


  async function addBook(isbn, bookName){
    const book = {
          "isbn": isbn,
          "name": bookName
    }

    await Utility.addBook(user.user_id,book).then(res=>{
        if (res) setUser(res);
        else alert('Book info is invalid');
    })
  }

  
  async function delBook(isbn){

    await Utility.delBook(user.user_id, isbn).then(res=>{
        if (res) setUser(res);
        else alert('Book isbn is invalid');
    })
  }

 
  return (
    <div className = "container-fluid">
        <div className="row">
            <h2>{user.username} Book Shelf</h2>
            <div className="col">
                <input type="tezt" id="isbn" name = "isbn" className="form-control" placeholder="Book ISBN" required="" autoFocus="" onChange={event =>setIsbn(event.target.value)} value={isbn}/>
                <input type="text" id="name" name = "name" className="form-control" placeholder="Book Name" required="" autoFocus="" onChange={event =>setBookName(event.target.value)} value={bookName}/>
                <button type="button" class="btn btn-primary" onClick={() => addBook(isbn, bookName)}>Add Book</button>
            </div>
        </div>
        <br />
        <div className="panel panel-default p50 uth-panel">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Book's Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.shelf.map(book =>
                        <tr key={book.isbn}>
                            <td>{book.isbn}</td>
                            <td>{book.name}</td>
                            <td>
                                <button type="button" class="btn btn-danger btn-sm" onClick={() => delBook(book.isbn)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default withRouter(Table);
