import React, { } from 'react'

export default function Keypad({ click }) {
    // const letters = ([
    //     "a", "b", "c", "d", "e", 
    //     "f", "g", "h", "i", "j",
    //     "k", "l", "m", "n", "o", 
    //     "p", "r", "s", "t", "u",
    //     "v", "x", "z"
    // ])
    // const letters = ([
    //     "e", "r", "t", "u", "i", "o", "p",
    //     "a", "s", "d", "f", "g", "h", "j", "k", "l", 
    //     "z", "x", "c", "v", "b", "n", "m"

    // ])
    const row1 = ([
        "e", "r", "t", "u", "i", "o", "p"
    ])
    const row2 = ([
        "a", "s", "d", "f", "g", "h", "j", "k", "l"
    ])
    const row3 = ([
        "z", "x", "c", "v", "b", "n", "m"
    ])

    function handleClick(l) {
        click(l)
    }
    return (

        <div className="keypad">
            <div className="keyrow">
                {row1.map((l) => {
                    return (
                        <div key={l} className="key" onClick={() => { handleClick(l) }}>{l.toUpperCase()}</div>
                    )
                })}
            </div>
            <div className="keyrow">
                {row2.map((l) => {
                    return (
                        <div key={l} className="key" onClick={() => { handleClick(l) }}>{l.toUpperCase()}</div>
                    )
                })}
            </div>
            <div className="keyrow">
                {row3.map((l) => {
                    return (
                        <div key={l} className="key" onClick={() => { handleClick(l) }}>{l.toUpperCase()}</div>
                    )
                })}
            </div>
        </div>
    )
}