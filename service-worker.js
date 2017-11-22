"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","f31152537105faafa28970122f62b9d7"],["/portfolio/static/css/main.0207d797.css","d6ee99eedd64ddb225a458091662ea14"],["/portfolio/static/js/main.762bd7a2.js","d74d1196d6c9fdc23dc5ea7b65e069cc"],["/portfolio/static/media/Boat.f7627084.svg","f76270841267af8ab92b23501740436d"],["/portfolio/static/media/CSSfile.8b4ebc6c.svg","8b4ebc6c80f4e5020f2d2194d029f55d"],["/portfolio/static/media/CalculatorApp.dc068977.png","dc0689772815b7498d8f4ad5d62ae78b"],["/portfolio/static/media/GreenCloud.fd8ad1d5.svg","fd8ad1d5d24ef4d179f36c4410d8f60f"],["/portfolio/static/media/HTMLfile.13de3f9b.svg","13de3f9bdffdd5ec59aff8359e363e02"],["/portfolio/static/media/JSfile.5df7f8f0.svg","5df7f8f0696baeefb7e8b4b0e87080ac"],["/portfolio/static/media/MediflectionApp.79a0177f.png","79a0177fc043d9033955a3c1b12b2f7d"],["/portfolio/static/media/OrangeCloud.6dfd1e3f.svg","6dfd1e3fdf4a5ff784dbe6b27956bb45"],["/portfolio/static/media/PurpleCloud.106804c0.svg","106804c035cc2883d8f099a2eb647561"],["/portfolio/static/media/RedCloud.656b03cb.svg","656b03cbb9f2be6d20b17a084ac6ce14"],["/portfolio/static/media/ResumeApp.3723d3e0.png","3723d3e0a9cb7be12233a5a44b0c6105"],["/portfolio/static/media/WeatherApp.f243576a.png","f243576aa9933ce4b278591903e6eb1a"],["/portfolio/static/media/arrow-down.0946f642.svg","0946f642a5db663e0f98a5c3026e1003"],["/portfolio/static/media/bigandfreshWebsite.5ca3bbfb.png","5ca3bbfbc403b8654889e73cedccbe6b"],["/portfolio/static/media/crab.ed74954b.svg","ed74954b5391638dffebefb7a435cb26"],["/portfolio/static/media/dardenWebsite.b82efc67.png","b82efc67b5660028ae67144d54ebc38f"],["/portfolio/static/media/email.1a71f3ff.svg","1a71f3fff70844bad83a52444db2d9f5"],["/portfolio/static/media/jQueryLogo.0e046a0f.svg","0e046a0fdcf7366f8da6d4b0e6ec3d17"],["/portfolio/static/media/mailtoTrackerWebsite.0fd0ca4e.png","0fd0ca4e09cbaf51b932226d3824082a"],["/portfolio/static/media/middlemanLogo.e5019a62.svg","e5019a62ba04fb33e2b7ac5eb09792dd"],["/portfolio/static/media/reactLogo.57501e75.svg","57501e7534ae593a16a0fac64da3d8a5"],["/portfolio/static/media/sand.c831aa08.svg","c831aa08d6aaf3e5a4a2fda14e9430ff"],["/portfolio/static/media/sunshine4u.03dd9341.svg","03dd93417478c9485407d64f85e818c5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});