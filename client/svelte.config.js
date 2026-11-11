import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({
      // Optional but recommended – forces the runtime
      runtime: 'nodejs26.x'   // or 'nodejs24.x'
    })
  }
};

export default config;