import React, { useState } from 'react'

export default function Textform(props) {
    /*function handleClick will be set in (onClick) of button it will change text into upperCase*/
    const handleClick = () => {
        // console.log('uppercase was clicked' + text);
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert('converted to "Uppercase"', 'success')
    }
    // converts string into lowercase
    const handleClick2 = () => {
        // console.log('lowercase was clicked' + text);
        let upText = text.toLowerCase();
        setText(upText);
        props.showAlert('converted to "Lowercase"', 'success')
    }

    // trims spaces from string
    const handleClick3 = () => {
        // console.log('Trim Spaces was clicked' + text);
        let upText = text.trim();
        setText(upText);
        props.showAlert('"Trimmed" Extra space from starting and ending of text', 'success')
    }

    // clear(delete) string
    const handleClick4 = () => {
        // console.log('Clear Text was clicked' + text);
        let upText = "";
        setText(upText);
        props.showAlert('text is "Cleared"', 'success')
    }

    /* function(handleChange) will be set in (onChange) of textarea textarea contains(value = text) function will change that value by using event parameter*/
    const handleChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; -> wrong way to change text value
    // setText("new text"); -> correct way to change text value

    return (
        <>
            <div className='container'>
                <h3 className='my-3'>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor : (props.mode === 'light'?'white':'#22303c00'),color : (props.mode === 'light'?'black':'whitesmoke')}} id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light'?'dark':'primary'} mx-3`} onClick={handleClick} >{props.buttonText}</button>
                <button className={`btn btn-${props.mode === 'light'?'dark':'primary'} mx-3`} onClick={handleClick2} >{props.buttonText2}</button>
                <button className={`btn btn-${props.mode === 'light'?'dark':'primary'} mx-3`} onClick={handleClick3} >{props.buttonText3}</button>
                <button className={`btn btn-${props.mode === 'light'?'dark':'primary'} mx-3`} onClick={handleClick4} >{props.buttonText4}</button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>Reading Time: {0.008 * (text.split(" ").length - 1)} Mins</p>
                <h4 className='my-2'>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
