import React from 'react'
import {TextField} from '@mui/material'

export const CypherText = ({onChange, value, shift}) => {
    const changeValue = e => {
        const value = e.target.value
        onChange(value)
    }

    return <TextField value={value} onChange={changeValue} placeholder={'Enter cypher text'}/>
}
