import React, { useState } from 'react'

export default function TextForm(props) {
    ////////////////////
    const [text, setText] = useState('');
    ////////////////////
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);////-convert to upper case
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }
    ////////-remove extra spaces
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    ////////-to copy the text
    const handleCopyTextClick = () => {
        var text = document.getElementById("myBox")
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
    }
    ////////-convert to lowercase
    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }
    ////////-clear the text
    const handleClearTextClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = "";
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }
    ///////-to continously update the tesxt
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    return (
        <>
            <div className="container1">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-dark text-light" onClick={handleUpClick}><b>Convert To Uppercase</b></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-dark text-light" onClick={handleLoClick}><b>Convert To Lowercase</b></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-dark text-light" onClick={handleClearTextClick}><b>Clear Text</b></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-dark text-light" onClick={handleCopyTextClick}><b>Copy Text</b></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-dark text-light" onClick={handleRemoveExtraSpaces}><b>Remove Extra Spaces</b></button>
            </div>
            <div className="container2 my-3">
                <h2>Your Text Summary</h2>
                <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</b></p>
                <p><b>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read.</b></p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
