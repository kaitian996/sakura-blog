import './index.less'
import { HeaderNav } from '../../components/HeaderNav'
import { useNavigate } from 'react-router-dom'
export default () => {
    const router = useNavigate()
    const toDetail = (name: string) => {
        router(`/detail?name=${name}`)
    }
    const tagetList = [
        {
            assert: '前端框架',
            items: [
                {
                    title: 'Mini-React',
                    des: '对React的最小主体复现，完整主要流程和功能。',
                    icon: 'https://cdn.docschina.org/home/logo/react.svg'
                },
                {
                    title: 'Mini-Vue',
                    des: '对Vue的最小主体复现，完整主要流程和功能。',
                    icon: 'https://cdn.docschina.org/home/logo/vue.svg'
                }
            ]
        },
        {
            assert: '打包工具',
            items: [
                {
                    title: 'Mini-Webpack',
                    des: '对Webpack的最小主体复现，完整主要流程和功能。',
                    icon: 'https://cdn.docschina.org/home/logo/webpack-offical.svg'
                },
                {
                    title: 'Mini-Babel',
                    des: '对babel的最小主体复现，完整主要流程和功能。',
                    icon: 'https://cdn.docschina.org/home/logo/babel.png'
                },
            ]
        },
        {
            assert: '开发工具',
            items: [
                {
                    title: 'Mini-Vite',
                    des: '对Vite的最小主体复现，完整主要流程和功能。',
                    icon: 'https://vitejs.dev/logo.svg'
                }
            ]
        },
        {
            assert: '后端框架',
            items: [
                {
                    title: 'sakuraframework',
                    des: '自创使用TS的Node后端MVC框架，支持DI，IOC',
                    icon: 'https://cdn.docschina.org/home/logo/typescript.svg'
                },
            ]
        },
        {
            assert: '其它',
            items: [
                {
                    title: 'show.js',
                    des: '基于IntersectionObserver实现的一个js库，实现无线滚动或执行视口动画',
                    icon: 'https://cdn.docschina.org/home/logo/typescript.svg'
                },
            ]
        },
    ]
    return (
        <main className='code-page'>
            <div className='cover-content'>
                <HeaderNav />
                <div className='cover-title'>
                    源码解析
                </div>
            </div>
            <section className='code-area'>
                {
                    tagetList.map((taget) => {
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
                                                <div className="code-content" key={item.title} onClick={()=>toDetail(item.title)}>
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