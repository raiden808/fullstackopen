import React from "react";

const Person = ({ persons, search }) => {
	
	const rows = () => persons.map((person, index)=> 
    	{
    		let nameValue = person.name.toLowerCase();

    		if(search == ""){
				return <li key={index} >{person.name} {person.phone}</li>
			}

			else{
				if(nameValue.indexOf(search) >= 0){
					return <li key={index} >{person.name} {person.phone}</li>;
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
