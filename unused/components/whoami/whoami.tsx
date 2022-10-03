import React, {useRef, useState} from 'react'
import TypingEffect from '../typingEffect/typingEffect'
import Profile from '../profile/profile'

import {commands} from '../../utilities/info'

import * as styles from './whoami.module.scss'
import BashWindow from '../bashWindow/bashWindow'
import sleep from '../../utilities/sleep'
import BigHeading from '@components/bigHeading/bigHeading'

const Whoami = (): JSX.Element => {
  const [show, setShow] = useState<number>(0)
  const [inputOn, setInputOn] = useState<boolean>(false)
  const inputRef = useRef<HTMLParagraphElement>(null)

  const next = async () => {
    await sleep(500)
    setShow((show) => show + 1)
  }

  const handleClick = () => {
    setInputOn(true)
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.click()
    }
    document.addEventListener('keypress', handleKeyboard)
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    //change content of commandRef to the key pressed
    if (inputRef.current) {
      e.preventDefault()
      if (e.key.toUpperCase() === 'ENTER') {
        setInputOn(false)
        window.removeEventListener('keypress', handleKeyboard)
        next()
        commands.push({auto: false, input: '', output: `Stop trying this ahahhahaha`})
      } else if (e.key.toUpperCase() === 'BACKSPACE') {
        inputRef.current.innerHTML = inputRef.current.innerHTML.slice(0, -1)
      } else {
        inputRef.current.innerHTML += e.key
      }
    }
  }

  return (
    <div>
      {/* <p className={styles.introduce}>{introduce}</p> */}
      <BigHeading />
      <div className={styles.wrap}>
        <div className={styles.profileWrap}>
          <Profile />
        </div>
        <div className={styles.typeWrap} onClick={handleClick}>
          <BashWindow>
            <>
              {commands.map((command, index) => {
                return show >= index ? (
                  <span key={index}>
                    <div className={styles.command}>
                      <p>$</p>
                      {command.auto ? (
                        <TypingEffect
                          initialText={command.input}
                          heading={false}
                          // fast={true}
                          blinkAfter={false}
                          then={next}
                        />
                      ) : (
                        <>
                          <p ref={show == index ? inputRef : null}></p>
                          <TypingEffect initialText={' '} blinkAfter={inputOn} />
                        </>
                      )}
                    </div>
                    {show > index ? (
                      <div dangerouslySetInnerHTML={{__html: command.output}} className={styles.output} />
                    ) : (
                      <></>
                    )}
                  </span>
                ) : (
                  <span key={index}></span>
                )
              })}
            </>
          </BashWindow>
        </div>
      </div>
    </div>
  )
}

export default Whoami
