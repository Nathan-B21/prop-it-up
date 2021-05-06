import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            ageState: props.age
        }
    }
    render(){
        console.log("*********",this.props);
        let {name, age, hair} = this.props;

        const ageButton = () =>{
            this.setState({ageState: this.state.ageState+1})
            console.log("Clicked age button, this is the ages variable -->", age)
        }
        return(
        <div>
            <h1>{name}</h1>
            <p>Age: {this.state.ageState}</p>
            <p>Hair Color:  {hair}</p>
            <p><button className="btn-success" onClick={ageButton}>Birthday Button for {name}</button></p>
        </div>
        )
    }
}
export default PersonCard;