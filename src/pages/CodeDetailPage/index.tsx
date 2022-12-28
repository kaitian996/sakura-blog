import { useSearchParams } from "react-router-dom"
import './index.less'
import { docMap } from './docMap'
import { useState } from "react"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
export default () => {
    const [params] = useSearchParams()
    const currentDoc = docMap.find((item) => item.title === params.get('name'))
    const [currentIndex, setCurrentIndex] = useState(0)
    const CurrentMDX = currentDoc?.doc[currentIndex].mdx
    const [openMenu, setOpenMenu] = useState(false)
    const clickNotPC = () => {
        const width = document.body.clientWidth
        if (width <= 768 && openMenu === true) {
            setOpenMenu(false)
        }
    }
    return (
        <main className="detail-page">
            <section style={{ width: `${openMenu ? document.body.clientWidth > 768 ? '300px' : '200px' : 0}` }} className="left-menu">
                <div className="menu-title">
                    <div className="title">
                        {currentDoc?.title}
                    </div>
                </div>
                {
                    currentDoc?.doc.map((item, index) => {
                        return (
                            <div className="menu-item" key={item.subtitle} onClick={() => {
                                setCurrentIndex(index)
                                clickNotPC()
                            }}>
                                <div className={`item ${currentIndex === index ? 'item-active' : ''}`}>
                                    {item.subtitle}
                                </div>
                            </div>
                        )
                    })
                }

            </section>
            <section className="right-content">
                <div className="content-top-bar">
                    <div className="open-icon" onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? [<MenuFoldOutlined key={'in'} />] : [<MenuUnfoldOutlined key={'out'} />]
                        }
                    </div>
                    <div className="current-subtitle">
                        {currentDoc?.doc[currentIndex].subtitle}
                    </div>
                </div>
                <div key={'mdx'} className="content-mdx" onClick={clickNotPC}>
                    {CurrentMDX && <CurrentMDX />}
                </div>

            </section>
        </main >
    )
}