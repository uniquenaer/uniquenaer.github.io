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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2ff098f2bdc21abfc23ca2ef1736135"
  },
  {
    "url": "assets/css/0.styles.32b66682.css",
    "revision": "2233c5c3c371082e0a0e4cf5fd06d412"
  },
  {
    "url": "assets/img/2.8c3cb683.png",
    "revision": "8c3cb6831a80e597428d05cff372c5a4"
  },
  {
    "url": "assets/img/auth.12591190.jpg",
    "revision": "12591190ddc22d9a6087fe7e2cd91fde"
  },
  {
    "url": "assets/img/authority_and_models1.ddb63250.png",
    "revision": "ddb63250e2698c37d3db0d224d47bc85"
  },
  {
    "url": "assets/img/authority_and_models2.4019a2d5.png",
    "revision": "4019a2d5f91250773df11f38ba88d8ad"
  },
  {
    "url": "assets/img/authority_and_models3.1655caf4.png",
    "revision": "1655caf4e85d20599fa23a5fd478aa67"
  },
  {
    "url": "assets/img/authority_and_models4.d81d1922.png",
    "revision": "d81d192226b15fbdc16c3b7b899ef049"
  },
  {
    "url": "assets/img/authority_and_models5.b5933a88.png",
    "revision": "b5933a8851b48274e06bcb9a3eda791d"
  },
  {
    "url": "assets/img/book.f0817f79.png",
    "revision": "f0817f79121fcbc50a40d3409fd70834"
  },
  {
    "url": "assets/img/book1.8b43039a.png",
    "revision": "8b43039aa16ea93cd8970919ca9180fb"
  },
  {
    "url": "assets/img/book2.97762978.png",
    "revision": "97762978a80578184d82a2f572275291"
  },
  {
    "url": "assets/img/book3.1feb8c91.png",
    "revision": "1feb8c91cf52e40b0710238ca1761a02"
  },
  {
    "url": "assets/img/book4.5c71844b.png",
    "revision": "5c71844b792e06246e652e17818a81e7"
  },
  {
    "url": "assets/img/book5.06451b4b.png",
    "revision": "06451b4bfdb01cda42e9100d09c902e1"
  },
  {
    "url": "assets/img/book6.d5065bb3.png",
    "revision": "d5065bb3c58ff94efc09afce5598ef6c"
  },
  {
    "url": "assets/img/bottom-logo.385a53c5.png",
    "revision": "385a53c555d8bbd74606d693943ff0c8"
  },
  {
    "url": "assets/img/lin-table.8b4b93b1.jpeg",
    "revision": "8b4b93b1f57f96c93a86cf27c68582f5"
  },
  {
    "url": "assets/img/res2.f488bd4d.png",
    "revision": "f488bd4dc2fd23187a2d0b7c22d6c6c2"
  },
  {
    "url": "assets/img/search.9e8df4f9.svg",
    "revision": "9e8df4f9a86c7d1f229aabc6c7f4f34b"
  },
  {
    "url": "assets/img/structure.838e9b20.png",
    "revision": "838e9b20352909d69933cdafcc934a27"
  },
  {
    "url": "assets/js/10.2fabea8f.js",
    "revision": "da8924477272c86376185640c43f9db7"
  },
  {
    "url": "assets/js/11.bb28ef39.js",
    "revision": "a1ac92097a86ee41672ab3184fc6af28"
  },
  {
    "url": "assets/js/12.6df783fa.js",
    "revision": "02c845b6c563f42de57a97ec53a4954e"
  },
  {
    "url": "assets/js/13.1ebc8083.js",
    "revision": "b9432f026d93107745157f32712d393a"
  },
  {
    "url": "assets/js/14.a5cf6b63.js",
    "revision": "18bca746a761e310c86bf667b5118e62"
  },
  {
    "url": "assets/js/15.b663dbf0.js",
    "revision": "0bcfd562e0d823cb66cb548a1f1ffda2"
  },
  {
    "url": "assets/js/16.efe0a9a7.js",
    "revision": "a2d2418d179bc386808ab6cc15e3277f"
  },
  {
    "url": "assets/js/17.4697c9db.js",
    "revision": "f74f105f697557535787c57702949060"
  },
  {
    "url": "assets/js/18.babd3f94.js",
    "revision": "af6b94314856a0dda4df55595ca0261a"
  },
  {
    "url": "assets/js/19.3168d3d7.js",
    "revision": "05cb41e6b6576b92c3e02027aaa400fc"
  },
  {
    "url": "assets/js/2.d62d4ff9.js",
    "revision": "69879fa9121a5496ad13b684249cd66a"
  },
  {
    "url": "assets/js/20.92fe233b.js",
    "revision": "2f7be43b7768d6326e448a711dd22659"
  },
  {
    "url": "assets/js/21.116e62cc.js",
    "revision": "f114dbda731af8608bdd60ce8316eae5"
  },
  {
    "url": "assets/js/22.c1a16a7c.js",
    "revision": "7b466367dcb33052f055fabd5b50be1a"
  },
  {
    "url": "assets/js/23.a1aed0ac.js",
    "revision": "a55afb127016057d6c2189cda74a3da4"
  },
  {
    "url": "assets/js/24.b0a62875.js",
    "revision": "bf2f6465954338a8de0a7c5f83085cae"
  },
  {
    "url": "assets/js/25.3ad846cd.js",
    "revision": "350012b6cc56c0f83904ce3e58720536"
  },
  {
    "url": "assets/js/26.4cdf21f1.js",
    "revision": "cd657b72a505a0814414a5007d6a41ad"
  },
  {
    "url": "assets/js/27.9aad70b3.js",
    "revision": "85e06c3c46749fc042e221901ce37b02"
  },
  {
    "url": "assets/js/28.6159bc67.js",
    "revision": "975bab94167c1badee2504034f06ba01"
  },
  {
    "url": "assets/js/29.f3205a01.js",
    "revision": "85958ebc18a7ce6d5ccca1f602b542f6"
  },
  {
    "url": "assets/js/3.802dab0f.js",
    "revision": "0b843d6b2b591138376e0ec371071341"
  },
  {
    "url": "assets/js/30.c6a75514.js",
    "revision": "15d316785f79f17f7b9fd2d83085f86d"
  },
  {
    "url": "assets/js/31.5d35c295.js",
    "revision": "0c626bdd419d3a44b4ba3c613f320fe1"
  },
  {
    "url": "assets/js/32.e8a88456.js",
    "revision": "deefeee4e9fc46910f7625edda68460c"
  },
  {
    "url": "assets/js/33.5763d28a.js",
    "revision": "d2333b3f267475f7c6f500cc1829bbf5"
  },
  {
    "url": "assets/js/34.eef6dff6.js",
    "revision": "6684367bb00ef61537195992ef57274c"
  },
  {
    "url": "assets/js/35.c55b1d53.js",
    "revision": "fbfe2bdd81d1307571518546cec5c54f"
  },
  {
    "url": "assets/js/36.04ec4e4f.js",
    "revision": "592526c662f7c0e3675a1819378da3de"
  },
  {
    "url": "assets/js/37.1445889e.js",
    "revision": "3066e6b5308f6ad8b23720c3081de04e"
  },
  {
    "url": "assets/js/38.c2369325.js",
    "revision": "3c8c85ee2bfc3118597f9269f431a4ff"
  },
  {
    "url": "assets/js/39.591d4a7a.js",
    "revision": "58af72d2fa8c42c76ce5ce4263b328c9"
  },
  {
    "url": "assets/js/4.dbcc2adb.js",
    "revision": "6f19d3f015da2faf5b4804e3f1f22119"
  },
  {
    "url": "assets/js/40.8b2243c5.js",
    "revision": "b37173071200912de8681759867e3981"
  },
  {
    "url": "assets/js/41.bd7ec86f.js",
    "revision": "6a8bc9cc0d335de42de4fa4d68c805dd"
  },
  {
    "url": "assets/js/42.9aa2497b.js",
    "revision": "5a69e066ff232f89c3c784b738d1d976"
  },
  {
    "url": "assets/js/43.70b2f705.js",
    "revision": "b2a646bb21d5a1d32673e82a38d86a0e"
  },
  {
    "url": "assets/js/44.e72dad09.js",
    "revision": "457a988edbc6965ecb8de5e5c4ef7226"
  },
  {
    "url": "assets/js/45.0c0cf019.js",
    "revision": "af8e6c77b1ad5d84b6ea17ad262ea923"
  },
  {
    "url": "assets/js/46.36fe7f81.js",
    "revision": "71772deb3573dd9ffa4d9756989f1528"
  },
  {
    "url": "assets/js/47.5966ce65.js",
    "revision": "1491800f3ab7ea7ca16a26bb274555b3"
  },
  {
    "url": "assets/js/48.44fd153d.js",
    "revision": "a8607044ef5489eb8ee68fe7610f62df"
  },
  {
    "url": "assets/js/49.4c65524f.js",
    "revision": "9bc42e915869d111eb8237e58854c8fc"
  },
  {
    "url": "assets/js/5.4adea544.js",
    "revision": "1ebefc7bce3a0837d173958aa7dbfad7"
  },
  {
    "url": "assets/js/50.e9e1beef.js",
    "revision": "8930bc56c87cabb5685a59740426e92a"
  },
  {
    "url": "assets/js/51.f67e5993.js",
    "revision": "2d89fc53c70e48ef4ab317ad537d71e7"
  },
  {
    "url": "assets/js/52.51f3a2dd.js",
    "revision": "3bd5a3fee66ea13e3727db9ded55320f"
  },
  {
    "url": "assets/js/53.25eec254.js",
    "revision": "d174bc62165c9755029e83486abbe60f"
  },
  {
    "url": "assets/js/54.3cb3da5d.js",
    "revision": "366584bb139c61af8f8f4751fa9f0eb6"
  },
  {
    "url": "assets/js/55.659c7163.js",
    "revision": "d15ae5dda8c6be6eb85323cced329004"
  },
  {
    "url": "assets/js/56.658cee8e.js",
    "revision": "38d1c10180a77b493cf044d35c3c5937"
  },
  {
    "url": "assets/js/57.6b9778d2.js",
    "revision": "757d6c10596055e30f80f490bd9fd405"
  },
  {
    "url": "assets/js/58.37b95470.js",
    "revision": "a96c3a9fc0d57b01be7303a036d9ddef"
  },
  {
    "url": "assets/js/59.de5ddd5f.js",
    "revision": "140cf7385cbe0856d074c6d86df6d82d"
  },
  {
    "url": "assets/js/6.58de709a.js",
    "revision": "e495adf7bbaf52aeaec337f1da273325"
  },
  {
    "url": "assets/js/7.a5a75c7e.js",
    "revision": "3bf04390232793f2b5eaca04fc0e16fe"
  },
  {
    "url": "assets/js/8.7f2e495a.js",
    "revision": "13ec8c5847136026f5df9a849f5f8da4"
  },
  {
    "url": "assets/js/9.1291fa0e.js",
    "revision": "f54f8488663611090d9b9fb7535f6a24"
  },
  {
    "url": "assets/js/app.da981d75.js",
    "revision": "07343b23eeae1b3dcbf4cee641336103"
  },
  {
    "url": "bottom-logo.jpg",
    "revision": "72c191d5d14c5210e5ad748a7eb47f4e"
  },
  {
    "url": "front/book/index.html",
    "revision": "1d7ab2556b849fd9a66593519c4a9c3b"
  },
  {
    "url": "front/book/JSbasic.html",
    "revision": "bef069c3b6b9927f372ad9a28839f75a"
  },
  {
    "url": "front/git/doc.html",
    "revision": "a8f696f5f70256f28728db69484ec579"
  },
  {
    "url": "front/git/openSourceProgram.html",
    "revision": "97efdda318caed0b07beece8ea67a6ee"
  },
  {
    "url": "front/index.html",
    "revision": "0559b71856947342dcb6d16081f968d2"
  },
  {
    "url": "front/JavaScript/01-类型.html",
    "revision": "9aa3e1be46bf88ca7697415283e10307"
  },
  {
    "url": "front/JavaScript/ES6/Promise.html",
    "revision": "5ed3e49e7284a35ab9cbc06dcffea7ea"
  },
  {
    "url": "front/JavaScript/ES6/Symbol.html",
    "revision": "956f61c22c9f8b544fdd1c37eeba00cc"
  },
  {
    "url": "front/miniProgram/docs/article.html",
    "revision": "aec7c60e06f438d7570662dd3ec9a638"
  },
  {
    "url": "front/miniProgram/docs/wx.lin 下的问题.html",
    "revision": "0505364ce160ab738a0d3bb302edf832"
  },
  {
    "url": "front/miniProgram/navigator/index.html",
    "revision": "6ebc182f39bdf00ffc5741209009179f"
  },
  {
    "url": "hero.png",
    "revision": "631612eccd822da8696d23a4ac599333"
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
    "revision": "d08d2983a23324433e01b496e40ab953"
  },
  {
    "url": "left-logo.png",
    "revision": "5892d5632cac3bf14b5ac7764eda7554"
  },
  {
    "url": "left-logo1.jpg",
    "revision": "385934dd53b4e81be91e05ce66e99648"
  },
  {
    "url": "left-logo2.jpg",
    "revision": "d6499df145782b9e57a299d8df91d544"
  },
  {
    "url": "lin/advanced/database.html",
    "revision": "29356879abb4b3e277c25f9cad4b6e12"
  },
  {
    "url": "lin/client/catalog.html",
    "revision": "a62a10c9547f7c3b202466e826bdff1a"
  },
  {
    "url": "lin/client/components.html",
    "revision": "22f195ebd3d2e7a85e3eff4a9de5f136"
  },
  {
    "url": "lin/client/exception.html",
    "revision": "62d32bee378e5cdcc0c395adf1f65f06"
  },
  {
    "url": "lin/client/index.html",
    "revision": "e4ca88b7c59bc5d45eb92584e4b40d6a"
  },
  {
    "url": "lin/client/model.html",
    "revision": "6a5fd3db3081d62bce972c4dc130cc96"
  },
  {
    "url": "lin/client/router-authority.html",
    "revision": "7e07e127ce040ab4d0c7dfe762124d20"
  },
  {
    "url": "lin/guide/best-practice.html",
    "revision": "37991d72ece484238679d6273ab15f22"
  },
  {
    "url": "lin/guide/index.html",
    "revision": "8df49a5738feac2264ae529295d676d2"
  },
  {
    "url": "lin/guide/structure.html",
    "revision": "372cb7016e2e3e3cb90000dc7f4da5fd"
  },
  {
    "url": "lin/index.html",
    "revision": "11f0be66f5ae6e23bc88d2c28e735fb7"
  },
  {
    "url": "lin/inside/api.html",
    "revision": "f1e974c93c5878db0c3b49a3ef8e5701"
  },
  {
    "url": "lin/inside/default_plugins.html",
    "revision": "bfb4e21b441dc75d5636667e8486f1b3"
  },
  {
    "url": "lin/inside/index.html",
    "revision": "13a2a3298c3f3fa3bd57e06b27bc82cb"
  },
  {
    "url": "lin/inside/jwt.html",
    "revision": "0935d6ec0a88b11208850de1ad684033"
  },
  {
    "url": "lin/inside/md_style.html",
    "revision": "a1e9490ebedab2b9acb741481eb196b2"
  },
  {
    "url": "lin/inside/plugin.html",
    "revision": "12b1568ee26b360a6e568f5f68e44b0f"
  },
  {
    "url": "lin/inside/sse.html",
    "revision": "0849d105e598965b38bc3b9f9052ad6a"
  },
  {
    "url": "lin/server/authority_and_models.html",
    "revision": "51e3b3d7748642643faea466852a0ec3"
  },
  {
    "url": "lin/server/basic_api.html",
    "revision": "58eec7c894c2de3982ffe05e16623ee5"
  },
  {
    "url": "lin/server/default_plugins.html",
    "revision": "0b8f3ddd65f43d7154dc997539dc24ac"
  },
  {
    "url": "lin/server/deploy.html",
    "revision": "d6060819c941a5852ab5e6c8a3653a87"
  },
  {
    "url": "lin/server/essay1.html",
    "revision": "e3675814f093b8f769d7217117d3d279"
  },
  {
    "url": "lin/server/index.html",
    "revision": "ce8ed34917e97c75f7323ce3d090c95a"
  },
  {
    "url": "lin/server/logger_and_notify.html",
    "revision": "1bafb9a0949ad9747d0e2d796dc307cd"
  },
  {
    "url": "lin/server/plugin.html",
    "revision": "b0de432d7be9138e73be7cd1f7764f7c"
  },
  {
    "url": "lin/server/run_process.html",
    "revision": "b42e404359ae243bb8c4f6f63de399f3"
  },
  {
    "url": "lin/server/starter.html",
    "revision": "a5fca25f17eedfe16572b02a913ab0ab"
  },
  {
    "url": "lin/server/structure_and_specification.html",
    "revision": "df5324818f7501bfa3350112b43735bd"
  },
  {
    "url": "lin/server/unit_test.html",
    "revision": "e5bf8e35347da24b0432b2ca077f7b2a"
  },
  {
    "url": "lin/start/flask-server-structure.html",
    "revision": "58808b501d566e0cf6cff96263ea1748"
  },
  {
    "url": "lin/start/index.html",
    "revision": "546f6db47f73964a578219a6d7e292c0"
  },
  {
    "url": "lin/start/vue-client.html",
    "revision": "8b8c4625d9b9b894473bc1626621a6f6"
  },
  {
    "url": "lin/update/index.html",
    "revision": "a81eaaf85ad011502fbc1a5d77ac1ad9"
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
    "revision": "f908c1bea5ddc73bb4fe9d7f6038f9e1"
  },
  {
    "url": "logo1.png",
    "revision": "7bef46eea7f0e3efae422cfe8e497256"
  },
  {
    "url": "note/01.html",
    "revision": "62d849f4651455f1604cd3bc5a7ec9f1"
  },
  {
    "url": "sideIcon.jpg",
    "revision": "6049ddd942370393f91ccd5805df2029"
  },
  {
    "url": "standard/component.html",
    "revision": "6aaff5a92df6a76ce0794f91b0dc66ab"
  },
  {
    "url": "standard/directory-structure.html",
    "revision": "207b608bb934287f86421d2672d9c511"
  },
  {
    "url": "standard/index.html",
    "revision": "70bad2d5e1fa0f4734c154d3704f00c6"
  },
  {
    "url": "start/event.html",
    "revision": "d0fc081c2309129404a4d65d68b664ff"
  },
  {
    "url": "start/index.html",
    "revision": "0abcd1877a318895495f3250434d2dd6"
  },
  {
    "url": "start/using.html",
    "revision": "c567175a23287ab4371ce540c265db6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
