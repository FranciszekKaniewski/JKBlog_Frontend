import './input.css'

type Props = {
    type?: string;
    placeholder?: string;
    value?: string|number;
    required?: boolean;
    onChange: any;
}

export const Input = ({type,placeholder,value,required,onChange}:Props) =>(
    <input
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        required={required ?? false}
        onChange={(e)=>onChange(e.target.value)}
    />)