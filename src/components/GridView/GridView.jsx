import './GridView.scss'
import PropTypes from 'prop-types'


const GridView = ({ items }) => {
    return <div className='grid-wrap'>
        {items.map((item) => {
            return <>
                <div className="grid-item" key={item.id}>
                    <div className='title-wrap'><span className="title-span">Title:</span>{item.title}</div>
                    <div className="divider"></div>
                    <div className='summary-wrap'><span className="title-span">Summary: </span>{item.summary}</div>
                    <div className="divider"></div>
                    <div><span className="title-span">Author: </span>{item.author}</div>
                </div>
            </>
        }
        )}
    </div>
}

GridView.propTypes = {
    items: PropTypes.array
}

export default GridView
