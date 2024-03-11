import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, area, region } = country;

    const [visited, setVisited] = useState(false)

    const handelVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Language: {region}</p>
            <p>{name.official}</p>
            <button onClick={handelVisited}>{visited ? 'going':'Not'}</button>
            {visited ? 'I have visited this country ' : 'i want to visit'}
        </div>
    );
};

export default Country;