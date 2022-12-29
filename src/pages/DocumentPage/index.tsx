import { useEffect, useRef, useState } from "react"
import { HeaderNav } from "../../components/HeaderNav"
import './index.less'
import { docMap } from './docMap'
export default () => {
    const [letter, setLetter] = useState<string>('')
    useEffect(() => {
        const letters: string = '文档'
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
        <main className="document-page">
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    {letter}
                </div>
            </div>
            <section className="document-area">
                {
                    docMap.map(doc => {
                        return (
                            <div className="document-block" key={doc.assert}>
                                <div className="document-assert">
                                    <div className="document-assert-icon">
                                    </div>
                                    <div className="document-assert-title">
                                        {doc.assert}
                                    </div>
                                </div>
                                <div className="document-container">
                                    {
                                        doc.item.map(item => {
                                            return (
                                                <div className="document-content" key={item.title} onClick={()=>window.open(item.ref,'_blank')}>
                                                    <div className="document-icon">
                                                        <img src={item.icon} alt="" />
                                                        <div className="document-pack">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                    <div className="document-des">
                                                        {item.des}
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