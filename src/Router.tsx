import { Route, Routes } from "react-router-dom"; // [Routes] - importe de biblioteca Router domm
                                                  // [Route] - componete de cada rota da aplicação
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}/> 
            <Route path="/event" element={<Event />}/> 
            <Route path="/event/lesson/:slug" element={<Event />}/> 
        </Routes> 
    )
}

//exemplo <Route path="/" element={<h1>Home</h1>}/>  // [path="/"] caminho que pertence a rota ex: http://localhost:3000 (Home)
// Exemplo rota <Route path="/event" element={<h1>event</h1>}/>      //  [element ] - qual elemento em tela a sera apresentado exemplo <h1>element</h1>