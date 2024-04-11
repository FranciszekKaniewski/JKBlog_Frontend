import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Input} from "../../atoms/input";
import {Button} from "../../atoms/button";
import {createPost, editPost, getPost} from "../../../api/posts/posts";

import './create-post.css'


export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [edit, setEdit] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    const editParam = queryParams.get('edit');


    useEffect(()=>{
        (async ()=>{
            if(editParam) {
                const res = await getPost(editParam);

                if(!res) return;
                setTitle(res.title);
                setDescription(res.description ?? "");
                setAuthor(res.author);
                setCategory(res.category);
                setContent(res.content);
                setEdit(true);
            }
        })()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {title,description,author,category,content}
        !edit ? await createPost(post) : await editPost(editParam,post);
    }

    return (
        <form className='post-editor' onSubmit={handleSubmit}>
            <span>Tytuł wpisu:</span>
            <Input value={title} onChange={setTitle} required={true}/>
            <span>Autor wpisu:</span>
            <Input value={author} onChange={setAuthor} required={true}/>
            <span>Kategoria wpisu:</span>
            <Input value={category} onChange={setCategory} required={true}/>
            <span>Opis wpisu:</span>
            <textarea cols="10" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <ReactQuill theme="snow" value={content} onChange={setContent} required={true}/>
            <Button text={edit?'Zapisz zmiany':'Utwóż wpis'}/>
        </form>
    );
}