import React from "react";

const Person = ({ person, search }) => {

	console.log(person.name.indexOf(search))

	if(person.name.indexOf(search) >= 1){
		return <li>{person.name} {person.phone}</li>;
	}

	else{
		return <li>{person.name} {person.phone}</li>;
	}

	// if(search == "test"){
	// 	return "test";
	// }

	// else{
	// 	return <li>{person.name} {person.phone}</li>;
	// }
	
};

export default Person;
