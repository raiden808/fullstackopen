import React,{ useState, useEffect} from 'react';
import axios from 'axios'

function App() {

	const [newText, setText] = useState('');
	//const [countries, setCountries] = useState([])
	const [output, setOutput] = useState();

	let renderOutput;

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

				//console.log(response.data)
				//console.log("results :",Object.keys(response.data).length)

	      		if(Object.keys(response.data).length > 10){
	      			setOutput("Too many matches, specify another filter.");
	      		}

	      		

	      		else if(Object.keys(response.data).length == 1){

					console.log(response.data[0].languages)

	      			let filteredCountry = [];
	      			const countries = response.data.map(country=>{

	      				//console.log(country.languages)

	      				filteredCountry.push(
	      					<div key={country.alpha2Code}>
	      						<h4>{country.name}</h4>
	      						<p>capital {country.capital}</p>
	      						<p>population {country.population}</p>
	      						<h4>Languages</h4>
		      						{

		      						}
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
