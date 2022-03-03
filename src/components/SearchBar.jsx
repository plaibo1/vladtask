import React from 'react'

const SearchBar = ({searchState, setSearchState}) => {

    return (
        <div className="searchBar">
            <input type="text" className="searchBar__input"
                onChange={setSearchState} value={searchState}
                placeholder='Search 🔎︎' />
        </div>
    )
}

export default SearchBar