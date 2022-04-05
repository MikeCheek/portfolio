import React from "react"
import {otherExperiences} from "../../utilities/info"
import Section from "../section/section"

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
