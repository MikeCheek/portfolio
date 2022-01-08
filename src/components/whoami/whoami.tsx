import React from 'react'
import TypingEffect from '../../atoms/typingEffect/typingEffect'

import * as styles from './whoami.module.scss'

const Whoami = (): JSX.Element => {
    return <div>
            <p className={styles.introduce}>
                /*let me introduce myself*/
            </p>
            <TypingEffect initialText="Hi, I'm Michele Pulvirenti." />
        </div>
    
}

export default Whoami
