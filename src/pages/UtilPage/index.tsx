import { useEffect, useState } from "react"
import { HeaderNav } from "../../components/HeaderNav"
import './index.less'
import { utilMap } from './utilMap'

export default () => {
    const [letter, setLetter] = useState<string>('')
    useEffect(() => {
        const letters: string = '在线工具'
        const timer = setInterval(() => {
            if (letter.length < letters.length) {
                setLetter(letters.slice(0, letter.length + 1))
            } else {
                clearInterval(timer)
            }
        }, 600)
        return () => clearInterval(timer)
    }, [letter])
    return (
        <main className="util-page">
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    {letter}
                </div>
            </div>
            <section className='util-content'>
                <div className="util-title">
                    实用工具大全
                </div>
                <div className="util-box">
                    {
                        utilMap.map(util => {
                            return (
                                <div className="util-card" key={util.title}>
                                    <div className="card-title">
                                        {util.title}
                                    </div>
                                    <div className="card-des">
                                        {util.des}
                                    </div>
                                    <div className="card-button" onClick={()=>window.open(util.ref,'_blank')}>
                                        开始使用
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="util-buttom">
                    <hr />
                    <div className="util-not">其它网站收集，仅供个人使用</div>
                </div>
            </section>
        </main>
    )
}