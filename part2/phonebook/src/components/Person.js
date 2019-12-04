import React from "react";

const Person = ({ persons, search, handleDelete}) => {
	
	const rows = () => persons.map((person, index)=> 
    	{
    		let nameValue = person.name.toLowerCase();

    		if(search == ""){
				return <li key={index} >
							{person.name} {person.phone}
							<button onClick={handleDelete}>Delete</button>
						</li>
			}

			else{
				if(nameValue.indexOf(search) >= 0){
					return (
						<li 
							key={index} >
								{person.name} 
								{person.phone}
								<button>Delete</button>
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
