import React, { useState } from 'react'
import Loading from '../atoms/loading/loading';
import WordGame from '../atoms/wordGame/wordGame';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const Game = () => {

    const [fetched, setFetched] = useState<boolean>(false);
    const [word, setWord] = useState<string>('');
    const [started, setStarted] = useState<boolean>(false);
    const [length, setLength] = useState<number>(7);

    const fetchData = async () => {
        setFetched(false);
        setStarted(true);  
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0');
        if(response.ok){
            const data = await response.json();
            if(data[0].length > length) fetchData();
            else {
                setWord(data[0]);
                setFetched(true);
            }      
        }
    }

    const increase = () => setLength(length+1);
    const decrease = () => {
        if(length >= 4)
            setLength(length-1)
    }        

    return (
        <>
            <SEO 
                title={"Word Game"} 
                description={"Play this word game"} 
            />
            <Layout>
                <>
                    <div>
                        <p>Max word length is {length}</p>
                        {length <= 5? <p>(it might take a long time)</p> : null}
                        <button onClick={decrease}>-</button>
                        <button onClick={increase}>+</button>
                    </div>
                    <button onClick={fetchData} id={"button"}>{started? `RESTART`:`START`}</button>
                    {fetched? <WordGame word={word} /> : started? <Loading/> : null}
                </>
            </Layout>
            
        </>
    )
}

export default Game