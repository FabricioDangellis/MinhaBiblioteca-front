import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Olá mundo</div>}/>
            </Routes>
        </BrowserRouter>
    );
}   