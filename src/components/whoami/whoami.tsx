import React, { useState } from 'react'
import TypingEffect from '../../atoms/typingEffect/typingEffect'
import Profile from '../profile/profile'

import { introduce, typing, typingOutput } from '../../utilities/info'

import * as styles from './whoami.module.scss'
import BashWindow from '../bashWindow/bashWindow'
import sleep from '../../utilities/sleep'

const Whoami = (): JSX.Element => {
    const [show, setShow] = useState<number>(0);

    const next = async () => {
        await sleep(500)
        setShow(1);
        await sleep(500)
        setShow(2)
    }

    return <div>
        <h1 className={styles.introduce}>
            {introduce}
        </h1>
        <div className={styles.wrap} >
            <div className={styles.profileWrap}>
                <Profile />
            </div>
            <div className={styles.typeWrap}>
                <BashWindow>
                    <TypingEffect initialText={typing} heading={false} fast={false} blinkAfter={false} then={next} />
                    {
                        show > 0 ?
                            <p>{typingOutput}</p> : <></>
                    }
                    {
                        show > 1 ?
                            <TypingEffect initialText={'$ '} /> : <></>
                    }
                </BashWindow>
            </div>
        </div>
    </div>

}

export default Whoami
