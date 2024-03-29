import './button.css'

type Props = {
    active?: boolean;
    text: string;
    onClick: any;
}
const activeStyle = {background: 'var(--DarkOrange)'}

export const Button = ({active,text,onClick}:Props) => (
    <button
        style={active ? activeStyle : {}}
        onClick={onClick}
    >
        {text}
    </button>
    )