import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case was Clicked: " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case!","success")
    }

    const handleLoClick = () => {
        // console.log("Upper Case was Clicked: " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case!","success")
    }

    const handleClearClick = () => {
        // console.log("Upper Case was Clicked: " + text)
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!","success")
    }

    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter text here');
    // setText("new text");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color:  props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8">
                        {/* <label htmlFor="myBox">Enter Text Here</label> */}
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text:'Enter Something in the text box above to Preview it here'}</p>
            </div>
        </>
    )
}
