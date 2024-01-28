import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import react from '@vitejs/plugin-react';
// import styleImport from 'vite-plugin-style-import';
// import styleResources from 'vite-plugin-style-resources';

// export default {
//   plugins: [
//     react(),
//     styleImport({
//       libs: [
//         {
//           libraryName: 'react-bootstrap',
//           esModule: true,
//           resolveStyle: (name) => `react-bootstrap/${name}/${name}`,
//         },
//       ],
//     }),
//     styleResources({
//       scss: ['@/styles/variables.scss'],
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// };