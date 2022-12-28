import { HeaderNav } from "../../components/HeaderNav"
import './index.less'
export default () => {
    return (
        <main className="article-page">
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    文章
                </div>
            </div>
        </main>
    )
}