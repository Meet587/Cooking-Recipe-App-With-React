import React from 'react'

export default function Header(props) {
    const {
		searchResult, 
		handleSearchRecipe
	 } = props
  return (
    <div className='header'>
        <form action="">
            <div className='header__searchbar'>
            <input
				type="text"
				id="searchBar"
				className="recipe--header_input"
				placeholder="Search for recipes here..."
				minLength="1"
				value={searchResult}
				onChange={(e) => handleSearchRecipe(e)}
				/>
            </div>
        </form>
    </div>
  )
}
