import { useEffect, useState } from 'react';
import SearchIcon from 'src/assets/search-icon.svg?react'
import './SearchBox.scss'
import PropTypes from 'prop-types';


const SearchBox = ({ handleSearchCb = f => f, reset = false }) => {
    const [searchTerm, updateSearchTerm] = useState('')
    useEffect(() => {
        updateSearchTerm('')
    }, [reset])
    const handleSearch = (ev) => {
        const term = ev.target.value
        updateSearchTerm(term)
        handleSearchCb(term)
    }
    return <div className='search-box'>
        <input type="text" onChange={handleSearch} placeholder='Search...' value={searchTerm}/>
        <div className='separator' />
        <SearchIcon className='search-icon' />
    </div>
}

SearchBox.propTypes = {
    handleSearchCb : PropTypes.func,
    reset : PropTypes.bool
}

export default SearchBox
