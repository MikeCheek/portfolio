import React, { useState, useEffect } from 'react'
import sleep from '../../utilities/sleep';

import * as styles from './typingEffect.module.scss'
import { TypingEffectProps } from './typingEffect.types';


const TypingEffect = ({initialText, heading = false, fast = true}: TypingEffectProps): JSX.Element => {
    const array: string[] = Array.from(initialText);
    const [text, setText] = useState<string>('');

    let tmpString: string = '';
    const min = 0;
    const max = fast? 10 : 200;

    const write = async (): Promise<void> => {
        await sleep(500);
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
        <>
        {
            heading?
                <h1 className={styles.headingText} >
                    {text}
                </h1>
            :
                <p className={styles.paragraphText} >
                    {text}
                </p>


        }
        </>
        
    )
}

export default TypingEffect
