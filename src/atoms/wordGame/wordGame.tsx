import React, { useEffect, useState } from 'react'

import * as styles from './wordGame.module.scss'
import { WordGameProps } from './wordGame.types'

import containsChar from '../../utilities/containsChar'
import sleep from '../../utilities/sleep'
import { getDefinition } from '../../utilities/word'


const WordGame = ({ word, language }: WordGameProps): JSX.Element => {

    const [chars, setChars] = useState<string[]>([])
    const [victory, setVictory] = useState<boolean>(false)

    const [inLetters, setInLetters] = useState<string>('');
    const [okLetters, setOkLetters] = useState<string>('');

    const [attempts, setAttempts] = useState<number>(0);

    const [definition, setDefinition] = useState<boolean>(false);

    const [lan, setLan] = useState<string>(language)

    useEffect(() => {
        setLan(language)
        setChars(Array.from(word))
        console.log(`
Oh you've arrived here...
What are you looking for? 
What do you expect to find here?
I'm having fun with ${word}... 
Go somewhere else or try to guess the word `)

        if (document.getElementById("input0"))
            document.getElementById("input0")?.focus()
        else
            sleep(1000)
                .then(() => document.getElementById("input0")?.focus())

    }, [word])

    const nextInput = (form: any, index: number): void => {
        if (form.elements[index + 1].value == "Check")
            return;

        if (form.elements[index + 1].disabled)
            nextInput(form, index + 1);
        else
            form.elements[index + 1]?.focus();
    }

    const previousInput = (form: any, index: number): void => {
        if (form.elements[index - 1] && form.elements[index - 1].disabled)
            previousInput(form, index - 1)
        else
            form.elements[index - 1]?.focus();
    }

    const handleEnter = (event: any): void => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target)

        if (event.key.toLowerCase() === "enter" || event.key.toLowerCase() === "arrowright") {
            nextInput(form, index)
            event.preventDefault();
        } else if (event.key.toLowerCase() === "arrowleft") {
            previousInput(form, index)
            event.preventDefault();
        } else if (event.key.toLowerCase() === "backspace" && event.target.value === '') {
            previousInput(form, index)
        }
    };

    const handleChange = (event: any) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        if (event.target.value == " " || event.target.value == "" || !event.target.value.match('^([a-z]|[A-Z])*$')) {
            event.target.value = '';
        } else {
            nextInput(form, index);
            event.preventDefault();
        }
    };

    const check = (event: any) => {
        const form = event.target.form || document.getElementById("form");
        const tmpArray = []
        let tmpString = ''

        let tmpIn = inLetters;
        let tmpOk = okLetters;

        setAttempts(attempts * 1 + 1)

        for (let i = 0; i < word.length; i++) {
            tmpArray.push(form.elements[i].value)
            tmpString += form.elements[i].value;
        }

        for (let i = 0; i < tmpArray.length; i++) {
            if (!containsChar(tmpIn, tmpArray[i]))
                tmpIn += tmpArray[i];

            if (containsChar(word, tmpArray[i]) && tmpArray[i] != '') {
                document.getElementById("input" + i)!.style.backgroundColor = "var(--orange)";

                if (!containsChar(tmpOk, tmpArray[i]))
                    tmpOk += tmpArray[i];

            } else {
                document.getElementById("input" + i)!.style.backgroundColor = "";
            }

            if (tmpArray[i].toUpperCase() === chars[i].toUpperCase()) {
                document.getElementById("input" + i)!.style.backgroundColor = "var(--pink)";
                document.getElementById("input" + i)!.setAttribute("disabled", "disabled")
            }
        }

        if (word.toUpperCase() === tmpString.toUpperCase())
            setVictory(true);
        else
            document.getElementById("trebbling")!.animate(
                [
                    { transform: 'none' },
                    { transform: 'translateX(10px) rotateZ(1deg)' },
                    { transform: 'translateX(-10px) rotateZ(1deg)' },
                    { transform: 'translateX(10px) rotateZ(-1deg)' },
                    { transform: 'translateX(-10px) rotateZ(-1deg)' },
                    { transform: 'none' },
                ],
                {
                    duration: 300,
                    easing: "linear"
                }

            )

        setInLetters(tmpIn);
        setOkLetters(tmpOk);
    }

    const toggleDefinition = () => setDefinition(!definition);


    return (
        <form id={"form"} className={styles.form}>
            <div id={"trebbling"}>
                {chars.map((_char, key) => {
                    return <input
                        type={"text"}
                        key={key}
                        className={styles.input}
                        id={'input' + key}
                        name={'input' + key}
                        tabIndex={key + 1}
                        enterKeyHint={"next"}
                        maxLength={1}
                        onKeyDown={handleEnter}
                        onChange={handleChange}
                        pattern={"^([a-z]|[A-Z])*$"}
                    />
                })}
            </div>
            {victory ?
                <div className={styles.victory}>
                    <h2>YOU HAVE GUESSED THE WORD <span style={{ color: "var(--pink)" }}>{word.toUpperCase()}</span> IN {attempts} ATTEMPTS!!</h2>
                    {
                        lan === "en" ?
                            <>
                                <button type={"button"} className={styles.ctaDefinition} onClick={toggleDefinition}>
                                    {definition ? `HIDE` : `SHOW`} DEFINITION
                                </button>
                                {definition ? <p><span style={{ color: "var(--pink)" }}>{word}</span>: {getDefinition(word)}</p> : null}
                            </>
                            : null
                    }
                </div>
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