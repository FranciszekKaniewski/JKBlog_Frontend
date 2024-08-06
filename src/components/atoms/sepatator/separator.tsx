import './separator.css'

export const Separator = ({text}:{text: string}) => (
    <div className='sep'>
        <h2>{text}</h2>
        <hr/>
    </div>
)