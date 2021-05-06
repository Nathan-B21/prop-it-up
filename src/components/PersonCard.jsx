import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        console.log("*********",this.props);
        const {name, age, hair} = this.props;
        return<div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color:  {hair}</p>
            
        </div>
    }
}
export default PersonCard;