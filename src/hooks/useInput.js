import {useState} from "react";

export const useInput = () => {
    const [value, setValue] = useState()
    const handleChange = (e) => {
        setValue(e?.target?.value)
    }
    return [
        value,
        handleChange,
        setValue
    ]
}