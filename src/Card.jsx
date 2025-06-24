import { useState } from 'react';
import './Card.css'

function Card(prop){
    const [isActive, setIsActive] = useState(false);
    name = prop.name.replace("/public/gallery/", "")
    return(
        <>
            <div className={isActive ? "overlay_active" : "overlay_deactive"}>
                <div />
                <button onClick={()=>{setIsActive(false)}}>close</button>
                <img src={prop.src} key={prop.key} />
            </div>
            <button onClick={()=>{setIsActive(true)}} className='card'>
                <img src={prop.src} key={prop.key} />
                <p>{name.replace(".png", "")}</p>
            </button>
        </>
    );
}

export default Card