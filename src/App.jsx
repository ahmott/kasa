// Invocation RouterDOM et Import pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import Error404 from './pages/Error404';

// Routes react 
const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/housing/:id" element={<Property />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;