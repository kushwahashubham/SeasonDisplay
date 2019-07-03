import React from 'react';
import './SeasonsDisplay.css';

const getSeason = (lat,mon)=>{
    if(mon>2&&mon<9){
        if(lat>0)return 'summer';
        else return 'winter';
    }else if(lat>0) return 'winter';
        else return 'summer';

}

const SeasonsDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const text = season === 'winter'? "Burr...it's chilly": "Let's hit the beach";
    const iconname = season === 'winter'? "snowflake": "sun";
    return <div className={`season-display  ${season}`}>
        <i className={` icon-left massive ${iconname} loading icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconname} loading icon`}></i>
        </div>
}

export default SeasonsDisplay;  