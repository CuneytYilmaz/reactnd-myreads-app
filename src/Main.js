import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

const Main = (props) => {
  	const { books } = props;
  	console.log(books);
	return(
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
          		<Shelf shelf='currentlyReading' books={books} />
				<Shelf shelf='wantToRead' books={books} />
				<Shelf shelf='read' books={books} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    );
}

Main.propTypes = {
	books: PropTypes.array.isRequired,
  	onUpdateBook: PropTypes.func.isRequired,
}

export default Main;