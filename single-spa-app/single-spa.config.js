//This file is where you register all of the applications that will be part of the main single page app

import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();