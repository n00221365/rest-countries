import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null)


// handles the search bar functionallity

    useEffect(() => {
        if (!searchTerm) {

            // retrieves all countries from the json file
            axios.get('https://restcountries.com/v3.1/all')
                .then(response => {
                    console.log(response.data);
                    setCountriesList(response.data);
                })
                .catch(error => {
                    console.error(error)
                });
        }

        // will only display countries with the same name as what is typed in the search bar
        setCountriesList(countriesList.filter((country) => {
            return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        }))

    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    // styling and content for the country cards on the home page
    let countryCards = countriesList.map((country, index) => {
        return (

            <CountryCard
                key={country.ccn3}
                flag={country.flags.png}
                name={country.name.common}
                region={country.region}
            />
        );
    });


    // displays background colour, search bar and the country cards
    return (
        <div style={{backgroundColor: "#F5F5DD"}}>
            <input placeholder='Search' onChange={handleChange}></input>
            <Row md={3} xs={1}>
                {countryCards}
            </Row>
        </div>
    );
};

export default Home;
