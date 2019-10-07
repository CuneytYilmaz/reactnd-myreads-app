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
  	//do smth.
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
    		<Main books={books} onUpdateBook={this.onUpdateBook}/>)} />
    	<Route path='/search' render={() => (
        	<Search onUpdateBook={this.onUpdateBook} /> )} />
      </div>
    )
  }
}

export default BooksApp
