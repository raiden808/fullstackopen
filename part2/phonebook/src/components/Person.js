import React from "react";


const Person = ({ person, search }) => {

	console.log(person.name.indexOf(search), person.name)
	let nameValue = person.name.toLowerCase();

	if(search == ""){
		return <li>{person.name} {person.phone}</li>
	}

	else{
		if(nameValue.indexOf(search) >= 0){
			return <li>{person.name} {person.phone}</li>;
		}

		else{
			return <></>
		}
	}
};

export default Person;
