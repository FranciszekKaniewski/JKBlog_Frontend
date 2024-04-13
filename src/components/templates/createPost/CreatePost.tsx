import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import {Input} from "../../atoms/input";
import {Button} from "../../atoms/button";
import {createPost, editPost, getPost} from "../../../api/posts/posts";
import {usePopUp} from "../../../hooks/usePopUp";
import {useNavigate} from 'react-router-dom'
import {CreatePostType} from "../../../types/posts/posts";
import EditorToolbar, {formats, modules} from "../../../utils/EditorToolbar";

import './create-post.css'
import 'react-quill/dist/quill.snow.css';


export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [edit, setEdit] = useState(false);

    const [backUp, setBackUp] = useState<CreatePostType|null>(null);

    const queryParams = new URLSearchParams(window.location.search);
    const editParam = queryParams.get('edit');

    const {printMessage} = usePopUp()

    const navigate = useNavigate();


    useEffect(()=>{
        (async ()=>{
            if(editParam) {
                const res = await getPost(editParam);

                if(!res) {
                    printMessage({text:`Nie udało się znaleść wpisu ${editParam}`,type:'ERROR'});
                    return;
                }
                setTitle(res.title);
                setDescription(res.description ?? "");
                setAuthor(res.author);
                setCategory(res.category);
                setContent(res.content);

                setBackUp({
                    title: res.title,
                    description: res.description ?? "",
                    author: res.author,
                    category: res.category,
                    content: res.content,
                });
                setEdit(true);
            }
        })()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {title,description,author,category,content}

        const res = !edit ? await createPost(post) : await editPost(editParam,post);

        if(res.isSuccess) {
            navigate(`/wpisy/${title}`);
            printMessage({text:"Wpis dodano poprawnie!",type:'SUCCESS'});
        }else{
            printMessage({text:res.body[0],type:'ERROR'});
        }
    }

    const backChanges = async (e) => {
        e.preventDefault()
        setTitle(backUp ? backUp.title : '');
        setDescription(backUp ? backUp.description : '');
        setAuthor(backUp ? backUp.author : '');
        setCategory(backUp ? backUp.category : '');
        setContent(backUp ? backUp.content : '');
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
            <EditorToolbar />
            <ReactQuill modules={modules} formats={formats} theme="snow" value={content} onChange={setContent} required={true}/>
            {edit ? <Button text={"Cofnij zmiany"} onClick={backChanges}/> : null}
            <Button text={edit?'Zapisz zmiany':'Utwóż wpis'}/>

        </form>
    );
}