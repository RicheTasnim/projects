import { useState } from 'react';
import './Country.css'
import './Countries.css'
import CountryDetails from './CountryDetails';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () =>{
        setVisited(!visited);
    }
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'Green'}}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {
                visited ? 'I have visited this country!!': 'I want to visit'
            }
            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;

// {
//     "flags": {
//         "png": "https://flagcdn.com/w320/tg.png",
//         "svg": "https://flagcdn.com/tg.svg",
//         "alt": "The flag of Togo is composed of five equal horizontal bands of green alternating with yellow. A red square bearing a five-pointed white star is superimposed in the canton."
//     },
//     "name": {
//         "common": "Togo",
//         "official": "Togolese Republic",
//         "nativeName": {
//             "fra": {
//                 "official": "République togolaise",
//                 "common": "Togo"
//             }
//         }
//     },
//     "cca2": "TG",
//     "cca3": "TGO",
//     "capital": [
//         "Lomé"
//     ],
//     "region": "Africa",
//     "area": 56785,
//     "population": 8278737
// }