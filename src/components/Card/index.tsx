import { useNavigate } from 'react-router-dom';
import './index.less'
interface Card {
    icon: string;
    title: string;
    text: string;
    route: string
}
export const Card: React.FC<Card> = (props) => {
    const router = useNavigate()
    return (
        <section className="card">
            <div className="imgBox">
                <img src={props.icon} alt="" />
            </div>
            <div className="content">
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <div className="go-to" onClick={() => {
                        props.route.startsWith('/') ? router(props.route) : window.location.href = props.route
                    }}>查看</div>
                </div>
            </div>
        </section>
    )
}