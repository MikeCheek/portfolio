import React, {useEffect, useState, useRef} from 'react'

import * as styles from './gameHero.module.scss'

import Loading from '../../atoms/loading/loading'
import WordGame from '../../atoms/wordGame/wordGame'
import sleep from '../../utilities/sleep'
import randomWord from '../../utilities/word'
import {GameHeroProps} from './gameHero.types'
import {hashToStr} from '../../utilities/hash'
import Rules from '../../atoms/rules/rules'
// import SettingsSVG from '../../assets/settings.svg'

const GameHero = ({code}: GameHeroProps): JSX.Element => {
  const [fetched, setFetched] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')
  const [started, setStarted] = useState<boolean>(false)
  const [length, setLength] = useState<number>(7)
  const [time, setTime] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)

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

  const useCode = (code: string) => {
    const str = hashToStr(code)
    setWord(str[0].toLowerCase())
    setLanguage(str[1].toLowerCase() == 'e' ? 'en' : 'it')
    setStarted(true)
    setFetched(true)
  }

  const handleStartClick = () => {
    const input = inputRef.current
    if (input && input.value != '' && input.value.length != 0 && input.value != null) useCode(input.value)
    else fetchData()
  }

  useEffect(() => {
    if (code) {
      useCode(code)
    }
  }, [code])

  return (
    <div className={styles.game}>
      <h1 className={styles.heading}>Word Game</h1>
      {time > 0 ? (
        <p className={styles.stats}>
          <span>Fetched in:</span>
          <span>{time.toPrecision(5)} ms</span>
        </p>
      ) : null}
      {/* <SettingsSVG className={styles.setttingsSvg} width={50} fill="var(--orange)" /> */}
      {started ? null : <Rules />}
      <div className={styles.head}>
        <div className={styles.max}>
          <div className={styles.text}>
            <p>Max word length is</p>
          </div>

          <div className={styles.buttons}>
            <button onClick={increase}>{`>`}</button>
            <span>{length}</span>
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

        {started ? null : (
          <div className={styles.code}>
            <p>Do you have any code?</p>
            <input type="text" className={styles.inputCode} ref={inputRef} placeholder={'X-XXXX'} />
          </div>
        )}

        {started ? (
          <div className={styles.restart}>
            <p>Guess the word or </p>
            <button onClick={fetchData} className={styles.buttonRestart}>
              RESTART
            </button>
          </div>
        ) : (
          <button onClick={handleStartClick} className={styles.buttonStart}>
            START
          </button>
        )}
      </div>

      {fetched ? <WordGame word={word} language={language} /> : started ? <Loading /> : null}
    </div>
  )
}

export default GameHero
