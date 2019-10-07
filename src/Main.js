import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const Main = (props) => {
  	const { books,onUpdateBook } = props;
	return(
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
          		<Shelf shelf='currentlyReading' books={books} onUpdateBook={onUpdateBook} />
				<Shelf shelf='wantToRead' books={books} onUpdateBook={onUpdateBook} />
				<Shelf shelf='read' books={books} onUpdateBook={onUpdateBook} />
              </div>
            </div>
            <div className="open-search">
			  <Link to='/search'>Add a book</Link>
            </div>
          </div>
    );
}

Main.propTypes = {
	books: PropTypes.array.isRequired,
  	onUpdateBook: PropTypes.func.isRequired,
}

export default Main;