import React,{Component} from 'react';

class Spinner extends Component{
    render(){
        return(
            <div class="">
                <div class="ui active dimmer">
                <div class="ui text loader">{this.props.text}</div>
                </div>
                <p></p>
            </div>
        );
    }
}

export default Spinner;