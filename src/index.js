import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends Component{

    state ={lat:null,err:null} 
    /* constructor(props){
        super(props);
        this.state = {
            lat:null,
            err:null
        }} */

    conditionalRender = ()=>{
        if(this.state.err) return <Spinner text= {this.state.err}/>;
        else if(this.state.lat) return <div><SeasonsDisplay lat={this.state.lat}/></div>;
         else return (
                <Spinner text ="Please allow location access" />
         );
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
         this.setState({lat: position.coords.latitude});
            },
            (error)=>{
                this.setState({err: error.message});
            }
        );
    }

    render(){
       return(
           <div>
                {this.conditionalRender()}
           </div>
       );
    
       /*  return  (
            <div>
                <SeasonsDisplay/>
             </div>
        ); */

    }
    
}

ReactDom.render(<App/>,document.querySelector('#root'));