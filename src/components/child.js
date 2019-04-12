import AppName,{names as programmers,test,temp} from '../services/first';
import React,{Component} from 'react';

export default class Child extends Component{

    render(){
    let code=programmers.map((x)=>(<li>{x}</li>));
        test();

        return(
            <div style={{backgroundColor:this.props.color,color:this.props.textcolor}}>
                <h1>{AppName}</h1>
                <hr/>
                <h3>Child component is working...!!!</h3>
                <h4><u>Programmers</u></h4>
                <ul>
                      {code}
                </ul>
            </div>
        );
    }
}