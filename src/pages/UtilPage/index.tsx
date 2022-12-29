import { useEffect, useState } from "react"
import { HeaderNav } from "../../components/HeaderNav"
import './index.less'

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
        </main>
    )
}