import React, { useState, useEffect } from 'react'
import sleep from '../../utility/sleep';

import * as styles from './typingEffect.module.scss'
import { TypingEffectProps } from './typingEffect.types';


const TypingEffect = ({initialText}: TypingEffectProps): JSX.Element => {
    const array: string[] = Array.from(initialText);
    const [text, setText] = useState<string>('');

    let tmpString: string = '';
    const min = 0;
    const max = 200;

    const write = async (): Promise<void> => {
        await sleep(1000);
        for(let i = 0; i < array.length; i++){
            tmpString += array[i];
            setText(tmpString);
            await sleep(random());
        }
    }

    const random = (): number => {
        let rand = min + Math.random() * (max - min);
        rand = Math.floor(rand)
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

export default TypingEffect
