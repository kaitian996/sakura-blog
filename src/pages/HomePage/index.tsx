import { useEffect, useRef, useState } from 'react'
import { HeaderNav } from '../../components/HeaderNav'
import { Target } from '../../components/Target'
import { Card } from '../../components/Card'
import './index.less'
import icon from './images/icon.jpg' //头像
import sketch from './images/icons/sketch.png' //源码
import code from './images/icons/code.png' //
import startup from './images/icons/startup.png'
import github from './images/icons/github.png'
export default () => {
    const content = useRef<HTMLElement>(null)
    const arrowDown = () => {
        content.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }
    const [letter, setLetter] = useState<string>('')
    const index = useRef(0)
    useEffect(() => {
        const letters: string[] = [
            '山有木兮木有枝，心悦君兮君不知。',
            '人生若只如初见，何事秋风悲画扇。',
            '十年生死两茫茫，不思量，自难忘。',
            '曾经沧海难为水，除却巫山不是云。',
            '平生不会相思，才会相思，便害相思。',
            '愿得一心人，白头不相离。'
        ]
        const timer = setInterval(() => {
            const currentIndex = index.current % letters.length //0-长度
            const currentLetter = letters[currentIndex]
            if (letter.length < currentLetter.length) {
                setLetter(currentLetter.slice(0, letter.length + 1))
            } else {
                setLetter('')
                index.current++
            }
        }, 800)
        return () => clearInterval(timer)
    }, [letter])

    const targetList: { text: string; color: string }[] = [
        {
            text: '前端基建',
            color: 'green'
        },
        {
            text: '代码狂',
            color: 'blue'
        },
        {
            text: '源码mini',
            color: 'orange'
        },
        {
            text: 'react源码',
            color: '#bfa'
        },
        {
            text: 'vue源码',
            color: '#80c8f8'
        },
        {
            text: 'webpack源码',
            color: '#80c8f8'
        },
        {
            text: 'vite源码',
            color: '#80c8f8'
        },
        {
            text: 'babel源码',
            color: '#80c8f8'
        },
    ]
    const cardList: {
        icon: string;
        title: string;
        text: string;
        route: string
    }[] = [
            {
                icon: sketch,
                title: '文章',
                text: '学习不同的知识，领会不同的逻辑',
                route: '/article'
            },
            {
                icon: code,
                title: '源码分析',
                text: '从0到1,构建属于自己的mini源码',
                route: '/socureCode'
            },
            {
                icon: startup,
                title: '在线工具',
                text: '网页版在线工具',
                route: '/util'
            },
            {
                icon: github,
                title: 'github',
                text: '发现更多优质项目',
                route: 'https://github.com/sakura1227'
            }
        ]
    return (
        <div className="home-page">
            <div className="home-cover">
                {/* 头部Nav */}
                <HeaderNav />
                {/* 中间修饰 */}
                <div className="cover-word">
                    <div className="word-top">
                        Sakura Blog
                    </div>
                    <div className="word-bottom">
                        {letter}
                        <span className="input-split">|</span>
                    </div>
                </div>
                {/* 底部按钮 */}
                <div className="arrow-down" onClick={arrowDown}>
                    <svg focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </div>
            </div>
            {/* 内容区 */}
            <main className="home-content" ref={content}>
                <section className="main-content">
                    {/* 左侧卡片区 */}
                    <div className="content-left">
                        {
                            cardList.map((card) => <Card key={card.title} {...card} />)
                        }

                    </div>
                    {/* 右侧个人介绍 */}
                    <div className="content-right">
                        {/* 头部 */}
                        <div className="title-bar">
                            <div className='title-icon'>
                                <img src={icon} alt="" />
                            </div>
                            <div className="title-name">
                                sakura
                            </div>
                            <div className="title-text">
                                <p>Sakura 个人博客</p>
                                <p>源码分析</p>
                                <p>收集多种站内工具</p>
                            </div>
                        </div>
                        <hr style={{ opacity: .5 }} />
                        {/* descrprtion */}
                        <div className="des-bar">
                            <div className='des-target'>
                                <svg focusable="false" className='target-icon' data-icon="tags" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"></path></svg><span>标签</span>
                            </div>
                            <div className="target-container">
                                {
                                    targetList.map(target => <div className="target" key={target.text}><Target text={target.text} color={target.color}></Target></div>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* 底部 */}
            <footer style={{ height: '200px' }}></footer>
        </div>
    )
}