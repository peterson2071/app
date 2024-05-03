/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import './imageGPT.css';

const ImageGPT = () => {
    const [input, setPrompt] = useState("");
    const [result, setResult] = useState([{
        prompt: "", 
        photo: ""
    }]);

    async function generateImage(e) {
        e.preventDefault();
        let newResult = ([...result, { photo: `${input}`}])
        setResult(newResult)
        let body = newResult.map((photo) => photo.photo).join("\n")
        const response = await fetch('http://localhost:8080', {
            method: "POST",
            headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify({
                input: body
            })
        }
        )
        const data = await response.json()
         setResult([...newResult, {prompt: `${data.input}`}])
}
    return (
    <div className="gpt3__imggpt section__padding" id="img">
        <h1 className='gradient__text'>The possibilities are REALLY beyond your imagination</h1>
        <form onSubmit={generateImage}>
            <input placeholder="Generate an image here" value={input} onChange={(e) => setPrompt(e.target.value)}/>
            <button>Generate</button>
        </form>
        {result.map((prompt, index) => (<Response key={index}  message={prompt}/>))}
    </div>
    )
}

const Response = ({message}) => {
    return (
        <div>
            <img src={message.prompt} alt={message.photo} />
        </div>
    )
}

export default ImageGPT

//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