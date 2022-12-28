import { useSearchParams } from "react-router-dom"
import './index.less'
import Mdx from './doc/hello.mdx'
import { useState } from "react"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
export default () => {
    const [params] = useSearchParams()
    const codeMap = [
        {
            title: 'Mini-React',
            doc: [
                {
                    subtitle: '',
                    mdx: Mdx
                }
            ]
        }
    ]
    const [openMenu, setOpenMenu] = useState(false)
    const clickNotPC = () => {
        const width = document.body.clientWidth
        if (width <= 768 && openMenu === true) {
            setOpenMenu(false)
        }
    }
    return (
        <main className="detail-page">
            <section style={{ width: `${openMenu ? '300px' : 0}` }} className="left-menu">

            </section>
            <section className="right-content">
                <div className="content-top-bar">
                    <div className="open-icon" onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? [<MenuUnfoldOutlined />] : [<MenuFoldOutlined />]
                        }
                    </div>
                    <div className="current-subtitle" style={{ paddingRight: `${openMenu && document.body.clientWidth > 786 ? '300px' : 0}` }}>
                        这是标题
                    </div>
                    <div className="open-icon-slot">
                        <MenuUnfoldOutlined />
                    </div>
                </div>
                <div className="content-mdx" onClick={clickNotPC}>
                    <Mdx ></Mdx>
                </div>
            </section>
        </main >
    )
}