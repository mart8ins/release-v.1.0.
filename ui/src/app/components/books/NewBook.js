import { AppContext } from "@/app/context/context";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";

export default function NewBook() {
    const { auth, setError } = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const addBook = () => {
        axios
            .put(
                "http://localhost:8081/admin/save",
                {
                    title: title,
                    author: author,
                },
                {
                    auth: {
                        username: auth.username,
                        password: auth.password,
                    },
                }
            )
            .then(() => {
                setTitle("");
                setAuthor("");
                setError({
                    error: false,
                    message: "",
                });
            })
            .catch((err) => {
                setError({
                    error: true,
                    message: err.response.data.message,
                });
                setTitle("");
                setAuthor("");
            });
    };

    return (
        <div className="add-book-container">
            <div className="add-new-title">Enter book details</div>
            <div>
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value.toLowerCase())}
                    size="small"
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    value={author}
                    onChange={(e) => setAuthor(e.target.value.toLowerCase())}
                    size="small"
                    id="standard-basic"
                    label="Author"
                    variant="standard"
                />
            </div>

            <div>
                <Button onClick={addBook} variant="outlined" disabled={title.length > 0 && author.length > 0 ? false : true}>
                    +Add book
                </Button>
            </div>
        </div>
    );
}
