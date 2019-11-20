import React,{ useState, useEffect} from 'react';
import axios from 'axios'

function App() {

	const [newText, setText] = useState('');
	const [output, setOutput] = useState();

	const handleInputChange = e =>{
		const inputText = e.target.value;

		setText(inputText);
	}


	/*
	* By setting `newText` as a checker to only trigger if it's changed.
	*/
	useEffect(() => {
	  	console.log('effect')
	  	if(newText != ""){
	  		axios
		    .get(`https://restcountries.eu/rest/v2/name/${newText}`)
		    .then(response => {

	      		if(Object.keys(response.data).length > 10){
	      			setOutput("Too many matches, specify another filter.");
	      		}
	      		
	      		else if(Object.keys(response.data).length == 1){

					console.log(response.data[0])
					
					let singleLanguages = [];
					for (let entry of response.data[0].languages) {
						singleLanguages.push(<li>{entry.name}</li>);
					}

	      			let filteredCountry = [];
	      			const countries = response.data.map(country=>{

	      				filteredCountry.push(
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
	      			})
	      			return setOutput(filteredCountry)
	      		}

				else if(Object.keys(response.data).length <= 5){

	      			let filteredCountry = [];
	      			const countries = response.data.map(country=>{

	      				filteredCountry.push(<li key={country.alpha2Code}>{country.name}</li>)
	      			})
	      			return setOutput(filteredCountry)
		      	}

		    })
	  	}
	},[newText])

  
  	return (
	    <div className="App">
	      <form>
	      	<div>
	      		find countries 
	      		<input 
	      			value={newText}
	      			type="text"  
	      			onChange={handleInputChange}
	      		/>
	      	</div>
	      </form>
	      <div>
	     	{output}
	      </div>
	    </div>
  	);
}

export default App;
