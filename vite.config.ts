import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { remarkCodeHike } from "@code-hike/mdx"
//@ts-ignore
import theme from "./public/github-dark.json"
export default defineConfig(async () => {
    const mdx = await import("@mdx-js/rollup")
    return {
        plugins: [
            react(),
            mdx.default({ remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }]] }),
        ]
    }
})
