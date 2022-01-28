import React, { useEffect } from "react";
import BookListItem from "../book-list-item/book-list-item";
import './book-list.css';
import { useDispatch, useSelector } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";


const BookList = ({ books, onAddedToCart }) => {
    return <ul className="book-list">
        {
            books.map((book) => {
                return (
                    <li key={  book.id }>
                        <BookListItem book={ book }
                                      onAddedToCart={ () => onAddedToCart(book.id) } />
                    </li>
                )
            })
        }
    </ul>
}

const BookListContainer = ({ bookstoreService }) => {

    const {books, loading, error} = useSelector(state => state);
    const dispatch = useDispatch();
    const onAddedToCart = (id) => dispatch(bookAddedToCart(id));

    useEffect(() => {
        dispatch(booksRequested());
        bookstoreService.getBooks()
            .then((data) => {
                dispatch(booksLoaded(data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(booksError(err))
            });
    }, []);

    if (loading) {
        return (
            <div className="spinner-div">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <BookList books={books}
                     onAddedToCart={(id) => onAddedToCart(id)}
                     loading={loading} />
};

export default withBookstoreService()(BookListContainer);