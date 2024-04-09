import {Posts} from "../../organisms/Posts/Posts";

import './separator.css'

export const Separator = ({text}) => (
    <div className='sep'>
        <h2>{text}</h2>
        <hr/>
        <Posts />
    </div>
)