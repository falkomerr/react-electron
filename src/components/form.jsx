import React from 'react';
import {useInput} from "../hooks/useInput";
import {decrypt, encrypt} from "caesar-shift";


const Form = () => {
    const [value, handleChange, setValue] = useInput('')
    const selected = document.querySelector('.select-css')
    const handleClickCrypt = (e) => {
        e.preventDefault()
        setValue(encrypt(selected.options[selected.selectedIndex].text, value))
    }
    return (
        <div className="App">
            <form className="form" >
                <div className="input-wrap">
                    <input value={value} onChange={handleChange}  title="Only english letters" className="text" type="text" placeholder="Your text"/>
                    <select defaultValue={"Shift"}  required className="select-css">
                        <option disabled selected value="">Shift</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                </div>
                <button className="submit"  onClick={handleClickCrypt}>Encrypt</button>
            </form>
        </div>
    );
};

export default Form;
