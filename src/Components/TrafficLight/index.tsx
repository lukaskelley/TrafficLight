import React, {useEffect, useState} from "react";
import Light from "../Light";
import "./TrafficLight.css";

const lightDurations = [1000, 2000, 3500];

const TrafficLight = (props:TrafficLightProps) => {
    const [activeColor, setActiveColor] = useState<number>(props.initNumber);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveColor((activeColor + 1) % 3);
        }, lightDurations[props.initNumber ? (activeColor + 1) % 3 : activeColor]);
        return () => {
          clearTimeout(timer);
        };
    });
    return(
        <div className="traffic-light__box">
            <Light color="red" active={activeColor === 0} />
            <Light color="yellow" active={activeColor === 1} />
            <Light color="green" active={activeColor === 2} />
        </div>
    )
}


export declare interface TrafficLightProps {
    initNumber : number;
}

export default TrafficLight;