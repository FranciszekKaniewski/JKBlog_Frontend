import {useState} from "react";

type Props = {
    alias: string;
    value: string;
    required?: boolean;
    edit?: boolean;
}

export const UserData = ({alias,value,required,edit=false}:Props) => {
    const [inputValue, setInputValue] = useState<string|null>(value??'');

    return !edit ?
        <>
            <h3>{alias}:</h3>
            <h4 style={!value ? {color: 'var(--Gray)'}:{}}>{value ? value : 'Brak'}</h4>
        </> :
        <>
            <h3>{alias}:</h3>
            <input
                type={alias=="E-mail"?"email":"text"}
                placeholder={value ?? 'Brak'}
                value={inputValue ?? 'Brak'}
                required={required}
                onChange={(e)=>setInputValue(e.target.value)}
            />
        </>
}