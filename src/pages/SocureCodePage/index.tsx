import Content from './hello.mdx'

export const SocureCodePage: React.FC = () => {
    return (
        <div style={{ width: '90vw',height:'100vh', margin: '0 auto' }}>
            <Content rows={2} />
        </div>
    )
}