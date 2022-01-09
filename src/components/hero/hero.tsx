import React from 'react'

import * as styles from './hero.module.scss'

import Separator from '../../atoms/separator/separator'
import Section from '../section/section'
import Whoami from '../whoami/whoami'
import TypingEffect from '../../atoms/typingEffect/typingEffect'

const background = (
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate placerat mi at facilisis. Vivamus varius, odio a rutrum auctor, neque nulla porta velit, non commodo erat mauris nec turpis. Nullam sit amet metus non sem posuere ultricies eu sed tellus. Vivamus fermentum tincidunt nisi, pulvinar euismod lorem tristique nec. Sed tempus purus sit amet erat posuere sollicitudin ac ac quam. Integer vulputate tristique mattis. Vestibulum scelerisque dignissim rhoncus. Integer felis sem, cursus ac vulputate eu, fringilla ac quam. Phasellus ac velit vitae tortor vehicula facilisis rhoncus a mauris.'
)

const works = (
    'Duis faucibus commodo orci, at vehicula quam vestibulum et. Suspendisse vehicula malesuada urna facilisis ultricies. In hac habitasse platea dictumst. Suspendisse placerat, ipsum eget sodales eleifend, mi orci vulputate risus, sit amet placerat dolor felis non sapien. Pellentesque sed ultricies eros. Sed diam augue, eleifend et augue eu, maximus dictum mauris. In vestibulum urna faucibus arcu faucibus cursus sit amet vitae elit. Sed ipsum felis, aliquet ut lacus sed, facilisis tristique dolor. Quisque sagittis euismod lorem ac venenatis. Aliquam erat volutpat. Praesent feugiat varius leo id condimentum. Sed lorem leo, suscipit vitae hendrerit nec, egestas ac orci. Ut facilisis eros eget ultrices blandit. Fusce feugiat diam non elit maximus tempus.'
)

const Hero = (): JSX.Element => {
    return (
        <>
            <Whoami />
            <Separator />
            <div className={styles.sectionWrap}>
                <Section title={"My Background"} >
                    <p>{background}</p>
                </Section>
                <Section title={"My Works"} reversed={true} >
                    <p>{works}</p>
                </Section>

            </div>
            <Separator />
        </>
    )
}

export default Hero
