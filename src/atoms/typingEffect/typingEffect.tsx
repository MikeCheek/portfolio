import React, {useState, useEffect} from "react"
import sleep from "../../utilities/sleep"

import * as styles from "./typingEffect.module.scss"
import {TypingEffectProps} from "./typingEffect.types"

const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const TypingEffect = ({
 initialText,
 heading = false,
 fast = true,
 blinkAfter = true,
 then = () => null,
}: TypingEffectProps): JSX.Element => {
 const array: string[] = Array.from(initialText)
 const [text, setText] = useState<string>("")
 const [noBlink, setNoBlink] = useState<boolean>(false)

 let tmpString: string = ""
 const min: number = 0
 const max: number = fast ? 10 : 100

 const write = async (): Promise<void> => {
  await sleep(500)
  for (let i = 0; i < array.length; i++) {
   tmpString += alphabet[randomLetter()]
   setText(tmpString)
   await sleep(randomTime())
   tmpString = tmpString.slice(0, -1)
   tmpString += alphabet[randomLetter()]
   setText(tmpString)
   await sleep(randomTime())
   tmpString = tmpString.slice(0, -1)
   tmpString += array[i]
   setText(tmpString)
   await sleep(randomTime())
  }

  if (!blinkAfter) {
   await sleep(randomTime())
   setNoBlink(true)
  }

  then()
 }

 const randomTime = (): number => {
  let rand = min + Math.random() * (max - min)
  rand = Math.floor(rand)
  return rand
 }

 const randomLetter = (): number => {
  let rand = 0 + Math.random() * (alphabet.length - 1)
  rand = Math.floor(rand)
  return rand
 }

 useEffect(() => {
  write()
 }, [])

 return (
  <>
   {heading ? (
    <h1 id={"typing"} className={styles.headingText}>
     {text}
    </h1>
   ) : (
    <p id={"typing"} className={noBlink && !blinkAfter ? styles.paragraphTextNoBlink : styles.paragraphText}>
     {text}
    </p>
   )}
  </>
 )
}

export default TypingEffect
