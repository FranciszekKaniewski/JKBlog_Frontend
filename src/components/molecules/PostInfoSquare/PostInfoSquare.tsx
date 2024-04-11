import {PostInfo} from "../../../types/posts/posts";

import './post-info-square.css';
// import forestImg from '../../../assets/imgs/Forest.jpg';
import {PostInfoPin} from "../../atoms/PostInfoPin/PostInfoPin";
import {dataConvert} from "../../../utils/dataConvert";
import {Link} from "react-router-dom";

export const PostInfoSquare = ({id,title,category,description,author,createTime}:PostInfo) => {

    return(
        <div className='post-info'>
            <div className="img">
                {/*<img src={forestImg} alt="forest"/>*/}
                <PostInfoPin text={dataConvert(createTime)}/>
            </div>
            <div className="text">
                <Link to={`wpisy/${title}`}><h1 className='post-title'>{title}</h1></Link>
                {description ? <p className='post-desc'>{description}</p> : <p>brak opisu.</p>}
            </div>
        </div>
    )
}