import { useLocation, useNavigate } from 'react-router-dom'
import './index.less'

export const HeaderNav: React.FC = () => {
    const router = useNavigate()
    const currentRouter = useLocation().pathname

    return (
        <nav className="header-nav">
            <div className="logo-area">
                logo
            </div>
            <div className="nav-area">
                <li onClick={() => router('/home')} className={`nav-item ${currentRouter === '/home' ? 'nav-active' : null}`}>首页</li>
                <li onClick={() => router('/article')} className={`nav-item ${currentRouter === '/article' ? 'nav-active' : null}`}>文章</li>
                <li onClick={() => router('/socureCode')} className={`nav-item ${currentRouter === '/socureCode' ? 'nav-active' : null}`}>源码解析</li>
                <li onClick={() => router('/socureCode')} className={`nav-item ${currentRouter === '/util' ? 'nav-active' : null}`}>在线工具</li>
                <li className="nav-item" >github</li>
            </div>
        </nav>
    )
}