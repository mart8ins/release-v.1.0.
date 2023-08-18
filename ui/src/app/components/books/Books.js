import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Book from "./Book";
import { AppContext } from "@/app/context/context";
import { ButtonGroup, Button } from "@mui/material";

export default function Books() {
    const { auth, setError } = useContext(AppContext);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        loadInitialPage();
    }, []);

    const loadInitialPage = () => {
        fetchBooks(currentPage)
            .then((response) => {
                setBooks(response.data.books);
                setLoading(false);

                const pages = [];
                for (let i = 0; i < response.data.pages; i++) {
                    pages.push(i);
                }
                setPages(pages);
                setError({
                    error: false,
                    message: "",
                });
            })
            .catch((err) => {
                setError({
                    error: true,
                    message: "Could not load books. Try again later",
                });
            });
    };

    const getNextPage = (pageNumber) => {
        fetchBooks(pageNumber)
            .then((response) => {
                setBooks(response.data.books);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchBooks = async (page) => {
        return await axios.get(`http://localhost:8081/?page=${page}`);
    };

    return (
        <div>
            {pages.length > 1 && (
                <div className="pagination-container">
                    <ButtonGroup variant="text" aria-label="text button group">
                        {pages.map((page) => {
                            return (
                                <Button
                                    onClick={() => {
                                        getNextPage(page);
                                        setCurrentPage(page);
                                    }}
                                    style={page == currentPage ? { color: "black", fontWeight: "bold" } : {}}
                                    key={page}>
                                    {page + 1}
                                </Button>
                            );
                        })}
                    </ButtonGroup>
                </div>
            )}

            <div className="books-container">
                {loading && books.length == 0 ? (
                    <div>Loading...</div>
                ) : (
                    books.length > 0 &&
                    books.map((book) => {
                        return <Book key={book.id} book={book} />;
                    })
                )}

                {!auth.isLogged && !loading && books.length == 0 && (
                    <div className="no-books">
                        No books to show. Please login as admin to add books.
                        <div>Username: admin</div>
                        <div>Password: admin</div>
                    </div>
                )}

                {!loading && books.length == 0 && auth.isLogged && <div className="no-books">No books to show.</div>}
            </div>
        </div>
    );
}
