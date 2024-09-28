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
            <span className={'alias'}>{alias}: </span>
            <span style={!value ? {color: 'var(--Gray)'}:{}}>{value ? value : 'Brak'}</span>
            <br/><br/>
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