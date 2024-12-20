import './input.css'

type Props = {
    type?: string;
    placeholder?: string;
    value?: string|number;
    required?: boolean;
    onChange: any;
    className?: string;
    max?: number;
    min?: number;
}

export const Input = ({type,placeholder,value,required,onChange,className,max,min}:Props) =>(
    <input
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        required={required ?? false}
        onChange={(e)=>onChange(e.target.value)}
        className={className}
        maxLength={max ?? 99999}
        minLength={min ?? 0}
    />)