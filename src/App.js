import React, {useState} from 'react'
import {Grid, Paper} from '@mui/material'
import {CypherText} from './components/Cypher'
import {PlainText} from './components/PlainText'
import {Shift} from './components/Shift'
import {cypherToText, textToCypher} from './utils/caesarCipher'
import './styles.css'

export default function App() {
    const [cypherText, setCypherText] = useState('')
    const [plainText, setPlainText] = useState('')
    const [shift, setShift] = useState(0)

    const onChangeCypherText = cypherText => {
        setCypherText(cypherText)
        setPlainText(cypherToText(cypherText, shift))
    }

    const onChangePlainText = plainText => {
        setPlainText(plainText)
        setCypherText(textToCypher(plainText, shift))
    }

    const onChangeShift = shift => {
        setShift(shift)
        setCypherText(textToCypher(plainText, shift))
    }

    return (
        <div className="App">
            <Grid container justify="center" spacing={43}>
                <Grid item xs={12}>
                    <h1>Caesar's Cipher</h1>
                    <Shift onChange={onChangeShift}/>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container marginLeft="1vw" justify="center" spacing={40}>
                            <Grid item>
                                <h2>Plain Text</h2>
                                <PlainText value={plainText} onChange={onChangePlainText} shift={shift}/>
                            </Grid>
                            <Grid item>
                                <h2>Cypher Text</h2>
                                <CypherText value={cypherText} onChange={onChangeCypherText} shift={shift}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
