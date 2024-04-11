import './input.css'

type Props = {
    type?: string;
    placeholder?: string;
    value?: string|number;
    required?: boolean;
    onChange: any;
    className?: string;
}

export const Input = ({type,placeholder,value,required,onChange,className}:Props) =>(
    <input
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        required={required ?? false}
        onChange={(e)=>onChange(e.target.value)}
        className={className}
    />)