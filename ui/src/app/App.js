import { useContext } from "react";
import Books from "./components/books/Books";
import NewBook from "./components/books/NewBook";
import Header from "./components/Header";
import { AppContext } from "./context/context";

export default function App() {
    const { allBooksView, auth, error } = useContext(AppContext);
    return (
        <div>
            <Header />
            {error.error &&
            <div className="books-error">
                {error.message}
            </div>
            }
            
            {allBooksView && <Books />}
            {!allBooksView && auth.isLogged &&  <NewBook />}
        </div>
    );
}
