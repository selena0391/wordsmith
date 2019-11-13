import React from 'react';
import { BubblesLeft } from './BubblesLeft';
import { BubblesRight } from './BubblesRight';
import './Top.css';

const MESSAGES = [
    
    {

        senderId: 'guevara',
        text: 'Hi'
    },
    {
        senderId: 'anastasiya',
        text: 'Bye'
    },
    {
        senderId: 'chao',
        text: 'yerrr'
    }
    ]

export class Top extends React.Component {

    

    render() {
        return(
            <div className="Top">
                {MESSAGES.map((message, index) => {
                    return(
                        <div>
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}