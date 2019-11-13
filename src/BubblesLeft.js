import React from 'react';

export class BubblesLeft extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Welcome!' };
    }

    render() {

        return(
            <div className="BubblesLeft">
                <p>{this.props.state}</p>
            </div>
        );
    }
     
}


