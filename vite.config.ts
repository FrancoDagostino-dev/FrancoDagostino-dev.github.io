import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/FrancoDagostino-dev.github.io/',
  plugins: [react()],
});
