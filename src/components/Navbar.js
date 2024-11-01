    import { Link } from 'react-router-dom';
    import "bootstrap-icons/font/bootstrap-icons.css";
    import { useEffect, useState } from 'react';
    import axios from 'axios';


    const Navbar = () => {

        return (
            <div className="bg-dark " style={{ height: '50px' ,sticky:"top" }}>
                <div class = "d-flex flex-row bd-highlight mb-3">
                <i class="bi bi-globe" style={{color:'#FFFFFF',height: '50px', width:'50px',paddingLeft:20, paddingTop:10}}></i>
                {/* Acts as a link to the homepage */}
                <Link to='/' >
                    <h4 style={{color:'#FFFFFF', paddingTop:6}}>Country Catalogue</h4>
                </Link>

            {/* All of the below were meant to bring you to a homepage style page that would list all the countries from a certain continent
                Unfortunately, I was not able to get these to display */}


                <Link to='/country/Africa' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:150}}>Africa</h6>
                </Link>


                <Link to='/country/Asia' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Asia</h6>
                </Link>

                <Link to='/country/Antartica' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Antartica</h6>
                </Link>

                <Link to='/country/Australia' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Australia</h6>
                </Link>

                <Link to='/country/Europe' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>Europe</h6>
                </Link>

                <Link to='/country/NorthAmerica' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>North America</h6>
                </Link>

                <Link to='/country/SouthAmerica' >
                    <h6 style={{color:'#FFFFFF', paddingTop:6, paddingLeft:30}}>South America</h6>
                </Link>

                </div>

            </div>
        );
    };

    export default Navbar;