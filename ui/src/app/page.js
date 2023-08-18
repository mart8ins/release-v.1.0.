"use client";
import App from "./App";
import AppContextProvider from "./context/context";

export default function Home() {
    return (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    );
}
