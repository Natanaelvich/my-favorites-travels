if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo.png",revision:"f1dc696cc6403568f3f645fc35664686"},{url:"/Seo.png",revision:"0bd7947e1161276bf49a816e518e0c1f"},{url:"/SeoSmall.png",revision:"8648d6a4302e3ba9c57bcfad1848ea65"},{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/12.9593a7c3c435a0287773.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/1312491824b4c7b0fec42e7c159a53044ee1fcd5.5263239e66fe9bba06ea.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/commons.58afc6ae916b323e2640.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/framework.e48280befedc86156291.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/main-c3f809b56639d24804e9.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/pages/%5Bslug%5D-82246f5393e7df2038ab.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/pages/404-7f80c0aafb426df3bdde.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/pages/_app-ef9ad804adc87889f12e.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/pages/_error-c5e9f0641e14761ecebe.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/pages/index-0559727cc0a8e0a2c9f0.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/polyfills-8a95e710217664a42390.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/chunks/webpack-c716a929d5f31ddfdb27.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/xC7iyg6GRuv0amRO_kwE9/_buildManifest.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/_next/static/xC7iyg6GRuv0amRO_kwE9/_ssgManifest.js",revision:"xC7iyg6GRuv0amRO_kwE9"},{url:"/favicon.ico",revision:"3ed30adf4241a0ee8bee4b851625378a"},{url:"/manifest.json",revision:"ac07c57b456579878ee2888950bc6ac7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
