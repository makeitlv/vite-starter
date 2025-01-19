import {defineConfig} from 'vite';
import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';

/** @see https://stackoverflow.com/a/77913374 */
function build() {
    return {
        name: 'build',
        enforce: 'post',
        generateBundle(options, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === 'asset' && typeof file.source === 'string') {
                    file.source = file.source.replace(/\/assets\//g, 'assets/');
                    file.source = file.source.replace(/type="module"/g, '');
                    file.source = file.source.replace(/crossorigin/g, '');
                }
            }
        }
    };
}

export default defineConfig({
    base: '/',
    plugins: [
        vituum(),
        twig({
            root: 'src',
        }),
        build(),
    ],
    build: {
        outDir: 'public',
    },
    publicDir: 'src/assets',
    server: {
        port: 8080,
        host: '0.0.0.0'
    },
});
