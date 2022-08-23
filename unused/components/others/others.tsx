import React from 'react'
import Section from '../../../src/components/section/section'
import {otherExperiences} from '../../../src/utilities/info'

const Others = (): JSX.Element => {
  return (
    <>
      {otherExperiences.map((other) => {
        return (
          <Section title={other.title} key={other.title} paragraph>
            <p dangerouslySetInnerHTML={{__html: other.text}} />
          </Section>
        )
      })}
    </>
  )
}

export default Others
