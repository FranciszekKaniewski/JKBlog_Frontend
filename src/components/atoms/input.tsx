import './input.css'

type Props = {
    type?: string;
    placeholder?: string;
    value?: string|number;
    onChange: any;
}

export const Input = ({type,placeholder,value,onChange}:Props) =>(
    <input
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
    />)