export const KEYSTROKE = 'KEYSTROKE';

export const keyPress = ({charCode}) => ({
    type   : KEYSTROKE,
    payload: {
        letter: String.fromCharCode(charCode),
        time  : Date.now()
    }
});