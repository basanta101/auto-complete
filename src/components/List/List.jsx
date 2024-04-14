import PropTypes from 'prop-types';
import './List.scss'
const List = ({ options = [], displayKey = 'label', valueKey = 'id', handleItemClickCb = f => f }) => {
    const handleItemClick = (option) => {
        handleItemClickCb(option)
    }
    return <ul className='list-wrap'>
        {options.map((option) =>
            <li key={option[valueKey]} onClick={() => handleItemClick(option)}>{option[displayKey]}</li>
        )}
    </ul>
}

List.propTypes = {
    options: PropTypes.array,
    valueKey: PropTypes.string,
    displayKey: PropTypes.string,
    handleItemClickCb: PropTypes.func,
}

export default List
