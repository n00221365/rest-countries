import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";

//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import Africa from './pages/Africa';
import Antartica from './pages/Antartica';
import Asia from './pages/Asia';
import Australia from './pages/Australia';
import Europe from './pages/Europe';
import NAmerica from './pages/NAmerica';
import SAmerica from './pages/SAmerica';








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
                <Route path='/country/:region' element={<Europe />} />
                <Route path='/country/:region' element={<Africa />} />
                <Route path='/country/:region' element={<Asia />} />
                <Route path='/country/:region' element={<NAmerica />} />
                <Route path='/country/:region' element={<SAmerica />} />
                <Route path='/country/:region' element={<Australia />} />
                <Route path='/country/:region' element={<Antartica />} />


            </Routes>
        </Router>
        </Container>
    );
};

export default App;
