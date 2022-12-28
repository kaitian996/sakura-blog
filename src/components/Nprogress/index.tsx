import { useEffect } from "react"
import nprogress from "nprogress";


export const Nprogress: React.FC = () => {
    useEffect(() => {
        nprogress.start()
        return () => {
            nprogress.done()
        }
    }, [])
    return (
        <>
        </>
    )
}