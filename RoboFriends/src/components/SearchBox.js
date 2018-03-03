import React from 'react';

const SearchBox = ({searchChange}) => {

	return (

		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search for Robots'
				onChange= {searchChange} //on any change to the input of searchfield call the "searchChange" function from the parent i.e. App.js!!
			/>
		</div>

		);



}

export default SearchBox;