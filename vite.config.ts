
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: "react", // Changed from @emotion/react to react
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable SSG/pre-rendering
    ssrManifest: true,
    outDir: 'dist',
    rollupOptions: {
      // Ensure all pages are generated for static hosting
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
}));
