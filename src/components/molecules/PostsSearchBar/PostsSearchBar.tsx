import {Input} from "../../atoms/input";

import './posts-search-bar.css'
import {ChangeEvent} from "react";

type Props = {
    search: string;
    changeSearchBar: (e: ChangeEvent) => void;
    sortType: 'DATE'|'TITLE'|'CATEGORY';
    changeSortType: (e?: ChangeEvent<HTMLSelectElement>) => void;
    sortDir: 'ASC'|'DESC';
    changeSortDir: () => void;
}

export const PostsSearchBar = ({search,changeSearchBar,sortType,changeSortType,sortDir,changeSortDir}:Props) => {

    return(
        <div className="search-bar">
            <Input placeholder={'Wyszukaj...'} onChange={(e:ChangeEvent)=>changeSearchBar(e)} value={search}/>
            <select value={sortType} onChange={(e)=>changeSortType(e)}>
                <option value="DATE">Data</option>
                <option value="TITLE">Tytuł</option>
                <option value="CATEGORY">Kategoria</option>
            </select>
            <p onClick={()=>changeSortDir()}>{sortDir === 'ASC' ? 'Rosnąco 🔽': 'Malejąco 🔼'} </p>
        </div>
    )
}