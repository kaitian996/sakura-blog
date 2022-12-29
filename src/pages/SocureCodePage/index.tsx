import './index.less'
import { HeaderNav } from '../../components/HeaderNav'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { codeMap } from './codeMap'
export default () => {
    const router = useNavigate()
    const toDetail = (name: string) => {
        router(`/detail?name=${name}`)
    }
    const [letter, setLetter] = useState<string>('')
    useEffect(() => {
        const letters: string = '源码解析'
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
        <main className='code-page'>
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    {letter}
                </div>
            </div>
            <section className='code-area'>
                {
                    codeMap.map((taget) => {
                        return (
                            <div className="code-block" key={taget.assert}>
                                <div className="code-assert">
                                    <div className="code-assert-icon"></div>
                                    <div className="code-assert-title">
                                        {taget.assert}
                                    </div>
                                </div>
                                {/* 内容 */}
                                <div className="code-container">
                                    {
                                        taget.items.map(item => {
                                            return (
                                                <div className="code-content" key={item.title} onClick={() => toDetail(item.title)}>
                                                    {/* 图标 和文字*/}
                                                    <div className="code-icon">
                                                        <img src={item.icon} alt="" />
                                                        <div className="code-pack">{item.title}</div>
                                                    </div>
                                                    {/* 描述 */}
                                                    <div className="code-des">
                                                        {item.des}
                                                    </div>
                                                    <div className="code-link">
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </main>
    )
}