import {useEffect, useState} from "react";
import {PostInfo} from "../../../types/posts/posts";
import {getPosts} from "../../../api/posts/posts";
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";
import {sort} from "../../../utils/sort";

import './all-posts.css'
import {PostsSearchBar} from "../../molecules/PostsSearchBar/PostsSearchBar";

export const AllPosts = () => {

    const [posts, setPosts] = useState<PostInfo[]|null>(null);

    const [sortDir, setSortDir] = useState<'ASC'|'DESC'>("ASC");
    const [sortType, setSortType] = useState<'DATE'|'TITLE'|'CATEGORY'>("DATE");

    const [search, setSearch] = useState<string>('');


    let ignore = false;
    useEffect(()=> {
        (async()=>{
            const posts = await getPosts()
            const sorted = sort(posts, sortDir, sortType);

            setPosts(sorted);
        })()
        return () => { ignore = true }
    },[])

    const changeSortDir = () => {
        setSortDir(prevState => prevState === 'ASC' ? 'DESC' : 'ASC');
        const sorted = sort(posts, sortDir=== 'ASC' ? 'DESC' : 'ASC', sortType);
        setPosts(sorted);
    }
    const changeSortType = (e) => {
        setSortType(e.target.value);
        const sorted = sort(posts, sortDir, e.target.value);
        setPosts(sorted);
    }
    const changeSearchBar = (e) => {
        setSearch(e)
    }

    if(!posts) return <h1>Loading...</h1>

    const postsElement = posts.filter(e =>
        e.title.toUpperCase().includes(search.toUpperCase()) ||
        e.description?.toUpperCase().includes(search.toUpperCase()) ||
        e.category.toUpperCase().includes(search.toUpperCase())).map( e =>
        <PostInfoSquare
            key={e.id}
            id={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            author={e.author}
            createTime={e.createTime}
            imgUrl={e.imgUrl}
        />)

    return (
        <>
            <h1 className='center'>Wszystkie wpisy</h1>
            <PostsSearchBar
                search={search}
                changeSearchBar={changeSearchBar}
                sortType={sortType}
                changeSortType={changeSortType}
                sortDir={sortDir}
                changeSortDir={changeSortDir}
            />
            <hr/>
            <div className='all-posts'>
                {posts ? postsElement : null}
            </div>
        </>
    )
}