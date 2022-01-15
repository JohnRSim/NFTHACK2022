/** @type {import('@sveltejs/kit').Config} */
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
import { imagetools } from 'vite-imagetools';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';",
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    files: {
      hooks: 'src/hooks',
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
        global: {}
      },
      plugins: [
        imagetools({ force: true }),
        nodePolyfills({
          include: [
            '*.js',
           'node_modules/**/*.js',
            new RegExp('node_modules/.vite/.*js')
          ],
          // ↓ Not sure if this line is necessary, seems to work without it
          exclude: ['node_modules/polyfill-nodeglobal.js']
        })
      ],
    },
  },
};

export default config;
