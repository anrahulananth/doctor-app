if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const c=e=>t(e,a),r={module:{uri:a},exports:o,require:c};s[a]=Promise.all(i.map((e=>r[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T4wmkwhztB8iMG-dyIrgv/_buildManifest.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/T4wmkwhztB8iMG-dyIrgv/_middlewareManifest.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/T4wmkwhztB8iMG-dyIrgv/_ssgManifest.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/d64684d8-49b964625f453836.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/main-8bae53092cee6ed6.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/pages/_app-f1af2cfbcfae323c.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/pages/_error-c60cc56eb593f436.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/pages/index-9c9730068db11842.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/chunks/webpack-5f560f1d224fa4aa.js",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/_next/static/css/c0f1d93316777e7d.css",revision:"T4wmkwhztB8iMG-dyIrgv"},{url:"/assets/fonts/Poppins/OFL.txt",revision:"69045d03afdf61aeb37246af6001af9c"},{url:"/assets/fonts/Poppins/Poppins-Black.ttf",revision:"0573b9231a8316427ad6e751b52e87a4"},{url:"/assets/fonts/Poppins/Poppins-BlackItalic.ttf",revision:"3fb21c8084013f3d0176bc98bcf76e60"},{url:"/assets/fonts/Poppins/Poppins-Bold.ttf",revision:"a3e0b5f427803a187c1b62c5919196aa"},{url:"/assets/fonts/Poppins/Poppins-BoldItalic.ttf",revision:"09775bde3e9448b38c063b746e21cb6b"},{url:"/assets/fonts/Poppins/Poppins-ExtraBold.ttf",revision:"544fa4f2678a8285eb88b8dfe503c90c"},{url:"/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf",revision:"29f7dd016eeed2bcd79ba482eb3f27ec"},{url:"/assets/fonts/Poppins/Poppins-ExtraLight.ttf",revision:"86a2f13e91ac85080ebaeaab9463b9f1"},{url:"/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf",revision:"05139b6509a2baa8f188fbade78fc3ed"},{url:"/assets/fonts/Poppins/Poppins-Italic.ttf",revision:"5e956c44060a7b3c0e39819ae390ab15"},{url:"/assets/fonts/Poppins/Poppins-Light.ttf",revision:"f6ea751e936ade6edcd03a26b8153b4a"},{url:"/assets/fonts/Poppins/Poppins-LightItalic.ttf",revision:"1eaf3af47612e6163a2e27e847c6ac7d"},{url:"/assets/fonts/Poppins/Poppins-Medium.ttf",revision:"f61a4eb27371b7453bf5b12ab3648b9e"},{url:"/assets/fonts/Poppins/Poppins-MediumItalic.ttf",revision:"1749e4b603749026393f64506a3bcbbe"},{url:"/assets/fonts/Poppins/Poppins-Regular.ttf",revision:"8b6af8e5e8324edfd77af8b3b35d7f9c"},{url:"/assets/fonts/Poppins/Poppins-SemiBold.ttf",revision:"4cdacb8f89d588d69e8570edcbe49507"},{url:"/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf",revision:"378a091bc1b1e6e6d6327beb6bfb07b9"},{url:"/assets/fonts/Poppins/Poppins-Thin.ttf",revision:"25cd0f688f815bc4f6ac2b71eb6278ba"},{url:"/assets/fonts/Poppins/Poppins-ThinItalic.ttf",revision:"c93e22e98b7a8d58f83ce42b278815eb"},{url:"/assets/images/diva-care.png",revision:"e8819c7f52427d4772b6d5b625b8c0cd"},{url:"/assets/images/doctors-section-doctor.png",revision:"1996ec7734cf9c4436b6e3b42befd00f"},{url:"/assets/images/landing-section-doctor.png",revision:"187b7f73599eb12b40f9a53ade805bd5"},{url:"/assets/images/location-screenshot.png",revision:"4bc8a4f9a0e8a0b04db23dd4a7733fda"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"eba0fdd4eb092a7bb2763ae98d64800f"},{url:"/robots.txt",revision:"6c0c0b02c59a0e5b43917105fbeae507"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
