import React from 'react';
import { TextArea } from './textarea';

export class BubblesRight extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: null };
    }


    render() {
        return(
           <div className="BubblesRight">
               <p onChange= { this.props.state }></p>
           </div> 
        );
    }
}