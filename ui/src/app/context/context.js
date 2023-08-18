import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: "",
        password: "",
        isLogged: false,
    });

    const [allBooksView, setAllBooksView] = useState(true);

    const [error, setError] = useState({
        error: false,
        message: "",
    });

    useEffect(()=> {
        const fromLS = localStorage.getItem("bookstore-auth");
        if(fromLS) {
            setAuth(JSON.parse(fromLS))
        }
    },[])

    return <AppContext.Provider value={{ auth, setAuth, allBooksView, setAllBooksView, error, setError }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
