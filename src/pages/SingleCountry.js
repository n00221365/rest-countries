import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Row, Col, Image } from 'react-bootstrap'


const SingleCountry = () => {
    

    const { name } = useParams();

    const [country, setCountry] = useState(null)
    const [weather, setWeather] = useState(null);
    const [kelvin, setKelvin] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [crest, setCrest] = useState(null);
    const [src, setsrc] = useState(null)
    const [title, settitle] = useState(null)





    // 

    
    useEffect(() => {
        
            axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then( (res) => {
                console.log('Response:', res.data[0]);

                let coords = res.data[0].latlng;
                setCountry(res.data[0])
                setCrest(res.data.coatOfArms)


                 
                 axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=6e15355cf289fb745acea896b5cb501c`)
                .then((weatherData) => {
                    console.log('weatherdata:', weatherData.data)
                    setWeather(weatherData.data)
                    setKelvin(weatherData.data.main.temp)
                    setSunrise(weatherData.data.sys.sunrise)
                    setSunset(weatherData.data.sys.sunset)

                })
            })
            .catch((e) => {
                console.error(e)
            })

         

    }, [])
    // ------Maths to convert the formats from the api to normal---

    //converts kelvin to celsius for temperature
    const actualTemperature = Math.round(kelvin - 273.15);
    
    //converts unix time stamp to standard 24 hour clock for sunrise and sunset
    const sunriseConversion = new Date(sunrise * 1000);
    const sunsetConversion = new Date(sunset * 1000);

//extracts the hours and minutes from the converted time
    const sunriseHours = String(sunriseConversion.getHours()); 
    const sunriseMinutes = String(sunriseConversion.getMinutes()).padStart(2, '0');
    const actualSunrise = `${sunriseHours}:${sunriseMinutes}`;


//appends "AM" or "PM" to the end of the p tag depending on the time
   const AmvsPmSunrise = sunriseHours >= 12 ? 'PM' : 'AM'
   

//extracts the hours and minutes from the converted time
    const sunsetHours = String(sunsetConversion.getHours()); 
    const sunsetMinutes = String(sunsetConversion.getMinutes()).padStart(2, '0'); 
    const actualSunset = `${sunsetHours}:${sunsetMinutes}`;

    //appends "AM" or "PM" to the end of the p tag depending on the time

    const AmvsPmSunset = sunsetHours >= 12 ? 'PM' : 'AM'



    if (!country) {
        return <div>Loading...</div>
    }

    if (!weather) {
        return <div>Loading...</div>
    }

    
    return (
        
        <>

<div>

     <div style={{ position: 'relative', height: 'auto'}}>
            <div
    style={{
        backgroundImage: `url(${country.coatOfArms.png})`,
        position: 'absolute',
        top: 150,
        left: 450,
        height: '400px',
        width: '400px', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#ECE7CA',
        opacity: 0.2,
        
    }}
            />
    
        <Row >

            <Col >
                <Image src={country.flags.png} alt={`${country.name.common}'s flag`} />


{/* 
                <iframe
            src={country.maps.googleMaps}
            title={country.name.common}
            style={{ width: '77%', height: '300px', border: 'none' }}
            allowFullScreen
        ></iframe> */}
             </Col>

            <Col >
            
                <h1>{country.name.common}</h1>
                
                <p><h4>Official name: </h4>{country.name.official}</p>
                <p><h4>Region:</h4> {country.region}</p>
                {
                    country.subregion && <p>Sub-Region: {country.subregion}</p>
                }

                <h4>Languages:</h4>
                <ul>
                    {
                        Object.values(country.languages).map((language) => {
                            return <li>{language}</li>
                        })
                    }
                </ul>
                    
                <p><h4>Currency:</h4> {Object.values(country.currencies)[0].name} ({Object.values(country.currencies)[0].symbol})</p>
                
            </Col>

            <Col>
            <h2> Weather in {country.name.common}</h2>
            <ul>
            <p><h4>Current Weather:</h4> {weather.weather[0].main}</p>
            <p><h4>Temperature:</h4> {actualTemperature}°C</p>
            <p><h4>Sunrise:</h4> {actualSunrise}{AmvsPmSunrise}</p>
            <p><h4>Sunset:</h4> {actualSunset}{AmvsPmSunset}</p>



            </ul>
            
            </Col>
        </Row>
        </div>
        </div>
        </>
    );
}

export default SingleCountry