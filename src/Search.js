import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  	state = {
    	query: '',
      	searchedBooks: []
    }

	onSearchChange = (event) => {
    	const query = event.target.value.trim();
      
      	this.setState({
          query
        });
      
      	this.searchBooks(query);
    }

	searchBooks = (query) => {
    	if (query && query !== '') {
        	BooksAPI.search(query)
				.then((result) => {
                	this.setState({
                    	searchedBooks: result
                    })
            })
        }
     }

	render(){
      	const { query,searchedBooks } = this.state;
		const { books } = this.props;

    	return(
        	<div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.onSearchChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
      			{searchedBooks.length > 0 && query.length > 0 &&
                 	searchedBooks.map(book => {
                 		// Check if searchedBook is in Books in Main page. If it exists change the shelf.
                 		book.shelf = books.filter(f => f.id === book.id).length > 0 ?
							books.filter(f => f.id === book.id)[0].shelf : 'none';

                		return (
                 			<Book book={book} key={book.id} onUpdateBook={this.props.onUpdateBook} />
                 		)
                	})
                }
      		  </ol>
            </div>
          </div>
        );
    }
}

Search.propTypes = {
  	books: PropTypes.array.isRequired,
	onUpdateBook: PropTypes.func.isRequired,
}

export default Search;