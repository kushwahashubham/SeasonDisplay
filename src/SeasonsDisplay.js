import React from 'react';
import ReactDom from 'react-dom';

const getSeason = (lat,mon)=>{
    if(mon>2&&mon<9){
        if(lat>0)return 'summer';
        else return 'winter';
    }else if(lat>0) return 'winter';
        else return 'summer';

}

const SeasonsDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const text = season === 'winter'? "Burr...it's chilly": "Let's hit the beach"
    return <div>{text}</div>
}

export default SeasonsDisplay;  