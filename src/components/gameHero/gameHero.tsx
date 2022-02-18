import React, { useState } from 'react'

import * as styles from './gameHero.module.scss'

import Loading from '../../atoms/loading/loading';
import WordGame from '../../atoms/wordGame/wordGame';

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
            {
                started?
                    <div className={styles.restart}>
                        <p>Guess the word or </p>
                        <button onClick={fetchData} className={styles.buttonRestart}>
                            RESTART
                        </button>
                    </div>
                :
                    <>
                        <h3>RULES</h3>
                        <h4>Game is easy. You have to guess the secret word putting letters in boxes.<br/><br/>
                                <li>If you guess a letter of the word, the box will became <span style={{color: "var(--orange)"}}>orange</span></li>
                                <li>If you guess both letter and position in word, the box will became <span style={{color: "var(--pink)"}}>pink</span></li><br/>
                            On the top you can change the MAX length of the hidden word <br/>(if you set 4 or 3 as length, you might wait a long time)<br/><br/>
                            That's all! Enjoy the game!
                        </h4>
                        <button onClick={fetchData} className={styles.buttonStart}>
                            START
                        </button>
                    </>
            }
            
            {fetched ? <WordGame word={word} /> : started ? <Loading /> : null}
        </div>
    )
}

export default GameHero