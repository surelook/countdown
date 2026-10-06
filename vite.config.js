import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    define: {
        GA_TRACKING_ID: JSON.stringify(process.env.GA_TRACKING_ID || '')
    }
});
