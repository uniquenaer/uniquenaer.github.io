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
    "revision": "2a12b3fe5c1365cbaad353ff76e76626"
  },
  {
    "url": "assets/css/0.styles.3f68d91e.css",
    "revision": "1d364750ed97e5f3ffa555f7b3bd211d"
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
    "url": "assets/js/10.5dccfc80.js",
    "revision": "a675f0ad75bdd9f793a0fc5dcaa24112"
  },
  {
    "url": "assets/js/11.ade83b5e.js",
    "revision": "f53cb938d3e59815ef83a13f24d40c32"
  },
  {
    "url": "assets/js/12.2171b4ba.js",
    "revision": "43f8c6b89bc28d3cf007d3e08fa21c04"
  },
  {
    "url": "assets/js/13.376704ef.js",
    "revision": "93682279101c128e54fdc2722b43de26"
  },
  {
    "url": "assets/js/14.065a349c.js",
    "revision": "7560dfddff3b8c7179c391d80d733268"
  },
  {
    "url": "assets/js/15.9b416e8b.js",
    "revision": "cdad7b0c98fa6b6e2d646c9ad0e0d24b"
  },
  {
    "url": "assets/js/16.727df2ce.js",
    "revision": "541dd35ada531427b40f6662970d5675"
  },
  {
    "url": "assets/js/17.dd96ceb8.js",
    "revision": "8ecff417f6aa3922f854cc308f42419d"
  },
  {
    "url": "assets/js/18.a5d2d426.js",
    "revision": "91e8e38a24fdbe00721ccfc5f08e0947"
  },
  {
    "url": "assets/js/19.52410a1d.js",
    "revision": "ee4e0facf21a809b507404cf91579e86"
  },
  {
    "url": "assets/js/2.d62d4ff9.js",
    "revision": "69879fa9121a5496ad13b684249cd66a"
  },
  {
    "url": "assets/js/20.24b47a23.js",
    "revision": "22d39d4707b90796d1688cedce819207"
  },
  {
    "url": "assets/js/21.02fef465.js",
    "revision": "9bcaad09a73ecc7a02fe3355b66a4b21"
  },
  {
    "url": "assets/js/22.9d4d270e.js",
    "revision": "157d54299604c640de994dc92a49aaeb"
  },
  {
    "url": "assets/js/23.b1a1dbd7.js",
    "revision": "9608e183d1e22b5ebcab738594af9151"
  },
  {
    "url": "assets/js/24.2932b487.js",
    "revision": "c21d1b77b7e1eae5ac66f41a6bde8aa1"
  },
  {
    "url": "assets/js/25.4de2827a.js",
    "revision": "cb6c34a0486f80ee532791b2e7134dc6"
  },
  {
    "url": "assets/js/26.0aa71ba4.js",
    "revision": "d7457d8116326a1747a171ce084aa681"
  },
  {
    "url": "assets/js/27.057f5801.js",
    "revision": "d239c66a34f31981f3b83a54366a3654"
  },
  {
    "url": "assets/js/28.b596a75f.js",
    "revision": "0f4c0a74ff81420a5cb17d731b0a8248"
  },
  {
    "url": "assets/js/29.994b656e.js",
    "revision": "2de521e57195e485a3f8da771f8aa116"
  },
  {
    "url": "assets/js/3.802dab0f.js",
    "revision": "0b843d6b2b591138376e0ec371071341"
  },
  {
    "url": "assets/js/30.215a143c.js",
    "revision": "42ad66ae58d0ba0da49cc8542fe162ac"
  },
  {
    "url": "assets/js/31.407246ba.js",
    "revision": "1ed2a053d0ef87a5e9679df196a3db00"
  },
  {
    "url": "assets/js/32.807f89e6.js",
    "revision": "b10032a5fd0338ed4a91b2b57b2162e4"
  },
  {
    "url": "assets/js/33.9c3dcaec.js",
    "revision": "dbd7bdf5bbcfe178375b12676ddf2920"
  },
  {
    "url": "assets/js/34.ef2e8de3.js",
    "revision": "20c7552b26dc52a5e13f0f7dd1972015"
  },
  {
    "url": "assets/js/35.c5fb0d3a.js",
    "revision": "a83a7b4afc900d6d78d75183efd90342"
  },
  {
    "url": "assets/js/36.6267a540.js",
    "revision": "3fe55ddba023503344457c264f4ff30c"
  },
  {
    "url": "assets/js/37.b97a996a.js",
    "revision": "59a3843f1d86ee84e4fc3ef489be003c"
  },
  {
    "url": "assets/js/38.f3ac6870.js",
    "revision": "098cdb13b032aff660016cd8f2589643"
  },
  {
    "url": "assets/js/39.84075a82.js",
    "revision": "39daec90ca4c2ef649395d1370f2f4c9"
  },
  {
    "url": "assets/js/4.dbcc2adb.js",
    "revision": "6f19d3f015da2faf5b4804e3f1f22119"
  },
  {
    "url": "assets/js/40.4e0a204f.js",
    "revision": "65db404a0fe303b9ba24f5f805a4a20c"
  },
  {
    "url": "assets/js/41.36446e6f.js",
    "revision": "223739c65c6a3c3df8c6f48310ea8782"
  },
  {
    "url": "assets/js/42.fca55a6d.js",
    "revision": "1260ac5a1e0f5cb518e945264bce8576"
  },
  {
    "url": "assets/js/43.9be34bd1.js",
    "revision": "f35ecab09cc208e025312100e4adab6d"
  },
  {
    "url": "assets/js/44.a4b379b5.js",
    "revision": "b4287961d0c32fd6940b3dba8d82bc12"
  },
  {
    "url": "assets/js/45.25470902.js",
    "revision": "c76c67603f4187c4e913047cfd222669"
  },
  {
    "url": "assets/js/46.9414a51d.js",
    "revision": "0bdc7272e233f82ae52c10937f62cdc4"
  },
  {
    "url": "assets/js/47.0eb0e27d.js",
    "revision": "84669ed17fa77d9f2de867ba00025a03"
  },
  {
    "url": "assets/js/48.655bef02.js",
    "revision": "ef6efa9fcdcbe0809441fe590bbf0f4a"
  },
  {
    "url": "assets/js/49.96a72804.js",
    "revision": "310f4528c472ef6957e912093c22dfdf"
  },
  {
    "url": "assets/js/5.4adea544.js",
    "revision": "1ebefc7bce3a0837d173958aa7dbfad7"
  },
  {
    "url": "assets/js/50.1c3f16c0.js",
    "revision": "e950fa4b04c9e4151ff11e8e840b3f47"
  },
  {
    "url": "assets/js/51.3b21f1fe.js",
    "revision": "99c17e6ffc74413393f93891c7710b19"
  },
  {
    "url": "assets/js/52.38991993.js",
    "revision": "38df0a67ebc2ca7bccef3ac1482cd43a"
  },
  {
    "url": "assets/js/53.3b6590e1.js",
    "revision": "b7f19daa4850adc0fe7bd0a1cfd9e1a0"
  },
  {
    "url": "assets/js/54.ec2294be.js",
    "revision": "72093d1fed5f81ec8c92661f327f63c8"
  },
  {
    "url": "assets/js/55.17e41e12.js",
    "revision": "bfbfda6d8bebf0b6d01a815523928b0f"
  },
  {
    "url": "assets/js/56.f2b6996c.js",
    "revision": "675f69e9242672b8b5e14879556cbe51"
  },
  {
    "url": "assets/js/57.0a76723f.js",
    "revision": "d266b8432dcb29dc43732a794b87f954"
  },
  {
    "url": "assets/js/58.416c6717.js",
    "revision": "b45409cdca4bf453be89af0b813fc5eb"
  },
  {
    "url": "assets/js/59.6b5de752.js",
    "revision": "e5b34ecb50b495992585d343db6ad727"
  },
  {
    "url": "assets/js/6.552f0a38.js",
    "revision": "a3c98c8d60b32028f196126df1e180fb"
  },
  {
    "url": "assets/js/60.3fdc3f69.js",
    "revision": "e9fd6a321a7fb809a872f16af896ef91"
  },
  {
    "url": "assets/js/61.820375f7.js",
    "revision": "87a81b85b2cf94b79d113632fdc39681"
  },
  {
    "url": "assets/js/62.7f2e5417.js",
    "revision": "d36be06b84d63a17c1841efbdae36b21"
  },
  {
    "url": "assets/js/63.a5287c10.js",
    "revision": "3500c7a69f291d86d3e9b795e7e09ab7"
  },
  {
    "url": "assets/js/7.37f30e5c.js",
    "revision": "71d6982d08c94894464ad5c724a965d5"
  },
  {
    "url": "assets/js/8.629abd3c.js",
    "revision": "6dc137627e94494a01d87496c6186c2d"
  },
  {
    "url": "assets/js/9.a408b4d7.js",
    "revision": "0e0519f73d5ee85e5e1361158cc10e73"
  },
  {
    "url": "assets/js/app.b01af4a4.js",
    "revision": "d158246035269b67a52d7dd92e69d31d"
  },
  {
    "url": "bottom-logo.jpg",
    "revision": "72c191d5d14c5210e5ad748a7eb47f4e"
  },
  {
    "url": "front/book/index.html",
    "revision": "cc31910c5168301447395dff10b4bf6a"
  },
  {
    "url": "front/book/JSbasic.html",
    "revision": "741d1f806f523e5c4c397072ae0f48b7"
  },
  {
    "url": "front/git/doc.html",
    "revision": "bcfffdd89f945f39dfadded98e3961f3"
  },
  {
    "url": "front/git/Linux.html",
    "revision": "9e391fef10d83abfe44f59dd30989777"
  },
  {
    "url": "front/git/openSourceProgram.html",
    "revision": "cf3abfe29a16bfe6e6a94394bf6e82fa"
  },
  {
    "url": "front/index.html",
    "revision": "672cdf23156b29e091e0d05999545bef"
  },
  {
    "url": "front/JavaScript/01-类型.html",
    "revision": "0b2649c9e92e64a4748f3a9d703d335c"
  },
  {
    "url": "front/JavaScript/ES6/Promise.html",
    "revision": "c56fa4bdf64f9f043fe8f3e795c983c0"
  },
  {
    "url": "front/JavaScript/ES6/Symbol.html",
    "revision": "1e37da2d6bf6c1a189cfe760d88e9273"
  },
  {
    "url": "front/miniProgram/docs/article.html",
    "revision": "a19ef113c773bc527d9f11e4340cb4a6"
  },
  {
    "url": "front/miniProgram/docs/wx.lin 下的问题.html",
    "revision": "cf5ca77e0d3e9a8243bf43101534b66d"
  },
  {
    "url": "front/miniProgram/navigator/index.html",
    "revision": "acb3f9b57dcbb6d72960bd4b6ad8f0c1"
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
    "revision": "6eb1e3bca299b32382f9cfbd6cd0edb2"
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
    "revision": "b6f8cb35dca20deb06ddc0b84a2bd6a2"
  },
  {
    "url": "lin/client/catalog.html",
    "revision": "c805b2f7c9395327d37e551219934c57"
  },
  {
    "url": "lin/client/components.html",
    "revision": "5f9af101dd672cb90057c2aa34e4e27e"
  },
  {
    "url": "lin/client/exception.html",
    "revision": "d2f07b2c73d6b5f78de796b49253819f"
  },
  {
    "url": "lin/client/index.html",
    "revision": "7223f749b67d1f6a531696027ecc5e2b"
  },
  {
    "url": "lin/client/model.html",
    "revision": "86e59c90d18f08a1f8bddac1180a5dd6"
  },
  {
    "url": "lin/client/router-authority.html",
    "revision": "0984cee7df1f5f7c0c0fb3cf650ac98a"
  },
  {
    "url": "lin/guide/best-practice.html",
    "revision": "e7a3563db5e1ef4c6a0f9d2e4f3c9df3"
  },
  {
    "url": "lin/guide/index.html",
    "revision": "d96892ca2251eb76d5beb05ba27e1307"
  },
  {
    "url": "lin/guide/structure.html",
    "revision": "e71f8aa1e459243ce07f4d7631405029"
  },
  {
    "url": "lin/index.html",
    "revision": "a4869abd46d35ca6711777443821fee8"
  },
  {
    "url": "lin/inside/api.html",
    "revision": "a47ee52400e651f277e0cac17cbe3bb4"
  },
  {
    "url": "lin/inside/default_plugins.html",
    "revision": "14b7754289f215c85bff0f4f883324f9"
  },
  {
    "url": "lin/inside/index.html",
    "revision": "b2fc71faf2a51c0509d327a95071224d"
  },
  {
    "url": "lin/inside/jwt.html",
    "revision": "460e916b6af30ac8076717562aadafea"
  },
  {
    "url": "lin/inside/md_style.html",
    "revision": "be71284be200ee2ca2a4a54dc056ae3e"
  },
  {
    "url": "lin/inside/plugin.html",
    "revision": "de5474aa0084e2bbb0d7e77debdbaf0b"
  },
  {
    "url": "lin/inside/sse.html",
    "revision": "436440ece89d5583b0b5da8fc824e677"
  },
  {
    "url": "lin/server/authority_and_models.html",
    "revision": "f28702788649440d80915d411b65e13c"
  },
  {
    "url": "lin/server/basic_api.html",
    "revision": "ea1c946a03ff0f8f1780f0cbec8fe1b7"
  },
  {
    "url": "lin/server/default_plugins.html",
    "revision": "3006130b38c66793c2ca8147e8a18fcf"
  },
  {
    "url": "lin/server/deploy.html",
    "revision": "85c0b7778dd94f066166b05363a9582c"
  },
  {
    "url": "lin/server/essay1.html",
    "revision": "54813406102537b3431d2321c0662ad9"
  },
  {
    "url": "lin/server/index.html",
    "revision": "f214fd5012d6a950f1504770705556c6"
  },
  {
    "url": "lin/server/logger_and_notify.html",
    "revision": "86244209c990d59236c8f1603b5deeec"
  },
  {
    "url": "lin/server/plugin.html",
    "revision": "8f0d8929d979bdf68f9c84873b4a740a"
  },
  {
    "url": "lin/server/run_process.html",
    "revision": "623e8c6e52ca382709caa62358b3b011"
  },
  {
    "url": "lin/server/starter.html",
    "revision": "8cf83548e4dd512f34f900feea6cb199"
  },
  {
    "url": "lin/server/structure_and_specification.html",
    "revision": "2c0c090ec563bb6e710103d02f71f533"
  },
  {
    "url": "lin/server/unit_test.html",
    "revision": "8a23ec1091a00ac49684d7865801ceb2"
  },
  {
    "url": "lin/start/flask-server-structure.html",
    "revision": "ae21ef43f22d5f02d534ce7a3cadb34c"
  },
  {
    "url": "lin/start/index.html",
    "revision": "4c6d755c084d6c4f15744bdfed41c1c9"
  },
  {
    "url": "lin/start/vue-client.html",
    "revision": "1b774cf2d274e9f447cb0cfd925c0f0f"
  },
  {
    "url": "lin/update/index.html",
    "revision": "b9e1e2770f0b3bcef9998e2c678eeed2"
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
    "revision": "9b5d405fd3e166fc64a80452fa244623"
  },
  {
    "url": "note/algorithm/O.html",
    "revision": "48a6d0e6029b9c625f01a4e2c8af5f37"
  },
  {
    "url": "note/code/code.html",
    "revision": "5a0085557880be7f90ea28252b24bdb2"
  },
  {
    "url": "note/code/errorPrevention.html",
    "revision": "0211521f69f3b908a13c641c5fd6e800"
  },
  {
    "url": "sideIcon.jpg",
    "revision": "6049ddd942370393f91ccd5805df2029"
  },
  {
    "url": "standard/component.html",
    "revision": "99dfcb4e9c3f9c20e6cb89ca826cf2a6"
  },
  {
    "url": "standard/directory-structure.html",
    "revision": "b66419203dbba77bf8c8ff847f2e6780"
  },
  {
    "url": "standard/index.html",
    "revision": "8cedfe8f64fae81cff9f699d110d5ce0"
  },
  {
    "url": "start/event.html",
    "revision": "0110ae491cc7302badf2f611dada3547"
  },
  {
    "url": "start/index.html",
    "revision": "8f0bec7d00f40733ed41c5d12a741dc8"
  },
  {
    "url": "start/using.html",
    "revision": "b04114a9f005190e869c13c233ec2939"
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
