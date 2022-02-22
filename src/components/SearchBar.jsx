import React from 'react'

const SearchBar = ({searchState, setSearchState}) => {

    return (
        <div className="searchBar">
            <input type="text" className="searchBar__input"
                onChange={e => setSearchState(e.target.value)} value={searchState}
                placeholder='Search 🔎︎' />
        </div>
    )
}

export default SearchBar