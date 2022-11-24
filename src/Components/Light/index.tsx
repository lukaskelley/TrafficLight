import "./Light.css";
const Light = (props:LightProps) => {
    return(
        <div className="light" style={{backgroundColor: props.color, opacity: props.active ? 1 : 0.4}} />
    )
}

export declare interface LightProps {
    color : string;
    active: boolean;
}

export default Light;