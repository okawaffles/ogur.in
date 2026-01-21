import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Forwarder from "./pages/Forwarder.tsx";

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Forwarder/>}/>
            </Routes>
        </>
    )
}

export default App
