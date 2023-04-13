import Keypad from "./components/Keypad";
import React, { useState, useEffect } from "react";    
import trans from "./components/translit";
import getRandWord from "./components/WordBank";
function App() {

    const [word, setWord] = useState(null)
    const [transliterate, setTransliterate] = useState(null)     
    const [guess, setGuess] = useState(null)   
    

    useEffect(() => {

        if (word === null && transliterate === null) {
            while (true) {
                let randword = getRandWord()
                let translit = trans(randword)
                if (translit.match(/^[A-Za-z]*$/)) {
                    setWord(randword)
                    setTransliterate(translit)
                    break
                }
            }
        }
        if (transliterate === "") {
            setWord(null)
            setTransliterate(null)
            setGuess(null)
        }
        
    }, [transliterate, word])

    function click (l) {
        let guess = l
        if (guess == null) {
            return;
        }
        if (transliterate.substring(0, guess.length) === guess && guess !== "") {
            setGuess((prevGuess) => {
                if (prevGuess !== null)
                    return prevGuess + guess.toUpperCase()
                else 
                    return guess.toUpperCase()
            })
            // console.log("transliterate before", transliterate)
            setTransliterate((prevState) => {
                return prevState.replace(guess, "")
            })        

            // setTurn((prevTurn) => {
            //     return prevTurn + 1
            // })
            // console.log("transliterate after", transliterate)
        } else {
        }

    }


    return (
        <div className="App">
            <div className="word">{word}</div>
            <div className="guess">{guess}</div>
            
            <Keypad click={click}/>
        </div>
    );
}

export default App;
