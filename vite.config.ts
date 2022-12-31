import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { remarkCodeHike } from "@code-hike/mdx"
import { readFile } from 'fs/promises'

export default defineConfig(async () => {
    const theme = JSON.parse(await readFile(new URL('node_modules/shiki/themes/github-dark.json', import.meta.url)) as unknown as string)
    const mdx = await import("@mdx-js/rollup")
    return {
        plugins: [
            react(),
            mdx.default({ remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }]] }),
        ],
        base: './',
        build:{
            outDir:'docs'
        }
    }
})
