import React,{ useState, useEffect} from 'react';
import axios from 'axios'

//hook example
// const hook = () => {
//   console.log('effect')
//   axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//       console.log('promise fulfilled')
//       setNotes(response.data)
//     })
// }

// useEffect(hook, [])


function App() {

	const [newText, setText] = useState('');

	const handleInputChange = e =>{
		const inputText = e.target.value;

		setNewCountry(inputText);
	}

	useEffect(() => {
	  console.log('effect')

	  if(newText != ""){
	  	axios
	    .get(`https://restcountries.eu/rest/v2/name/${newText}`)
	    .then(response => {
	      console.log('promise fulfilled')
	      console.log(response.data)
	      // setNotes(response.data)
	    })
	  }
	 
	})

  
  	return (
	    <div className="App">
	      <form>
	      	<div>
	      		find countries 
	      		<input 
	      			value={newCountry}
	      			type="text"  
	      			onChange={handleInputChange}
	      		/>
	      	</div>
	      </form>
	    </div>
  	);
}

export default App;
