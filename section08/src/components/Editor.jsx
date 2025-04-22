import { useState,useRef } from "react";

export default function Editor({ addTodo}) {
    const [text, setText] = useState('')
    const idRef = useRef(0)

    const onChangeInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        addTodo({ id:idRef.current++, text, date: new Date().getTime(), state: false })
        setText('')

    }

    return (
        <div className="editor">
            <input type="text" placeholder="Todo" onChange={onChangeInput} value={text}/>
            <button type="button" onClick={handleSubmit}>Add</button>
        </div>
    );
}

