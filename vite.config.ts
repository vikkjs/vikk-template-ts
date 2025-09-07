import { defineConfig } from 'vite';

export default defineConfig({
    esbuild: {
        jsx: "transform",
        jsxFactory: "vikk",
        jsxInject: `import vikk from 'vikk'`
    }
});