import React, { useState} from 'react';

const PersonForm = ({handleSubmit,newName,newPhone,handleInputChange,handlePhoneChange}) =>{

	return (
		<form onSubmit={handleSubmit}>
	        <div>
	          name: 
	          <input 
	            value={newName} 
	            type="text" 
	            onChange={handleInputChange}
	          />
	        </div>
	        <div>
	          number:
	          <input 
	            value={newPhone}
	            type="text"
	            onChange={handlePhoneChange}
	          />
	        </div>
	        <div>
	          <button 
	            type="submit"
	          >
	            add
	          </button>
	        </div>
      	</form>
	)

}

export default PersonForm