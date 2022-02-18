import React, { useEffect, useState } from 'react'
import { WordGameProps } from './wordGame.types'
import * as styles from './wordGame.module.scss'
import sleep from '../../utilities/sleep'

const WordGame = ({word}: WordGameProps): JSX.Element => {

    const [chars, setChars] = useState<string[]>([])
    const [answer, setAnswer] = useState<string[]>([])

    useEffect(() => {
        setChars(Array.from(word))
        
        if(document.getElementById("input0"))  
            document.getElementById("input0")?.focus()
        else   
            sleep(1000)
                .then(() => document.getElementById("input0")?.focus())

    }, [word])

    useEffect(() => {
        console.log(answer)
    }, [answer])

    const handleEnter = (event:any) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        if (event.code.toLowerCase() === "enter" || event.code.toLowerCase() === "space" || event.code.toLowerCase() === "arrowright") {
            if(form.elements[index + 1].value != "Check")
                form.elements[index + 1]?.focus();
            event.preventDefault();
        } else if(event.code.toLowerCase() === "arrowleft"){
            form.elements[index - 1]?.focus();
            event.preventDefault();
        }
    };

    const check = (event:any) => {
        const form = event.target.form;
        const tmp = []

        for(let i=0; i < form.length -1; i++){
            tmp.push(form.elements[i].value)
        }
        console.log(tmp)
    }

    return (
        <form id={"form"} className={styles.form}>
            <div>
                {chars.map((char, key) => {
                    return <input 
                                type={"text"} 
                                key={key} 
                                className={styles.input} 
                                id={'input'+key} 
                                name={'input'+key} 
                                tabIndex={key+1} 
                                enterKeyHint={"next"}
                                maxLength={1}
                                onKeyDown={handleEnter}
                            />
                })}
            </div>
            <button id={"button"} type={"button"} value={"Check"} onClick={check}>CHECK</button>
        </form>
    )
}

export default WordGame