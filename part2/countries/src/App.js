import React,{ useState, useEffect} from 'react';
import axios from 'axios'
import SingleCountry from './components/SingleCountry'

function App() {

	const [newText, setText] = useState('');
	const [weatherData, setWeatherData] = useState()

	// primary display state.
	const [output, setOutput] = useState();


	const handleInputChange = e =>{
		const inputText = e.target.value;

		setText(inputText);
	}

	/*
	* By setting `newText` as a checker to only trigger if it's changed.
	*/
	useEffect(() => {
	  	//console.log('effect')
	  	if(newText != ""){
	  		axios
		    .get(`https://restcountries.eu/rest/v2/name/${newText}`)
		    .then(response => {

	      		if(Object.keys(response.data).length > 10){
	      			setOutput("Too many matches, specify another filter.");
	      		}
	      		
	      		else if(Object.keys(response.data).length == 1){
	      			
	      			//Axios test: working
	      			// Todo: create a separate function call for this.
	      			console.log(getWeather(response.data[0].capital))

					//console.log(response.data[0])
	      			let filteredCountry = [];
	      			const countries = response.data.map(country=>{
	      				
	      				filteredCountry.push(
	      					<SingleCountry country={country} />
	      				)
	      				
	      			})
	      			return setOutput(filteredCountry)
	      		}

				else if(Object.keys(response.data).length <= 5){

	      			let filteredCountry = [];
	      			const countries = response.data.map(country=>{


	      				filteredCountry.push(
	      					<li key={country.alpha2Code}>
	      						{country.name}
	      						<button onClick={()=>handleDisplayCountry(country)}>
	      							show
	      						</button>
	      					</li>
	      				)
	      			})
	      			return setOutput(filteredCountry)
		      	}

		    })
	  	}
	},[newText])
	
	
	const handleDisplayCountry = (country) =>{
		
		return setOutput(<SingleCountry country={country} />)
		
	}
	
	const getWeather = (capital) =>{
		axios
	    .get(`http://api.weatherstack.com/forecast?access_key=${process.env.REACT_APP_WEATHER_API}&query=${capital}`)
	    .then(output => {
	    	console.log(output.data)
	    	return output.data
	    }).catch(error => 
	    	console.log(error)
	    );
	}

  
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
