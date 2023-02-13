import { BrowserRouter, Routes, Route } from "react-router-dom";

import EntryPoint from "./Entrypoint";
import Intro from "./Intro";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Intro />} />

                    <Route exact path="/entry" element={<EntryPoint />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
