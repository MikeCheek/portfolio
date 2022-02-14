import React from 'react'
import Section from '../section/section'

const Others = () => {
    
    return (
        <>
            {
                others.map((other) => {
                    return <Section title={other.title} key={other.title} paragraph>
                       <p dangerouslySetInnerHTML={{__html: other.text}} />
                    </Section>
                })
            }
        </>
    )
}

export default Others

const others = [
    { 
        title: "JEISM - JE Italy Summer Meeting (2021)", 
        text: `// Event between Italian Junior Enterprises<br/><br/>
                // Location: Gabicce, Marche<br/><br/>
                // Duration: 3 days<br/><br/>
                /*<br/> It was a <strong>great opportunity</strong> to discuss with guys
                    from <strong>different</strong> Junior Enterprises and for getting
                    to know the <strong>partner companies</strong> of the event
                    through daily workshops.<br/>
                    A stimulating workshop was organized by Open
                    Marketplace on the theme of Open Innovation <br/>*/`
    },
    { 
        title: "SysE2021 - Summer School (2021)", 
        text: `/* Orientation event on the Master's degree
                        organized by the University of Genova in
                        collaboration with University of Savoie Mont
                        Blanc and carried out in English */<br/><br/>
                // Location: Imperia, Liguria<br/><br/>
                // Duration: 5 days<br/><br/>
                /*<br/> Thanks to the <strong>Hackathon</strong> held during the event,
                    I <strong>improved my knowledge skills</strong> of scientific
                    calculation language such as Matlab and Simulink <br/>*/`
    },
]
