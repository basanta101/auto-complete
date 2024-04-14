import { useRef, useState } from 'react'
import PropTypes from 'prop-types';
import SearchBox from 'src/components/SearchBox/SearchBox'
import debounce from 'src/utils/debounce';
import List from 'src/components/List/List'
import useOnClickOutside from 'src/hooks/useOutside';

import { DISPLAY_KEY, VALUE_KEY } from './autoComplete.constants';
import './AutoComplete.scss' // Import CSS file for styling

function Dropdown({ options = [] , onSelect = f=> f, reset = false }) {
    // State to track whether the dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false)
    const [filteredOptions, updateFilteredOptions] = useState(options)
    const autoCompleteRef = useRef()
    const onOutsideClick = () => {
        setIsOpen(false)
    }
    useOnClickOutside(autoCompleteRef, onOutsideClick)
    const handleItemClickCb = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    const handleSearchCb = (newSearchTerm = '') => {
        const res = options.filter(summary => summary.summary.includes(newSearchTerm))
        console.log('handleSearchTerm ==> ', newSearchTerm, res)
        
        updateFilteredOptions(res)
        setIsOpen(true)
    }


    const debouncedSearch = debounce(handleSearchCb, 300)

    return (
        <div ref={autoCompleteRef} className="auto-complete-wrap">
            <SearchBox handleSearchCb={debouncedSearch} reset={reset} />
            {(isOpen && filteredOptions.length) ?
                <List options={filteredOptions} handleItemClickCb={handleItemClickCb} displayKey={DISPLAY_KEY} valueKey={VALUE_KEY} />
                : null
            }
            {(isOpen && !filteredOptions.length) ?
                <div className="title">No results found.</div>
                : null
            }
            
        </div>

    );
}

Dropdown.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
    reset : PropTypes.bool
}

export default Dropdown
