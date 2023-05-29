import React from 'react'
import BookCard from '../../shared/BookCard'
import bookData from '../../assets/data/books'
import { Col } from 'reactstrap'
const FeaturedBookList = () => {
    return (
        <>
           {
            bookData ?.map(book=>(
                <Col lg='3' className='mb-4' key={book.id} ><BookCard book={book} /></Col> ))
           } 
        </>
    )
}

export default FeaturedBookList
