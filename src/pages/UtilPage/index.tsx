import { HeaderNav } from "../../components/HeaderNav"
import './index.less'

export default () => {
    return (
        <main className="util-page">
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    在线工具
                </div>
            </div>
        </main>
    )
}