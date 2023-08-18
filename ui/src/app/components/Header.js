import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/context";

export default function Header() {
    const { auth, setAuth, allBooksView, setAllBooksView } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [wrongCredentials, setWrongCredentials] = useState(false);

    const logout = () => {
        const authObj = {
            username: "",
            password: "",
            isLogged: false,
        };
        setAuth(authObj);
        localStorage.setItem("bookstore-auth", JSON.stringify(authObj));
        setAllBooksView(true);
    };

    const login = () => {
        if (username == "admin" && password == "admin") {
            const authObj = {
                username: "admin",
                password: "admin",
                isLogged: true,
            };
            setAuth(authObj);
            localStorage.setItem("bookstore-auth", JSON.stringify(authObj));

            setUsername("");
            setPassword("");
            setWrongCredentials(false);
        } else {
            setUsername("");
            setPassword("");
            setWrongCredentials(true);
        }
    };

    return (
        <div className="header">
            <div className="title">
                Bookstore
                {auth.isLogged && !allBooksView && (
                    <span onClick={() => setAllBooksView(true)} className="nav-title">
                        See all books
                    </span>
                )}
                {auth.isLogged && allBooksView && (
                    <span onClick={() => setAllBooksView(false)} className="nav-title">
                        Add new book
                    </span>
                )}
            </div>
            <div className="auth-container">
                {wrongCredentials && <div className="wrong-credentials">Wrong credentials</div>}
                {!auth.isLogged && (
                    <>
                        <div className="textfield">
                            <TextField
                                value={username}
                                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                                size="small"
                                id="standard-basic"
                                label="Username"
                                variant="standard"
                            />
                        </div>
                        <div className="textfield">
                            <TextField
                                value={password}
                                onChange={(e) => setPassword(e.target.value.toLowerCase())}
                                size="small"
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                            />
                        </div>
                    </>
                )}

                {auth.isLogged && (
                    <div>
                        <Button onClick={logout} variant="outlined">
                            Logout
                        </Button>
                    </div>
                )}

                {!auth.isLogged && (
                    <div>
                        <Button onClick={login} disabled={username.length > 0 && password.length > 0 ? false : true} variant="outlined">
                            Enter
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
