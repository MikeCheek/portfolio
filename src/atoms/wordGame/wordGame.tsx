import React, { useEffect, useState } from 'react'

import * as styles from './wordGame.module.scss'
import { WordGameProps } from './wordGame.types'

import containsChar from '../../utilities/containsChar'
import sleep from '../../utilities/sleep'


const WordGame = ({word}: WordGameProps): JSX.Element => {

    const [chars, setChars] = useState<string[]>([])
    const [victory, setVictory] = useState<boolean>(false)

    const [inLetters, setInLetters] = useState<string>('');
    const [okLetters, setOkLetters] = useState<string>('');
    
    const [attempts, setAttempts] = useState<number>(0);

    useEffect(() => {
        setChars(Array.from(word))
        console.log(word)
        
        if(document.getElementById("input0"))  
            document.getElementById("input0")?.focus()
        else   
            sleep(1000)
                .then(() => document.getElementById("input0")?.focus())

    }, [word])

    const handleEnter = (event:any) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        if (event.code.toLowerCase() === "enter" || event.code.toLowerCase() === "arrowright") {
            if(form.elements[index + 1].value != "Check")
                form.elements[index + 1]?.focus();
            event.preventDefault();
        } else if(event.code.toLowerCase() === "arrowleft"){
            form.elements[index - 1]?.focus();
            event.preventDefault();
        } else if(event.code.toLowerCase() === "backspace" && event.target.value === ''){
            form.elements[index - 1]?.focus();
            event.preventDefault();
        }
    };

    const handleChange = (event:any) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        if (event.target.value == " " || event.target.value == "" || !event.target.value.match('^([a-z]|[A-Z])*$')) {
            event.target.value = '';
        } else {
            if(form.elements[index + 1].value != "Check")
                form.elements[index + 1]?.focus();
            event.preventDefault();
        }
    };

    const check = (event:any) => {
        const form = event.target.form || document.getElementById("form");
        const tmpArray = []
        let tmpString = ''

        let tmpIn = inLetters;
        let tmpOk = okLetters;

        setAttempts(attempts*1 + 1)

        for(let i=0; i < word.length; i++){
            tmpArray.push(form.elements[i].value)
            tmpString += form.elements[i].value;
        }

        for(let i=0; i < tmpArray.length; i++){
            if(!containsChar(tmpIn, tmpArray[i]))
                tmpIn+=tmpArray[i];

            if(containsChar(word, tmpArray[i]) && tmpArray[i] != ''){
                document.getElementById("input"+i)!.style.backgroundColor = "var(--orange)";
                
                if(!containsChar(tmpOk, tmpArray[i]))
                    tmpOk+=tmpArray[i];

            } else{
                document.getElementById("input"+i)!.style.backgroundColor = "";
            }

            if(tmpArray[i].toUpperCase() === chars[i].toUpperCase()){
                document.getElementById("input"+i)!.style.backgroundColor = "var(--pink)";
                document.getElementById("input"+i)!.setAttribute("disabled", "disabled")
            }
        }

        if(word.toUpperCase() === tmpString.toUpperCase()){
            setVictory(true);
        }

        setInLetters(tmpIn);
        setOkLetters(tmpOk);

    }

    return (
        <form id={"form"} className={styles.form}>
            <div>
                {chars.map((_char, key) => {
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
                                onChange={handleChange}
                                pattern={"^([a-z]|[A-Z])*$"}
                            />
                })}
            </div>
            {victory? 
                <h2>YOU HAVE GUESSED THE WORD '{word.toUpperCase()}' IN {attempts} ATTEMPTS!!</h2> 
            : 
                <>
                    <button className={styles.check} type={"button"} value={"Check"} onClick={check}>CHECK</button>
                    <p>Attempts: {attempts}</p>
                </>
            }
            <div className={styles.lettersWrapper}>
                <div className={styles.letters}>
                    <p>Letters of the word</p>
                    <div className={styles.charListOrange}>
                        {
                            Array.from(okLetters).map((letter, key) => {
                                return <p key={key} >{letter}</p>
                            })
                        }
                    </div>
                </div>
                <div className={styles.letters}>
                    <p>Letters used</p>
                    <div className={styles.charList}>
                        {
                            Array.from(inLetters).map((letter, key) => {
                                return <p key={key} >{letter}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            
        </form>
    )
}

export default WordGame