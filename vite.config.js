import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Crypto } from 'node-webcrypto-ossl';

globalThis.crypto = new Crypto();

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
});
