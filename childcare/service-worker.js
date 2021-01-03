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
    "revision": "e723539afdc44bfb1b7bcc60293b6a4f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.46fd2da8.css",
    "revision": "472d42fd2530c6a98e9d2415f07fd272"
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
    "url": "assets/js/10.63efb848.js",
    "revision": "1768fb0e2c79a1095d7aa2ef9fdc0253"
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
    "url": "assets/js/15.edc189b0.js",
    "revision": "57254c99331e3248716ecb29533e6082"
  },
  {
    "url": "assets/js/16.1c255857.js",
    "revision": "b32038a6f3f4be814a9663c6af2a23c7"
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
    "url": "assets/js/33.04318839.js",
    "revision": "87f8ea3accaa43b7752c67046f449732"
  },
  {
    "url": "assets/js/34.d0c6c888.js",
    "revision": "2ca68fb621c3d5d731c3ded90241d498"
  },
  {
    "url": "assets/js/35.a1b615b2.js",
    "revision": "aff8c68fab928c2ff1c72ae691da797a"
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
    "url": "assets/js/9.ecf2fc66.js",
    "revision": "70a701d4d1256b4db563edadff04131f"
  },
  {
    "url": "assets/js/app.a038a729.js",
    "revision": "9ac72aa3303442b889972061b757302c"
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
    "revision": "37a17c52ecc56f7cc006707fc8ab764e"
  },
  {
    "url": "batlote/tutorial/chap-01.html",
    "revision": "498e8bb7e826b8782541aa17726dcc33"
  },
  {
    "url": "batlote/tutorial/chap-02.html",
    "revision": "387d1ff9b1e2f9c03783d61aaa1bd0ed"
  },
  {
    "url": "batlote/tutorial/chap-03.html",
    "revision": "71025178845f5c961c670e5f3c5fedf1"
  },
  {
    "url": "batlote/tutorial/chap-04.html",
    "revision": "82988e34cb6387c7fa9216fc0902b4dc"
  },
  {
    "url": "batlote/tutorial/chap-05.html",
    "revision": "19c0dcd477091f72c043d5df51a47eca"
  },
  {
    "url": "batlote/tutorial/chap-06.html",
    "revision": "e672edee0802de45fbd43390caa674b2"
  },
  {
    "url": "batlote/tutorial/chap-07.html",
    "revision": "b9b4c7d0c8634da635ba5a2edd487bcf"
  },
  {
    "url": "batlote/tutorial/chap-08.html",
    "revision": "2d48cbde32f97605c35c5547a3e7c3f7"
  },
  {
    "url": "batlote/tutorial/chap-09.html",
    "revision": "3ed49175dfdb40671ae347f5cda1b821"
  },
  {
    "url": "batlote/tutorial/chap-10.html",
    "revision": "ac66aa9ef7ef2106cd4c7d20cb82aef1"
  },
  {
    "url": "batlote/tutorial/chap-11.html",
    "revision": "6e66a0f5552d2f4fb080c49f4da401d5"
  },
  {
    "url": "batlote/tutorial/chap-12.html",
    "revision": "3d46090674a8338c8e220788903d6919"
  },
  {
    "url": "batlote/tutorial/chap-13.html",
    "revision": "620c5bd2965fa9897b6f69c27f83162b"
  },
  {
    "url": "batlote/tutorial/chap-14.html",
    "revision": "bedf2f235d56790377b7334cd9e14d12"
  },
  {
    "url": "batlote/tutorial/chap-15.html",
    "revision": "29a20e1935a10cd92dd014498b63ea2d"
  },
  {
    "url": "batlote/tutorial/chap-16.html",
    "revision": "607360667ab2d48f33de28d25a35b0ce"
  },
  {
    "url": "batlote/tutorial/chap-17.html",
    "revision": "3076eea5ea94afa26f9d193037a60a25"
  },
  {
    "url": "batlote/tutorial/chap-18.html",
    "revision": "ee09c38b06a601951f769330bac3baee"
  },
  {
    "url": "batlote/tutorial/chap-19.html",
    "revision": "631be6315c9d61dd729b14fe09bbd296"
  },
  {
    "url": "batlote/tutorial/chap-20.html",
    "revision": "3cff514bb34ace1e04031aa484be8da2"
  },
  {
    "url": "batlote/tutorial/chap-21.html",
    "revision": "246afdc0efbaab37bf8fd5f513740d74"
  },
  {
    "url": "batlote/tutorial/chap-22.html",
    "revision": "d7c5e1864b71332638683866d71c7790"
  },
  {
    "url": "batlote/tutorial/chap-23.html",
    "revision": "87cc688936cdd95048b27a54fa9c5b43"
  },
  {
    "url": "batlote/tutorial/chap-24.html",
    "revision": "915b142a1cee5694b470309d8772a9d5"
  },
  {
    "url": "batlote/tutorial/chap-25.html",
    "revision": "1fc6306b484454910413ba3f2112ca05"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d5ce6c667705c46b18868ef7bc8c7611"
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
    "revision": "cf23526f451784ff137f161b8fe18d5a"
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
