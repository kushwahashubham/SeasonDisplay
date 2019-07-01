import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';

class App extends Component{

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{console.log(position)},
            (error)=>{console.log(error)}
        );
    
        return  (
            <div>
                <SeasonsDisplay/>
             </div>
        );

    }
    
}

ReactDom.render(<App/>,document.querySelector('#root'));