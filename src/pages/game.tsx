import React from 'react'
import GameHero from '../components/gameHero/gameHero';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const Game = () => {

    return (
        <>
            <SEO 
                title={"Word Game"} 
                description={"Play this word game"} 
            />
            <Layout>
                <GameHero />
            </Layout>
            
        </>
    )
}

export default Game