import React from "react";

const Person = ({ persons, search, handleDelete}) => {
	
	const rows = () => persons.map((person, index)=> 
    	{
			let nameValue = person.name.toLowerCase();

			let personDetails = {
				name: person.name,
				id: person.id,
				index:index
			}
			
			console.log(person)

    		if(search == ""){
				return <li key={index} >
							{person.name} {person.phone}
							<button onClick={(e)=>{handleDelete(e,personDetails)}}>Delete</button>
						</li>
			}

			else{
				if(nameValue.indexOf(search) >= 0){
					return (
						<li 
							key={index} >
								{person.name} 
								{person.phone}
								<button onClick={handleDelete}>Delete</button>
						</li>
					)
				}

				else{
					return <></>
				}
			}
		}
  	);

  	return(
  		<ul>
  			{rows()}
  		</ul>
  	)
};

export default Person;
