import React, { useState} from 'react';


const Filter = ({search,handleSearchChange}) =>{

	return(
		<div>
	        filter shown with 
	        <input 
	          value={search} 
	          type="text" 
	          onChange={handleSearchChange}
	        />
      	</div>
	)

}

export default Filter