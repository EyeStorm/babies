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
    "revision": "d86f2cba93afda3942b2faeda745c0f4"
  },
  {
    "url": "api/cli.html",
    "revision": "52f51cac7305d32e41780d05d0b6cc5c"
  },
  {
    "url": "api/node.html",
    "revision": "6510f5064be971413a556c5a13d8a6a5"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.0de7181e.css",
    "revision": "c3253294374cb23efaac9e7f64abe966"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.51de73b1.js",
    "revision": "0e772b25d120319a24a4b02cdb4dfb7e"
  },
  {
    "url": "assets/js/10.549a5f97.js",
    "revision": "93bf1f19739a97c8bbbae8ccb26f7ee8"
  },
  {
    "url": "assets/js/100.ad029697.js",
    "revision": "c6668ed2f04f420f89c8e5a1dc02068a"
  },
  {
    "url": "assets/js/101.bb2c7543.js",
    "revision": "fe98271cb9455f0266087e2f61864685"
  },
  {
    "url": "assets/js/102.57a67af9.js",
    "revision": "4b20460e741f23191d79fc26c4a15cc6"
  },
  {
    "url": "assets/js/103.f710eed0.js",
    "revision": "e7d33cadffc298f9f6d8d11fc899b392"
  },
  {
    "url": "assets/js/104.3a46d4a2.js",
    "revision": "c2ddd011d71d2bfe13bffbd5332a0c25"
  },
  {
    "url": "assets/js/105.abcc740d.js",
    "revision": "2276f792a61e96faa82adf0db6157941"
  },
  {
    "url": "assets/js/106.d32ad3b6.js",
    "revision": "f23be578e6769bc66022373024f7ad28"
  },
  {
    "url": "assets/js/107.ce6cbbe9.js",
    "revision": "30a8a9723b457a6439fb1eadc7d54a98"
  },
  {
    "url": "assets/js/108.50607475.js",
    "revision": "83e8cb832d897cc6e1c2c44c75392196"
  },
  {
    "url": "assets/js/109.7b7e8299.js",
    "revision": "3cfd6f2f9fdc7cd1424711594d8ce524"
  },
  {
    "url": "assets/js/11.d7b31fdb.js",
    "revision": "4ff947dbbb34dc347d2ee5ebd6dfcbdb"
  },
  {
    "url": "assets/js/110.996536f3.js",
    "revision": "318e6e55560b7070c3eff31077024915"
  },
  {
    "url": "assets/js/111.b412c12b.js",
    "revision": "190dfe372c64de0c991d43f19acbcc8d"
  },
  {
    "url": "assets/js/12.4e7f23df.js",
    "revision": "18d717a73b2f1fcb13c57f85bcc194d4"
  },
  {
    "url": "assets/js/13.ab095a5b.js",
    "revision": "15f57673174136ceb9356ad04958cfe6"
  },
  {
    "url": "assets/js/14.25cd7ddc.js",
    "revision": "e159a78eae8d81977b86cb6adc09ad03"
  },
  {
    "url": "assets/js/15.c3557e00.js",
    "revision": "d48f76cedfa4be6206612a88b3535962"
  },
  {
    "url": "assets/js/16.d0fff743.js",
    "revision": "12106ce07eb40790e3fb65c27f56e269"
  },
  {
    "url": "assets/js/17.71350594.js",
    "revision": "785acf66a6b62430c5e7a72c52f3d992"
  },
  {
    "url": "assets/js/18.060e33fc.js",
    "revision": "94aeea7e086f03cfc3a9187fd137d912"
  },
  {
    "url": "assets/js/19.c45650e3.js",
    "revision": "2d01053f9b5176974381c36e2b659879"
  },
  {
    "url": "assets/js/2.82468cb0.js",
    "revision": "4fd38fc65800d3092cc8f09f410b9fe9"
  },
  {
    "url": "assets/js/20.9256e509.js",
    "revision": "f6b51cff8dda8f17328ecb6a188a04eb"
  },
  {
    "url": "assets/js/21.e2a38e73.js",
    "revision": "708fbe779d7fdc09ead2501a651d0318"
  },
  {
    "url": "assets/js/22.f435bd7c.js",
    "revision": "72936fcabf96a70b1164158a41fe1873"
  },
  {
    "url": "assets/js/23.08c65f76.js",
    "revision": "a0d06792b8b45828251ab2b0ffc92b77"
  },
  {
    "url": "assets/js/24.6f31e8b5.js",
    "revision": "4cf62853514872885d70d8588e1a6c1b"
  },
  {
    "url": "assets/js/25.37f75051.js",
    "revision": "5e0a4f43c2849c3b06b31a62431da9e8"
  },
  {
    "url": "assets/js/26.671815eb.js",
    "revision": "d3d252bf143699b5db1cf45abf997fc5"
  },
  {
    "url": "assets/js/27.2ff7f021.js",
    "revision": "5b1cf650cb06c4b99a2ddbc40ce5292c"
  },
  {
    "url": "assets/js/28.489a5d8d.js",
    "revision": "93685c139ec5ed0d1b37c0ca0dffda2c"
  },
  {
    "url": "assets/js/29.705e595f.js",
    "revision": "2766bf9905d590814753648dadbe9c57"
  },
  {
    "url": "assets/js/30.91c067ca.js",
    "revision": "b00a4fb0314d7d9b369fdff2cb764351"
  },
  {
    "url": "assets/js/31.98d7b5f8.js",
    "revision": "719c8cabc6f5c34b5ea26ceb206d5efa"
  },
  {
    "url": "assets/js/32.83143e1c.js",
    "revision": "48650ed0eed9d00a9f4e7f2eb3d2314e"
  },
  {
    "url": "assets/js/33.4c549565.js",
    "revision": "675de972658cadc0e6f787904b0cb90f"
  },
  {
    "url": "assets/js/34.602d0736.js",
    "revision": "1af87892dcac7b3c0ba4a16176291986"
  },
  {
    "url": "assets/js/35.b61dc13e.js",
    "revision": "8736ac2dcbe09005a590d89f69261a99"
  },
  {
    "url": "assets/js/36.5e0d7508.js",
    "revision": "b1118808a9a8d893e354fe79f9067773"
  },
  {
    "url": "assets/js/37.cd1d5cda.js",
    "revision": "cea891e0340ab3d4ca45921dda5d7dd5"
  },
  {
    "url": "assets/js/38.003f9e67.js",
    "revision": "5b5d456495c1235cc5ccdcc9e4ad1563"
  },
  {
    "url": "assets/js/39.678645d7.js",
    "revision": "eebc25e978377dd4a7fc2571a3f8a1eb"
  },
  {
    "url": "assets/js/40.88fbf890.js",
    "revision": "fe6d7fba778267bcff44898fcce53b49"
  },
  {
    "url": "assets/js/41.9e4024f1.js",
    "revision": "c24ea0cb69bcfaa3044bc5607b22fbe8"
  },
  {
    "url": "assets/js/42.c68dee56.js",
    "revision": "3b7e5821d8fb57d9c67e7a38f7fe51f0"
  },
  {
    "url": "assets/js/43.725ce3e1.js",
    "revision": "f32525c1c4c4ac9c8fefd4cc67a2b7e6"
  },
  {
    "url": "assets/js/44.30852d63.js",
    "revision": "edd369c9ea52481e10d4164d7c16c181"
  },
  {
    "url": "assets/js/45.6e95baf3.js",
    "revision": "31e347493817805c958bbe671cbe3816"
  },
  {
    "url": "assets/js/46.73aa5e62.js",
    "revision": "9e7c152131ceb2d93fa5675e25509370"
  },
  {
    "url": "assets/js/47.32657b08.js",
    "revision": "0c07d689bb42f547c4b548436d1a1ab3"
  },
  {
    "url": "assets/js/48.1eba6674.js",
    "revision": "b522029a90c4598dcc77486bad93d4bf"
  },
  {
    "url": "assets/js/49.5e117098.js",
    "revision": "e7be19758406d4ec87bba01a413562c1"
  },
  {
    "url": "assets/js/50.b9e05d3f.js",
    "revision": "00661bd2d6c65c8925ec455f0fdc111a"
  },
  {
    "url": "assets/js/51.0dcdfdbf.js",
    "revision": "6a4a251a202e2d0caf7768634156c44f"
  },
  {
    "url": "assets/js/52.733bdb2d.js",
    "revision": "3e49cf9e965c252e2eabfb2b6fee6bb2"
  },
  {
    "url": "assets/js/53.2b1c8098.js",
    "revision": "c2305c5594173a163a14baf0220d79e5"
  },
  {
    "url": "assets/js/54.19b2b88a.js",
    "revision": "e2344beaba6030eb709267a5ebcb2c2b"
  },
  {
    "url": "assets/js/55.f885be2e.js",
    "revision": "8cdaa9d996ea3d00b26710218c85c514"
  },
  {
    "url": "assets/js/56.6ae10044.js",
    "revision": "5dd2718b69d9252edc482ea76154fd01"
  },
  {
    "url": "assets/js/57.3bfc0b68.js",
    "revision": "8790cae929b165212f81d425597e57ea"
  },
  {
    "url": "assets/js/58.840db26e.js",
    "revision": "22c1fdb24c14de8196d16209756fd28f"
  },
  {
    "url": "assets/js/59.32df5cb1.js",
    "revision": "757b079632d99994cf766f3b734a6f2e"
  },
  {
    "url": "assets/js/60.e3dbdc85.js",
    "revision": "13211fb9ef1e0d8deb4ef02493e56efe"
  },
  {
    "url": "assets/js/61.8019c2bf.js",
    "revision": "8c86d7c452db5138de86c04b3d6fd765"
  },
  {
    "url": "assets/js/62.4924f47d.js",
    "revision": "516da6a5a1d1dafe33282c85419c76dd"
  },
  {
    "url": "assets/js/63.0a0cb13f.js",
    "revision": "67cc5531b6fa002d13de1a8755497c76"
  },
  {
    "url": "assets/js/64.e9f9730e.js",
    "revision": "a07947eaeea7a02213c9aee9211d2a8c"
  },
  {
    "url": "assets/js/65.540b1630.js",
    "revision": "7f9ef24379194280dad5f2aa7965a913"
  },
  {
    "url": "assets/js/66.687c182d.js",
    "revision": "00a914317f8ae85ce1243c680e26be03"
  },
  {
    "url": "assets/js/67.9e85b954.js",
    "revision": "3b79aaaeb271c29dc5f2ff337632b543"
  },
  {
    "url": "assets/js/68.336c46d5.js",
    "revision": "565f1a4cb804330ab92c6e8cb8975b92"
  },
  {
    "url": "assets/js/69.c3cde7de.js",
    "revision": "f83b78c4c061ddf07038ebd8c7b675c3"
  },
  {
    "url": "assets/js/7.7f887e09.js",
    "revision": "0336e9fe16948f89c93848fe4db6cad6"
  },
  {
    "url": "assets/js/70.5b0b4055.js",
    "revision": "d7f1b097870b565d21490ac9002ad57e"
  },
  {
    "url": "assets/js/71.959ace5a.js",
    "revision": "a9b44a88806eb20c367f94f0f71491f4"
  },
  {
    "url": "assets/js/72.cfd33916.js",
    "revision": "2db6442d29e560fbb51035586c0375e5"
  },
  {
    "url": "assets/js/73.a86c7598.js",
    "revision": "072fef484c6a23ea76d01d39c52258a6"
  },
  {
    "url": "assets/js/74.dec6261c.js",
    "revision": "a28920ddd0e798f4d43cc964ffb2f051"
  },
  {
    "url": "assets/js/75.b900adec.js",
    "revision": "d8d514d0d751b53f3d147e273a0e8cba"
  },
  {
    "url": "assets/js/76.2e057782.js",
    "revision": "68eb3e47774b9bd91c1c1aebc71dac4c"
  },
  {
    "url": "assets/js/77.ce2eab59.js",
    "revision": "8820f24c993ac8a6c3e16514a893c782"
  },
  {
    "url": "assets/js/78.41a94f48.js",
    "revision": "c4fd9e64cc64e848f08450e573594f3b"
  },
  {
    "url": "assets/js/79.0a76a81d.js",
    "revision": "9e8ca7344ebca5f412835e6bd43e8720"
  },
  {
    "url": "assets/js/8.e648ad8d.js",
    "revision": "e7d7936c57e1669add09a5ebfb8bbdbc"
  },
  {
    "url": "assets/js/80.58e34cb5.js",
    "revision": "a7d2f0f8fed2e5e70ef96c9768369fd6"
  },
  {
    "url": "assets/js/81.ea761bd0.js",
    "revision": "b63e85a3dc39a16581c2d840b0745544"
  },
  {
    "url": "assets/js/82.8ce9c93f.js",
    "revision": "9bd7fc3ace3986aa622fc1da016a1990"
  },
  {
    "url": "assets/js/83.5bae5270.js",
    "revision": "8cacc3a5339bfd38241332cd9cf4eba3"
  },
  {
    "url": "assets/js/84.cc74ccf2.js",
    "revision": "8fe8da8c270efeef6abc611d4903284d"
  },
  {
    "url": "assets/js/85.3de8ffca.js",
    "revision": "c349311984e96327de5b6e0ecb5ccc82"
  },
  {
    "url": "assets/js/86.928577a7.js",
    "revision": "2b978751b89f4983d81b70591ca1dd90"
  },
  {
    "url": "assets/js/87.bbc5e4af.js",
    "revision": "a378db0cb1bdef589817821e19adaa51"
  },
  {
    "url": "assets/js/88.8e23a6e0.js",
    "revision": "e4cd416248117797714138f03aeab9fb"
  },
  {
    "url": "assets/js/89.3b4070a0.js",
    "revision": "8fd5eb2257da0d8bc3233a94a6f6f4c1"
  },
  {
    "url": "assets/js/9.87d6fda4.js",
    "revision": "f5df6557e1b32791104a81ec35a389e0"
  },
  {
    "url": "assets/js/90.99d7153b.js",
    "revision": "0ef4c93d84ca65b7a391e8ba96fa22ac"
  },
  {
    "url": "assets/js/91.66230c7d.js",
    "revision": "7eb9c68ec00a904b85be20b0a2ceed2a"
  },
  {
    "url": "assets/js/92.0909a522.js",
    "revision": "00105682375d0f7214842b24dfb66f0b"
  },
  {
    "url": "assets/js/93.5dd33513.js",
    "revision": "9f83e807f52aa141ec65c5614864598d"
  },
  {
    "url": "assets/js/94.a3d2bc02.js",
    "revision": "66e1663caa73ac6d47db436ebed465fe"
  },
  {
    "url": "assets/js/95.867da775.js",
    "revision": "a6ba303f2c1e42a87074d1f948a8fef1"
  },
  {
    "url": "assets/js/96.da1697f2.js",
    "revision": "1f76d6c57a6888dd5a72cef6caeea268"
  },
  {
    "url": "assets/js/97.b8478adb.js",
    "revision": "6bb0d57848e7dd4f259e9bdfca0fb2e0"
  },
  {
    "url": "assets/js/98.a731e34d.js",
    "revision": "5e86a79d59ffc86bc725e3b71bf2d0c1"
  },
  {
    "url": "assets/js/99.2aa09a82.js",
    "revision": "63df8055b699fccc369ace0136d08dcf"
  },
  {
    "url": "assets/js/app.f54016fd.js",
    "revision": "2860a5b3fa9fcfe9c570818778cf9849"
  },
  {
    "url": "assets/js/vendors~docsearch.67853650.js",
    "revision": "e92662cd2f0dbe4f9806d7389222b760"
  },
  {
    "url": "assets/js/vendors~flowchart.c0a916c4.js",
    "revision": "2b03a4e7a1514461a6f1d8d4f70d93d1"
  },
  {
    "url": "assets/js/vendors~notification.f6b11634.js",
    "revision": "9807a9ea3ef5ab6ac33a3eca1a6d482b"
  },
  {
    "url": "config/index.html",
    "revision": "fa840442a70cb75712d545c3f51e660f"
  },
  {
    "url": "faq/index.html",
    "revision": "c1af3b9e52055011b1594a7b7c3cd067"
  },
  {
    "url": "guide/assets.html",
    "revision": "7a57727f6e46047f9ddc359591a842af"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e951a1f675d12b5b97c43dd9e1a2d9c6"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2aa8c30406eb84953956f8f130091326"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "d45c45329fa4de79326bde28919e09e9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "2cb9745b06fdd18424ee1ba6188e4742"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa2b3170cce398694547b7732b0d9a6d"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "94fbca31940dbd4ec6f1208198b3bd73"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4fa04bcac83a7ce93dc696c0c3748bae"
  },
  {
    "url": "guide/index.html",
    "revision": "ebc63327566d272387f2e932d967f4a0"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "ae6aa75a71bbf02cff7237d3fc6b5ef7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d15aec5a7b5251529d39ea92f1d85923"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "062b5c6e312a8776f3fd10762e8ba17f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "407b0a068191db4c23fb866b189f5dae"
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
    "revision": "f5e29007c494f90b38bf4ac015d1a075"
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
    "url": "miscellaneous/design-concepts.html",
    "revision": "b782380e2cec9d0575a79d5b0f68718d"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "4b85a7f5b69e7601bce09b62d9425889"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "68dcfc926eaec370aeca8c2b89f04acc"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "021a13d25eebf5787c703b3489beefd7"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "35dd831947893a4ea42a53988a0800c6"
  },
  {
    "url": "plugin/index.html",
    "revision": "7769cc2e6939c26d53c9ea6ce7d15d95"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "3915911419486b880261c4c1e410e427"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "7457a272ec849efceba491f6a4773a4c"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "80945c881800d7d65a9a02569463b0e2"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "a848ffb469235e9ee902eaefb1abd86e"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "6fab3812f17df7bd71df6768db165523"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "d65d0f55b044c19ef71e8a7ef9b0197b"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "fe8f5e9ae5a3a0358ff26d2349a39a8a"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "19615c7f41a0bd5c7fc48a17e6db454c"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "dfc7106805ad39503efc93eb76c67e11"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "8131b01cf6a2517c5de4dbd74cf503be"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "f89f441d4cec2c1a97f3059a73c5a159"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "b1abe4c4b5ea70e7b3ce17031df4efbe"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "6319bf74a84afa27afb215ccf38d08d6"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "a111f674d42d305545835c97a6bcfda3"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "22f36831589a9cee3e22d9fb75cf44a2"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "d0614d64021d41f4da6cccecf4b4d896"
  },
  {
    "url": "theme/index.html",
    "revision": "94d322835669479037ee85f2519eac79"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "9b78fe01bd4eab1210cc23ccb3298084"
  },
  {
    "url": "theme/option-api.html",
    "revision": "bf6384c38133b560b9ee67d1a3f432ca"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "0270336d0d8d8758f31cafa9e3372191"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "6f71e8a253facd369bed80304da7a93d"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "04b2ff5f0d12381a897ccb8de24ea5f8"
  },
  {
    "url": "zh/api/node.html",
    "revision": "a2180a661d2f72c54c9a2d6d25ae15be"
  },
  {
    "url": "zh/config/index.html",
    "revision": "c01cb9cc27681b13640321331b30a8ba"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a64d7d7c25052c8c5db75e693361e660"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f7f678d877959322b199e157aa727109"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "259e7edaa62286ac12c5fcad74e1cdbd"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "80dd9a4152626ac142e8ea36c15b0fd0"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "924f16db56eb672bcaaadde1444fc3eb"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2f8cfe0ee9f9b890da379707e9e8c3be"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "50b98dd20a9213d11ade72fc293aad9c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "fe25d39d53d4a2e8ad3dc296ae6820bc"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "38038ba3c45aa3fe765d355afaf2b47b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "63664b49f7f888388488567a3c230b87"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "c56d3f15f6316e40ce92381143fc490b"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "00f38c22ec4ec7c9b0ed073f13e3cc9d"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "9a177bda8e0f13e4a8d2367dd22453f7"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "08c8126b11effd675472f3c2dab68f64"
  },
  {
    "url": "zh/index.html",
    "revision": "66078b98e543b5cd3ccd0fc8c529508b"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "a567a688dd3c23631c1147f6997ebb64"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "e475fbdfadf194d03a3bb4cbbd7ab685"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "46259381ccfba443fcaf138e9540cb53"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "d0eb80a92fca8bd7599d3ff6543e4261"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "8b96dd202c5d59995baef208951e632c"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "78e8b9d8fcd7f2d6c63ad8d47e72f964"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "3149caf31e9ca27aa505b573f3385b71"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "1eebcd5c44250eb75c025f65c4f7d557"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "858e73945d954348d271bcf59a166e67"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "2f456a25eaf0e3b38612f5bb7c882a80"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "b046ea0a9f6dfb046b68d53af0221dc3"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "fb94d71d307672a238795d722a627d75"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "80f53553c5a59693a4eb838113a6bca7"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "61e735d3e3b45fe5562a28e30acfcd45"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "2fbc6eb8e95a80355382a2e28f3438fe"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "0351dcc203619b1824bf9b656ad99c20"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "6299028b78a7a46d11bc3562f9bd4007"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "ac1b4afbe5121e58af5cc1be12c038c2"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "11c861fe55d2d19b7e554355a853d63c"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "48292c8339a908c26a316549f9a19349"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "23a739fbaeb0bb936ffafcbe9732ac7a"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "81b193e4a75fd27eee8c0a42eaa2fdf0"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "3c11f4b090da73f328ff2e7003edee90"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "dd50d0e6eaf84dcb24eeeac0847b9142"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "1afbe001017d6251983cbdd12af35483"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "63739fe23bc2203e2c3a6d0d9c7463a8"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "dc5994039e8395152a8f349d8a81787e"
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
