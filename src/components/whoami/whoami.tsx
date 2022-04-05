import React, {useState} from "react"
import TypingEffect from "../../atoms/typingEffect/typingEffect"
import Profile from "../profile/profile"

import {introduce, typing, typingOutput} from "../../utilities/info"

import * as styles from "./whoami.module.scss"
import BashWindow from "../bashWindow/bashWindow"
import sleep from "../../utilities/sleep"

const Whoami = (): JSX.Element => {
 const [show, setShow] = useState<number>(0)
 const [inputOn, setInputOn] = useState<boolean>(false)

 const next = async () => {
  await sleep(500)
  setShow(1)
  await sleep(500)
  setShow(2)
 }

 return (
  <div>
   <h1 className={styles.introduce}>{introduce}</h1>
   <div className={styles.wrap}>
    <div className={styles.profileWrap}>
     <Profile />
    </div>
    <div className={styles.typeWrap} onClick={() => setInputOn(true)}>
     <BashWindow>
      <div className={styles.command}>
       <p>$</p>
       <TypingEffect initialText={typing} heading={false} fast={false} blinkAfter={false} then={next} />
      </div>
      {show > 0 ? <p>{typingOutput}</p> : <></>}
      {show > 1 ? (
       <div className={styles.command}>
        <p>$</p>
        <TypingEffect initialText={" "} blinkAfter={inputOn} />
       </div>
      ) : (
       <></>
      )}
     </BashWindow>
    </div>
   </div>
  </div>
 )
}

export default Whoami
