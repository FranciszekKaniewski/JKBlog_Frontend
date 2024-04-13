import {Button} from "../../atoms/button";
import {Link} from "react-router-dom";

import './post-header.css'

type Props = {
    role:string;
    title:string;
    author:string|null;
    date: string;
    description: string|null;
    deleteHandler: ()=>void;
}

export const PostHeader = ({role,title,author,description,date,deleteHandler}:Props) => {

    return(
        <div className='post-header'>
            <h1>{title}</h1>
            <p>{author} / {date}</p>
            <p>{description}</p>
            {role === 'admin' ?
                <div className="buttons">
                    <Link to={`/wpisy/nowy/?edit=${title}`}><Button text={'edit'}/></Link>
                    <Button text={'delete'} onClick={deleteHandler}/>
                </div> :
                null
            }
        </div>
    )
}