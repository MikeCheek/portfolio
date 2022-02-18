import React, { useState } from 'react'
import Loading from '../../atoms/loading/loading';
import WordGame from '../../atoms/wordGame/wordGame';

import * as styles from './gameHero.module.scss'

const GameHero = () => {
    const [fetched, setFetched] = useState<boolean>(false);
    const [word, setWord] = useState<string>('');
    const [started, setStarted] = useState<boolean>(false);
    const [length, setLength] = useState<number>(7);

    const fetchData = async () => {
        setFetched(false);
        setStarted(true);
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0');
        if (response.ok) {
            const data = await response.json();
            if (data[0].length > length) fetchData();
            else {
                setWord(data[0]);
                setFetched(true);
            }
        }
    }

    const increase = () => setLength(length*1 + 1);
    const decrease = () => {
        if (length >= 4)
            setLength(length*1 - 1)
    }

    return (
        <div className={styles.game}>
            <div className={styles.max}>
                <div className={styles.text}>
                    <p>Max word length is {length}</p>
                    {length <= 4 ? <abbr title={"it might take a long time"}>!</abbr> : <abbr style={{opacity: 0}}>.</abbr>}
                </div>
                
                <div className={styles.buttons}>
                    <button onClick={increase}>{`>`}</button>
                    <button onClick={decrease}>{`<`}</button>
                </div>
            </div>
            <button onClick={fetchData} className={styles.button}>
                {started ? `RESTART` : `START`}
            </button>
            {fetched ? <WordGame word={word} /> : started ? <Loading /> : null}
        </div>
    )
}

export default GameHero