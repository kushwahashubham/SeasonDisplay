import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';

class App extends React.Component{

    state ={
        lat: null,
        err:null
    }
    /* constructor(props){
        super(props);
        this.state = {
            lat:null,
            err:null
        }} */

    conditionalRender = ()=>{
        if(this.state.err) return <div>Error: {this.state.err}</div>
       else if(this.state.lat) return <div>Latitude: {this.state.lat}</div>;
       else return <div>Loading ...</div>;
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