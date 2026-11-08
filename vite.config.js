import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  plugins: [
    {
      name: 'consoulium-api-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/api/second-thought')) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true, count: 0 }));
            return;
          }
          if (req.url?.startsWith('/api/contributors')) {
            const filePath = path.resolve(process.cwd(), 'public/api/contributors');
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'application/json');
              res.end(fs.readFileSync(filePath, 'utf-8'));
              return;
            }
          }
          next();
        });
      },
    },
  ],
  appType: 'spa',
});


