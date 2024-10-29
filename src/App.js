import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";

//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

import { Container } from 'react-bootstrap';

const App = () => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=6e15355cf289fb745acea896b5cb501c'
    
    return (
        <Container>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/country/:name' element={<SingleCountry />} />
            </Routes>
        </Router>
        </Container>
    );
};

export default App;
