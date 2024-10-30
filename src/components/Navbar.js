    import { Link } from 'react-router-dom';
    import "bootstrap-icons/font/bootstrap-icons.css";
    import { useEffect, useState } from 'react';
    import axios from 'axios';


    const Navbar = () => {

        const [countriesList, setCountriesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null)

    useEffect(() => {
        if (!searchTerm) {
            axios.get('https://restcountries.com/v3.1/all')
                .then(response => {
                    console.log(response.data);
                    setCountriesList(response.data);
                })
                .catch(error => {
                    console.error(error)
                });
        }

        setCountriesList(countriesList.filter((country) => {
            return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        }))

    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

        return (
            <div className="bg-dark " style={{ height: '50px' ,sticky:"top" }}>
                <div class = "d-flex flex-row bd-highlight mb-3">
                <i class="bi bi-globe" style={{color:'#FFFFFF',height: '50px', width:'50px',paddingLeft:20, paddingTop:10}}></i>
                <Link to='/' >
                    <h4 style={{color:'#FFFFFF', paddingTop:6}}>Country Catalogue</h4>
                </Link>

                <Link to='/country/Africa' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:150}}>Africa</h7>
                </Link>


                <Link to='/country/Asia' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Asia</h7>
                </Link>

                <Link to='/country/Antartica' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Antartica</h7>
                </Link>

                <Link to='/country/Australia' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Australia</h7>
                </Link>

                <Link to='/country/Europe' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Europe</h7>
                </Link>

                <Link to='/country/NorthAmerica' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>North America</h7>
                </Link>

                <Link to='/country/SouthAmerica' >
                    <h7 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>South America</h7>
                </Link>

                {/* <input style={{height:40, paddingTop:16, paddingLeft:50}} placeholder='Search' onChange={handleChange}></input> */}
                </div>

            </div>
        );
    };

    export default Navbar;