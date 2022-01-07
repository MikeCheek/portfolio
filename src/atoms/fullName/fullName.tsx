import React, { useState, useEffect } from 'react'
import sleep from '../../utility/sleep';

import * as styles from './fullName.module.scss'

const initialText: string = "Hi, I'm Michele Pulvirenti.";

const array: string[] = Array.from(initialText);

const FullName = () => {
    const [text, setText] = useState<string>('');

    let tmpString: string = '';

    const write = async () => {
        for(let i = 0; i < array.length; i++){
            console.log(text)
            tmpString += array[i];
            setText(tmpString);
            await sleep(300);
        }
    }

    useEffect(() => {
        write();
    }, [])

    return (
        <h1 className={styles.text} >
            {text}
        </h1>
    )
}

export default FullName
