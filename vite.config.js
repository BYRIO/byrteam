import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ ssrBuild }) => {
    return {
        base: './',
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'static/[hash].[ext]',
                    entryFileNames: `static/[hash].js`,
                    chunkFileNames: `static/[hash].js`,
                },
            },
        },
        esbuild: {
            charset: 'utf8',
        },
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver({ importStyle: 'css', ssr: ssrBuild })],
            }),
            splitVendorChunkPlugin(),
        ],
    };
});
