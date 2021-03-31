import React from 'react';
import './appBody.css';

export class AppBody extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.letter = -1;
        this.david = [];
    }

    
    

    handleChange(e) {
        let name = 'Dave Bredesen';
        this.letter++
        let dave = name[this.letter];
        this.david.push(dave);
        let daveName = this.david.join('');
        e.target.value = daveName;
        console.log(e);
    }

    render() {
        return (
            <div>
                <h4>Type your name</h4>
                <input id="name" type="text" onChange={this.handleChange} />
                <p id="description"></p>
            </div>
        )
    }
}