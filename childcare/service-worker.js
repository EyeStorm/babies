/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eca159ec5ab9c532972632379596b83b"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.74eb1b78.css",
    "revision": "ab79cde3acf36f36b82059161c86bcfe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7a9fa24.js",
    "revision": "2654d158101695a6892ef786a2c3e4dc"
  },
  {
    "url": "assets/js/10.8d192416.js",
    "revision": "e7338880a1b630a96d81801612348d23"
  },
  {
    "url": "assets/js/11.4675fa16.js",
    "revision": "3bd196fcfa6129b2ab1b64eb14c7f83b"
  },
  {
    "url": "assets/js/12.fc29ed6f.js",
    "revision": "b7efa17c09200f0966888fac8b9ae2fc"
  },
  {
    "url": "assets/js/13.47c60071.js",
    "revision": "cf470125ce4203370b76009b0679aba5"
  },
  {
    "url": "assets/js/14.815b825f.js",
    "revision": "470ac0c9731af0b347a1f8010c8f1bc1"
  },
  {
    "url": "assets/js/15.13733896.js",
    "revision": "d15ae84ccdf173b0c0b699dc46798ce6"
  },
  {
    "url": "assets/js/16.95a44d4a.js",
    "revision": "cedd59a04dd78a687fc6051f9a9691fb"
  },
  {
    "url": "assets/js/17.b97a6638.js",
    "revision": "1f38fd33d4233b94981bbda45bb4d57e"
  },
  {
    "url": "assets/js/18.a0f85ed9.js",
    "revision": "3a2a567add6af9e533169788381d0ee6"
  },
  {
    "url": "assets/js/19.c60679d6.js",
    "revision": "1e8b9b3d54a22347113b37353978cf07"
  },
  {
    "url": "assets/js/20.eba261f8.js",
    "revision": "961a51342b575caef058c69925adefba"
  },
  {
    "url": "assets/js/21.11e473ab.js",
    "revision": "35d3e60bec02f443fcebb34322c82345"
  },
  {
    "url": "assets/js/22.cbb8ef28.js",
    "revision": "c09037d02eb8dcc5186ba0afc7aced47"
  },
  {
    "url": "assets/js/23.0ad0d358.js",
    "revision": "b133c582a08ee2cd35ba869293bd3aba"
  },
  {
    "url": "assets/js/24.9189406d.js",
    "revision": "a519880da5e9e734c977696d75eaad31"
  },
  {
    "url": "assets/js/25.69dff2e0.js",
    "revision": "685110018b6f855b388bffaa9a7af85c"
  },
  {
    "url": "assets/js/26.456c3973.js",
    "revision": "d4dc14a759336136f6a811bb8a1985cf"
  },
  {
    "url": "assets/js/27.2779f223.js",
    "revision": "0674524480360eebfea82b2333745fc3"
  },
  {
    "url": "assets/js/28.7e931e78.js",
    "revision": "a4456957bdebc7a05e57e5e035920d10"
  },
  {
    "url": "assets/js/29.69104a0b.js",
    "revision": "54ba84774f0c60397a7681104d688e68"
  },
  {
    "url": "assets/js/30.96e6ae06.js",
    "revision": "59a151bebceec6b7e72f5c8e3bf2d3c3"
  },
  {
    "url": "assets/js/31.38120353.js",
    "revision": "d308e4e5f1e047ce8ff8dbf0572b4435"
  },
  {
    "url": "assets/js/32.33f71e0d.js",
    "revision": "ead5280b61bdf57840c7ebc5235ac222"
  },
  {
    "url": "assets/js/33.80597778.js",
    "revision": "4da484366f1a0271d43c1ec3a158ff52"
  },
  {
    "url": "assets/js/34.d0c6c888.js",
    "revision": "2ca68fb621c3d5d731c3ded90241d498"
  },
  {
    "url": "assets/js/35.8bd8e55b.js",
    "revision": "fdbd387f268a18a89bebcb9d9a71bdb3"
  },
  {
    "url": "assets/js/36.9735c60d.js",
    "revision": "54b7c548526c7b8c04637c69735bc97c"
  },
  {
    "url": "assets/js/37.8bf83e69.js",
    "revision": "cb976f2adb8b66c8f8b99b06b3499813"
  },
  {
    "url": "assets/js/38.01513e84.js",
    "revision": "0d517fc946f069da5e8b53b0b53377da"
  },
  {
    "url": "assets/js/39.d83dcc77.js",
    "revision": "3cf65ac1f217e72736410c3ab43ef1c7"
  },
  {
    "url": "assets/js/40.f1dead35.js",
    "revision": "6abf884451b68cfbc169ecb7a7698299"
  },
  {
    "url": "assets/js/5.b424d43f.js",
    "revision": "904e1899df62c9b97a9fda77cd75c5ca"
  },
  {
    "url": "assets/js/6.57a26f76.js",
    "revision": "fefdef810547083c9c5fe9de5e6e7237"
  },
  {
    "url": "assets/js/7.d788dc9e.js",
    "revision": "719ffb3be9e12918fca408c674e2bacd"
  },
  {
    "url": "assets/js/8.afd6cde7.js",
    "revision": "d464a196b96ceb5c875fb9d4d60b4aef"
  },
  {
    "url": "assets/js/9.eec0972e.js",
    "revision": "25bc8863bf7812e16599e48747dc922b"
  },
  {
    "url": "assets/js/app.c6bb8e39.js",
    "revision": "4a67f5f13264c5729ce7609f24f413a0"
  },
  {
    "url": "assets/js/vendors~flowchart.79646067.js",
    "revision": "d825011d729ac04b86eed68e0149d453"
  },
  {
    "url": "assets/js/vendors~notification.1fe07ba4.js",
    "revision": "b6b91bdb0914a8fb46f231e3c8c4f4c5"
  },
  {
    "url": "batlote/index.html",
    "revision": "0983d70d496e0179afe652ea77ead417"
  },
  {
    "url": "batlote/tutorial/chap-01.html",
    "revision": "baef99b3766585ef1699f3968a05ca58"
  },
  {
    "url": "batlote/tutorial/chap-02.html",
    "revision": "0cc6ee42433665e52dc2abf9d87ad6d0"
  },
  {
    "url": "batlote/tutorial/chap-03.html",
    "revision": "085fe974e6d185626f656bcd87d05344"
  },
  {
    "url": "batlote/tutorial/chap-04.html",
    "revision": "1fe1a03b10848232c233f4ecf662ff8d"
  },
  {
    "url": "batlote/tutorial/chap-05.html",
    "revision": "629f5ebf6fbc63feb180b968ace31265"
  },
  {
    "url": "batlote/tutorial/chap-06.html",
    "revision": "0dbb35784ebebc831fc74b2251445b6a"
  },
  {
    "url": "batlote/tutorial/chap-07.html",
    "revision": "d7cbe167987921bf693671b00a3cdda3"
  },
  {
    "url": "batlote/tutorial/chap-08.html",
    "revision": "abcff2e5734d3dd1afce66da71c58305"
  },
  {
    "url": "batlote/tutorial/chap-09.html",
    "revision": "e1f7fd036b2c3148f7a4d41f07caba69"
  },
  {
    "url": "batlote/tutorial/chap-10.html",
    "revision": "80710064ad5ddecfa5c55829a1c07e39"
  },
  {
    "url": "batlote/tutorial/chap-11.html",
    "revision": "f327b9821fb068fee16fce2679c21a0f"
  },
  {
    "url": "batlote/tutorial/chap-12.html",
    "revision": "7bbccd2279be0ae5ca0a06eadb472f64"
  },
  {
    "url": "batlote/tutorial/chap-13.html",
    "revision": "d496695c482c325d8ddd96853269a4d3"
  },
  {
    "url": "batlote/tutorial/chap-14.html",
    "revision": "e75f7a27b5edd7fafe91e4d7f3aacd92"
  },
  {
    "url": "batlote/tutorial/chap-15.html",
    "revision": "161e24f48e5be67644a7007a75a5fb26"
  },
  {
    "url": "batlote/tutorial/chap-16.html",
    "revision": "207107b4b2c8d3e0cb8382cda452d52c"
  },
  {
    "url": "batlote/tutorial/chap-17.html",
    "revision": "7d67ec0005780ac962a16253f1a03789"
  },
  {
    "url": "batlote/tutorial/chap-18.html",
    "revision": "3d2971b664b56eef1889d883c7282883"
  },
  {
    "url": "batlote/tutorial/chap-19.html",
    "revision": "f9be87314fc032c2bec4ad370ffd0ef1"
  },
  {
    "url": "batlote/tutorial/chap-20.html",
    "revision": "0adfb2b01b1e68e3f31ff554186ee887"
  },
  {
    "url": "batlote/tutorial/chap-21.html",
    "revision": "3d3ea18bd05c24517e2f0a551b121775"
  },
  {
    "url": "batlote/tutorial/chap-22.html",
    "revision": "4a8fd00611ea4879b56346eb379b19a7"
  },
  {
    "url": "batlote/tutorial/chap-23.html",
    "revision": "03351173e87b38f29eddde4bcf6e88bb"
  },
  {
    "url": "batlote/tutorial/chap-24.html",
    "revision": "bff9312a1e4a99daa85ab9d2bf7959e9"
  },
  {
    "url": "batlote/tutorial/chap-25.html",
    "revision": "542c457e5eacea2166f6070fe1da720f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b74b0a12ddf8583e1fe78122f891843c"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/logo-120.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "icons/logo-144.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/logo-152.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/logo-192.png",
    "revision": "9a179cefe47da4d12f77b5fa7f40574a"
  },
  {
    "url": "icons/logo-256.png",
    "revision": "855ae63a627fc234bd95c72870631722"
  },
  {
    "url": "icons/logo-384.png",
    "revision": "25329d7d1332311e314e1b3ccd3f869a"
  },
  {
    "url": "icons/logo-512.png",
    "revision": "b74b0a12ddf8583e1fe78122f891843c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "4be3988c65da970d78a53f8f8552cca6"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "7dcf11a40b1b0c99e392d9921b5ca713"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "b6a8df6aec012cd69629263f97e3240c"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "9a6086548224effb03fd23a017db9442"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
