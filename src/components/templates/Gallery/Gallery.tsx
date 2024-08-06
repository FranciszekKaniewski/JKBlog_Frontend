import {useEffect, useState} from "react";
import {deleteImg, getImgsNames} from "../../../api/posts/posts.ts";
import {config} from "../../../config.ts";

import './gallery.css'
import {usePopUp} from "../../../hooks/usePopUp.ts";

export const Gallery = () => {

    const [imgs, setImgs] = useState<null|string[]>(null);

    let ignore = false;
    useEffect(()=>{(async ()=>{
        if(!ignore) {
            setImgs((await getImgsNames()).body)
        }
        return () => { ignore = true }
    })()},[])

    const {printMessage} = usePopUp();

    const deleteHandler = async (name:string) => {
        const res = await deleteImg(name)
        console.log(res)
        if(!res.isSuccess){
            printMessage({text:res.body,type:"ERROR"})
        }else{
            printMessage({text:"Zdjęcie usunięto.",type:"SUCCESS"})
        }
        setImgs(prevState => prevState.filter((i:string) => i!==name))
    }

    const a = imgs?.map(i => (<p key={i}><img src={`${config.backendURL}/img/${i}`} width={200} alt=""/> <i className='x' onClick={()=>deleteHandler(i)}>X</i></p>));

    return(
        <>
            <h1 className='zdjęcia'>Zdjęcia</h1>
            <div className={'imgs-gallery'}>{a}</div>
        </>
    )
}