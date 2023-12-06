import { paraglide } from "@inlang/paraglide-js-adapter-vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		paraglide({
			project: "../../project.inlang",
			outdir: "./locales/paraglide",
		}),
	],
})
