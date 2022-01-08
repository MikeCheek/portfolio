import React, { useState, useEffect } from 'react'
import sleep from '../../utility/sleep';

import * as styles from './fullName.module.scss'

const initialText: string = "Hi, I'm Michele Pulvirenti.";

const array: string[] = Array.from(initialText);

const FullName = (): JSX.Element => {
    const [text, setText] = useState<string>('');

    let tmpString: string = '';
    const min = 0;
    const max = 500;

    const write = async (): Promise<void> => {
        await sleep(2000);
        for(let i = 0; i < array.length; i++){
            tmpString += array[i];
            setText(tmpString);
            await sleep(random());
        }
    }

    const random = (): number => {
        let rand = min + Math.random() * (max - min);
        rand = Math.floor(rand)
        console.log(rand)
        return rand;
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
