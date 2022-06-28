import React, {useState} from 'react'

import * as styles from './gameHero.module.scss'

import Loading from '../../atoms/loading/loading'
import WordGame from '../../atoms/wordGame/wordGame'
import sleep from '../../utilities/sleep'
import randomWord from '../../utilities/word'

const GameHero = (): JSX.Element => {
  const [fetched, setFetched] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')
  const [started, setStarted] = useState<boolean>(false)
  const [length, setLength] = useState<number>(7)
  const [time, setTime] = useState<number>(0)

  const [language, setLanguage] = useState<string>('en')

  const fetchData = async () => {
    setFetched(false)
    setStarted(true)
    await sleep(500)
    const stime = performance.now()
    const data = randomWord(length, language)
    const etime = performance.now()
    setTime(etime - stime)
    setWord(data)
    setFetched(true)
  }

  const increase = () => setLength(length * 1 + 1)
  const decrease = () => {
    if (length >= 4) setLength(length * 1 - 1)
  }

  const changeLanguage = () => {
    if (language === 'en') setLanguage('it')
    else setLanguage('en')
  }

  return (
    <div className={styles.game}>
      {started ? (
        <div className={styles.restart}>
          <p>Guess the word or </p>
          <button onClick={fetchData} className={styles.buttonRestart}>
            RESTART
          </button>
        </div>
      ) : (
        <>
          <h3>RULES</h3>
          <h4>
            The game is easy. <br />
            You guess the secret word by placing letters in boxes.
            <br />
            <br />
            <li>
              When you guess a letter, the box turns <span style={{color: 'var(--orange)'}}>orange</span>
            </li>
            <li>
              When you guess both the letter and the position in the word, the box turns{' '}
              <span style={{color: 'var(--pink)'}}>pink</span>
            </li>
            <br />
            You can change the MAX length and the language of the hidden word at the top. <br />
            <br />
            That's all! Enjoy the game!
          </h4>
        </>
      )}
      <div className={styles.head}>
        <div className={styles.max}>
          <div className={styles.text}>
            <p>Max word length is</p>
          </div>

          <div className={styles.buttons}>
            <button onClick={increase}>{`>`}</button>
            <div>{length}</div>
            <button onClick={decrease}>{`<`}</button>
          </div>
        </div>
        <div className={styles.language}>
          <p>Language </p>
          <button onClick={changeLanguage} className={language.toUpperCase() == 'EN' ? styles.buttonOn : ''}>
            ENGLISH
          </button>
          <button onClick={changeLanguage} className={language.toUpperCase() == 'IT' ? styles.buttonOn : ''}>
            ITALIAN
          </button>
        </div>
        {time > 0 ? <p>Word fetched in: {time.toPrecision(8)} ms</p> : null}
      </div>

      {!started ? (
        <button onClick={fetchData} className={styles.buttonStart}>
          START
        </button>
      ) : (
        <></>
      )}

      {fetched ? <WordGame word={word} language={language} /> : started ? <Loading /> : null}
    </div>
  )
}

export default GameHero
