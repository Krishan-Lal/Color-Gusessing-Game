import React from "react"
import Buttons from "./Buttons"


export default function App() {
    
    const [button, setButton] = React.useState(allNewButton())
    
    function allNewButton() {
        const newButton = []
        for (let i = 0; i < 3; i++) {
            newButton.push({
                value: ("#" + Math.floor(Math.random()*16777215).toString(16)).toUpperCase(),
                id: i
            })
        }
        return newButton
    }

    
    const buttonElements = button.map(res => (
        <Buttons 
        key = {res.id}
        value={res.value} />
    ))

    const randomNumber = Math.floor(Math.random() * 3) + 0
    const bgColor = button[randomNumber];
    // console.log(bgColor)
    
    const [message, setMessage] = React.useState("")
    
        function checkStatus(e){
            
            const buttonText = e.target.innerText;
            if(buttonText === bgColor.value){
                setMessage ("Correct!")
                setButton(allNewButton())
                return
            } else {
                setMessage ("Incorrect")
                setButton(allNewButton())
                return
            }
    }


    return (
        <main className="container">
        <div className="box" 
        style={{backgroundColor: bgColor.value}}>
        </div>
            <div className="button-row" onClick={checkStatus}>
                {buttonElements}
            </div>
            <h2>{message}</h2>
        </main>
    )
}