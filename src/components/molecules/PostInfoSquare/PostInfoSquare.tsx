import {PostInfo} from "../../../types/posts/posts";

// import forestImg from '../../../assets/imgs/NoImage.jpg';
import {PostInfoPin} from "../../atoms/PostInfoPin/PostInfoPin";
import {dataConvert} from "../../../utils/dataConvert";
import {Link} from "react-router-dom";
import {config} from "../../../config";

import './post-info-square.css';


export const PostInfoSquare = ({title,category,description,createTime,imgUrl}:PostInfo) => {

    const imgStyle = {backgroundImage: `url("${config.backendURL}/img/${imgUrl?.replace(/['"]+/g, '')}")`};

    return(
        <div className='post-info'>
            <div style={imgUrl ? imgStyle : {}} className="img">
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