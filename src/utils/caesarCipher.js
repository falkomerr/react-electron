const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

export const textToCypher = (text, shift) => {
    const textSplited = text.split('')

    return textSplited
        .map(char => {
            const position = alphabet.indexOf(char)
            return position >= 0 ? alphabet[position + shift] : ' '
        })
        .join('')
}

export const cypherToText = (text, shift) => {
    const textSplited = text.split('')

    return textSplited
        .map(char => {
            const position = alphabet.indexOf(char)
            return position >= 0 ? alphabet[position - shift] : ' '
        })
        .join('')
}
