import React from 'react';


const SingleCountry = ({country}) =>{
    
	let singleLanguages = [];
	for (let entry of country.languages) {
		singleLanguages.push(<li>{entry.name}</li>);
	}
    
    return(
        <div key={country.alpha2Code}>
  			<h4>{country.name}</h4>
  			<p>capital {country.capital}</p>
  			<p>population {country.population}</p>
  			<h4>Languages</h4>
  				{
  					singleLanguages
  				}
  			<img 
  				style={{ height: 100 }} 
  				src={country.flag} 
  			/>
  		</div>    
    )
}


export default SingleCountry