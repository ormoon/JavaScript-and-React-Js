import React from 'react'

export default function SecondComponent(props) {
    return (
        <div style={{ margin: '50px', padding: '20px', backgroundColor: 'grey', color: 'white', height: '100px', borderRadius: '5px' }}>
            <p>SecondComponent</p>
            <p>{props.counter}</p>
        </div>
    )
}
