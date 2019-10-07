import React from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onUpdateBook = (book, shelf) => {
  	BooksAPI.update(book,shelf)
    	.then((result) => {
      		book.shelf = shelf;
    		this.setState((currState) => ({
            	books: currState.books.filter(f => f.id !== book.id).concat([book])
            }));
    	});
  }

  componentDidMount(){
  	BooksAPI.getAll()
		.then((books) => {
        	this.setState(() => ({
            	books
            }));
        });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
       	<Route exact path='/' render={() => (
    		<Main books={books} onUpdateBook={this.onUpdateBook} />)} />
    	<Route path='/search' render={() => (
        	<Search books={books} onUpdateBook={this.onUpdateBook} /> )} />
      </div>
    )
  }
}

export default BooksApp
