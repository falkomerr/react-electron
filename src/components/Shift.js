import React, {useState} from 'react'
import {FormControl, FormHelperText, MenuItem, Select} from '@mui/material'

export const Shift = ({onChange}) => {
    const [value, setValue] = useState('Enter a shift amount')

    const changeValue = e => {
        const value = e.target.value
        setValue(value)
        onChange(value)
    }

    return (
        <FormControl>
            <Select value={value} onChange={changeValue} placeholder={'ss'}>
                <MenuItem value="" disabled>
                    Enter shift amount
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
            </Select>
            <FormHelperText>Enter Shift amount</FormHelperText>
        </FormControl>
    )
}
