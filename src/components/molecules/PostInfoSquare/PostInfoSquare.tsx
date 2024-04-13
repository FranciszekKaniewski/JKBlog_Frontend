import {PostInfo} from "../../../types/posts/posts";

// import forestImg from '../../../assets/imgs/Forest.jpg';
import {PostInfoPin} from "../../atoms/PostInfoPin/PostInfoPin";
import {dataConvert} from "../../../utils/dataConvert";
import {Link} from "react-router-dom";

import './post-info-square.css';

export const PostInfoSquare = ({id,title,category,description,author,createTime}:PostInfo) => {

    return(
        <div className='post-info'>
            <div className="img">
                {/*<img src={forestImg} alt="forest"/>*/}
                <PostInfoPin text={dataConvert(createTime)}/>
                <PostInfoPin text={category}/>
            </div>
            <div className="text">
                <Link to={`/wpisy/${title}`}><h1 className='post-title'>{title}</h1></Link>
                {description ? <p className='post-desc'>{description}</p> : <p>brak opisu.</p>}
            </div>
        </div>
    )
}