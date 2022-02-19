import React from 'react'
import TypingEffect from '../../atoms/typingEffect/typingEffect'
import Profile from '../profile/profile'

import { introduce, typing } from '../../utilities/info'

import * as styles from './whoami.module.scss'

const Whoami = (): JSX.Element => {
    return <div>
        <p className={styles.introduce}>
            {introduce}
        </p>
        <div className={styles.wrap} >
            <div className={styles.profileWrap}>
                <Profile />
            </div>
            <div className={styles.typeWrap}>
                <TypingEffect initialText={typing} heading={true} fast={false} />
            </div>
        </div>
    </div>

}

export default Whoami
