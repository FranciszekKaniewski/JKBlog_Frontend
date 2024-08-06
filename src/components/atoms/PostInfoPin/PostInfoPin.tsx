import './post-info-pin.css'
type Props = {
    text: string;
}
export const PostInfoPin = ({text}:Props) => {
    return(
        <span className='pin'>{text}</span>
    )
}