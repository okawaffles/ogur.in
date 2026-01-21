import './OgurinButton.css'
import type {MouseEventHandler} from "react";

export default function OgurinButton({text, type, onClick}: {text: string, type: 'positive' | 'negative' | 'danger', onClick: MouseEventHandler<HTMLButtonElement>}) {
    return(
        <>
            <button onClick={onClick} className={"ogurinButton " + type}>{text}</button>
        </>
    )
}