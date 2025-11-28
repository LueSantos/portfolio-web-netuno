import { promises as fs } from 'fs';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Caminho de saída para os arquivos gerados (diretório public do Netuno)
const outputBasePath = './../public';

// Nomes dos arquivos de saída específicos para o portfólio
const outputJSPath = 'scripts/portfolio.js';
const outputCSSPath = 'styles/portfolio.css';

export default defineConfig({
  plugins: [
    react(),
    {
      // O mesmo hack para o bug do Ant.Design, mas aplicado ao arquivo do portfólio
      closeBundle: async() => {
        const bundlePath = `${outputBasePath}/${outputJSPath}`
        try {
          let data = await fs.readFile(bundlePath, 'utf-8');
          data = data.replace('function scrollTo(', 'function $_scrollTo_antd_bug_$(');
          await fs.writeFile(bundlePath, data, 'utf-8');
        } catch (error) {
          console.error('Failed to apply Ant.Design bug fix to portfolio bundle:', error);
        }
      }
    }
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      // A entrada agora é o nosso portfolio.html
      input: 'portfolio.html',
      output: {
        format: 'es',
        dir: outputBasePath,
        entryFileNames: outputJSPath,
        assetFileNames: (assetInfo) => {
          // Direciona os arquivos CSS para o nome e local corretos
          if (assetInfo.name.endsWith('.css')) {
            return outputCSSPath;
          }
          // Mantém outras imagens e assets em um local genérico se necessário
          const info = assetInfo.name.split(".");
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name][extname]`;
          }
          return `[name][extname]`;
        },
        chunkFileNames: "portfolio-chunk.js",
        manualChunks: undefined,
      },
      onLog(level, log, handler) {
        if (log.cause && log.cause.message === `Can't resolve original location of error.`) {
          return;
        }
        handler(level, log);
      },
      onwarn: (warning, warn) => {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || warning.code == 'EVAL') {
          return;
        }
        warn(warning);
      }
    }
  }
})
