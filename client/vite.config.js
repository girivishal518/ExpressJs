import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     // "/":{
  //     //   target:"http://localhost:3300/",
  //     //   changeOrigin:true,
  //     //   proxy1:console.log("this is procy from"),
        
  //     // },
  //     "/Form":{
  //       target:"http://localhost:3300/submit",
  //       changeOrigin:true,
  //       proxy1:console.log("this is procy from"),
        
  //     }
      
  //   }
  // }

})
