import './index.less'
interface Target {
    text: string;
    color: string;
    
}
export const Target: React.FC<Target> = (props) => {
    return (
        <li className="target" style={{ color: props.color, border: `1px solid ${props.color} ` }}>
            {props.text}
        </li>
    )
}