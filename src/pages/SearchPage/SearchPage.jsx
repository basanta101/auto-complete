import { useState } from "react"
import AutoComplete from "src/components/AutoComplete/AutoComplete"
import DATA from 'src/assets/sample.json'
import GridView from "src/components/GridView/GridView"
import './SearchPage.scss'
const SearchPage = () => {
    const [items, updateItems] = useState([])
    const [reset, updateReset] = useState(false)

    const onSelect = (newItem) => {
        const { id } = newItem
        const isItemAlreadySelected = items.some(item => item.id === id )
        if(isItemAlreadySelected) {
            alert('Item already selected')
            return
        }
        const [{book_id, author}] = DATA.authors.filter(author => author.book_id === id)
        const title = DATA.titles[book_id]
        updateItems([...items, { ...newItem, author, title }])
        updateReset(!reset)
    }
    return <div className="page-wrap">
        <AutoComplete options={DATA.summaries} onSelect={onSelect} reset={reset}/>
        {items.length ? <GridView items={items} /> : null}
    </div>
}

export default SearchPage
