import {Input} from "../../atoms/input";

import './posts-search-bar.css'

export const PostsSearchBar = ({search,changeSearchBar,sortType,changeSortType,sortDir,changeSortDir}) => {

    return(
        <div className="search-bar">
            <Input placeholder={'Wyszukaj...'} onChange={(e)=>changeSearchBar(e)} value={search}/>
            <select value={sortType} onChange={(e)=>changeSortType(e)}>
                <option value="DATE">Data</option>
                <option value="TITLE">Tytuł</option>
                <option value="CATEGORY">Kategoria</option>
            </select>
            <p onClick={()=>changeSortDir()}>{sortDir === 'ASC' ? 'Rosnąco 🔽': 'Malejąco 🔼'} </p>
        </div>
    )
}