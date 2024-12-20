import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import {Input} from "../../atoms/input";
import {Button} from "../../atoms/button";
import {createPost, deleteImg, editPost, getPost, uploadImg} from "../../../api/posts/posts";
import {usePopUp} from "../../../hooks/usePopUp";
import {useNavigate} from 'react-router-dom'
import {CreatePostType} from "../../../types/posts/posts";
import EditorToolbar, {formats, modules} from "../../../utils/EditorToolbar";
import {config} from "../../../config";
import './create-post.css'
import 'react-quill/dist/quill.snow.css';



export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [edit, setEdit] = useState(false);

    const [img, setImg] = useState<String|null>(null);
    const [file, setFile] = useState(null);

    const [backUp, setBackUp] = useState<CreatePostType|null>(null);

    const queryParams = new URLSearchParams(window.location.search);
    const editParam = queryParams.get('edit');

    const {printMessage} = usePopUp()

    const navigate = useNavigate();


    //@ts-ignore
    let ignore = false;
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
                    imgUrl: res.imgUrl,
                });
                setImg(res.imgUrl ? `${config.backendURL}/img/${res.imgUrl}`:null)
                setEdit(true);
            }
        })()
        return () => { ignore = true }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {title,description,author,category,content}

        let resImg = null;
        if(file) resImg = await uploadImg(file);

        const imgToSend = resImg ? resImg.body.imageName : null

        const res = !edit ? await createPost({...post,imgUrl: imgToSend}) : await editPost(editParam, {...post,imgUrl: imgToSend});
        if(res.isSuccess) {
            navigate(`/wpisy/${title}`);
            printMessage({text:"Wpis dodano poprawnie!",type:'SUCCESS'});
            if (resImg?.isSuccess) {
                printMessage({text: "Zdjęcie dodane poprawnie!", type: 'SUCCESS'});
            } else {
                printMessage({text: resImg?.body[0], type: 'ERROR'});
                return;
            }
        }else{
            console.log("xd");
            printMessage({text:res.body[0],type:'ERROR'});
            await deleteImg(imgToSend);
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

    const imgPreview = (e) => {
        e.target.files[0] ? setImg(URL.createObjectURL(e.target.files[0])): setImg(backUp?.imgUrl ? `${config.backendURL}/img/${backUp?.imgUrl}` : null)
        e.target.files[0] ? setFile(e.target.files[0]) : setFile(null)
    }

    return (
        <form className='post-editor' onSubmit={handleSubmit}>
            {img ? <img src={(img as string)} alt="" width={250} height={250}/> : null}
            <input
                //@ts-ignore
                {...("file", { required: !edit })}
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={imgPreview}
            />
            <span>Tytuł wpisu:</span>
            <Input value={title} onChange={setTitle} required={true} min={3}/>
            <span>Autor wpisu:</span>
            <Input value={author} onChange={setAuthor} required={true} min={3}/>
            <span>Kategoria wpisu:</span>
            <Input value={category} onChange={setCategory} required={true} min={3}/>
            <span>Opis wpisu:</span>
            <textarea maxLength={1000} minLength={3} cols={10} rows={10} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <EditorToolbar />

            <ReactQuill modules={modules} formats={formats}  theme="snow" value={content} onChange={setContent} />
            {edit ? <Button text={"Cofnij zmiany"} onClick={backChanges}/> : null}
            <Button text={edit?'Zapisz zmiany':'Utwóż wpis'}/>

        </form>
    );
}