'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
".git/config": "9baa93632c5d17e9bd6bdbfec84d1a4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dea59f3a8ac5d8fba8d6039ea7229c3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "235a6ac1f7654f7c552b58a9027f3fdf",
".git/logs/refs/heads/main": "235a6ac1f7654f7c552b58a9027f3fdf",
".git/logs/refs/remotes/origin/main": "096aecad76b2a52bd02c56c541eea627",
".git/objects/00/2cb18d76c5891ed229268c06d10e176cc0e444": "6b9aa322393daaf903f9f89546c996d4",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/3184b9861565158498bab97b9709d57686c78f": "a290e6fdec3642adfd6f1f3bbe3c919a",
".git/objects/0b/3cd190a0ddcbf18dbdf930b5a0bc6a955a9646": "5860f8ad62e31ba802f9917c499d50f5",
".git/objects/10/0eb3622d4882871aa7808f8088b372035c0901": "0ff0d755f8c92fd87f730f479ceab0a0",
".git/objects/12/d4147a5ed61b644b83abccb83a40b183416144": "1878a7b4696dd300bb722f44cf3a036f",
".git/objects/13/c69823d41f074c3c47f0740e712f98c34d93c5": "d9619fe948453c995333e492e7e7dd46",
".git/objects/18/bf37a8c9c25d61b56431381f9573dcc57aac20": "3edc5207d6ae8ea4fdd6550abe8585a1",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/19c510824a62a8dab9e9e5641cc3f53580100e": "31c4697ad551278c9c0aab015432fa69",
".git/objects/2c/61835557d3a14878a93859abe9171d1e88825e": "95cde2243ecf14fab3776e0cd7fae417",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/a330804ee5f0d7e3df30f104b9ce668c6f1675": "8d252aae2ba117632fe6641d6e9d9d98",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/4bd1085d200c82dc0966aed6ef970995d33b31": "bf51c9cf5a10b236bd0ba77f7b7e1039",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/65/8a6839c0dbf661b6bc050c7d3516dccee42ca7": "0ea4560d1dce7d343300b74b3485fdb8",
".git/objects/67/6352a93cea169b720f1fa271f9aa8c59d1f05c": "54bd26bd2a18925b2f52ea8a45b8d8e3",
".git/objects/68/afa07d7e69aed9cd97a219cdcd26f733f1ba7f": "0c1785303e882ec0f818fb68811cc253",
".git/objects/6a/47c5e81180ca8a597256353f67946dfb14fda1": "b1fcab180ab6fd37227999c82b6cb6a4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/6c340b6bd6177c365efbdca71ca053a218fb98": "088eb4c3337e9f24cdf08daf124c8d11",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7d/73aab511a666b81fee5462ca4b9bddd1e26fd4": "3ae8a9d1aff431427517fa664e4390d7",
".git/objects/81/4dd42d995b864171840e490f7cea45e6a81dfa": "ee9f98a447c7d72ca2c897177e4286a5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/bef4447237f359e1ce4945037a410e7bbe3e41": "9b5cc9464f890cef32b00cfe6c21c713",
".git/objects/93/e2cba3c118a3ae8325fee24e6ed10adb147fc6": "d37b969e5430ff4957d3b0b891357681",
".git/objects/95/904e3ae110f6129f0c83977dc13e2768e3b24e": "b091a6d109994542ea4498b3d6081765",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/1d3752a0f717540f6d818c7091af602b7734e1": "49eaf1362dfb739d29a20de297ea917a",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/ae/7da8c23b64f98281565fa51e568199ca3283ce": "14bb2e2e5f3ff956ae6502a9b630e1e4",
".git/objects/b0/6f935188bf6eb93c852b14c26fd1e7f2fa51bf": "7951f55022e056f56f1343932b8329fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/fd8f1fc4c930f8b9a98cd0f4570054d0fd1503": "88bc280a8c49f880467524a6c1ac623a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/fe27ab46abb7118cc512ed52c0f4e09567f92e": "b8de31ca165ae7d10c661ef167c5cb52",
".git/objects/ce/1787e3c2704168431ef26b3f20ad35cc6f9a60": "837b24d8696e8e62312ed021f34cab73",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/6bf42a2515c2d3852ca263e7607de2434e8d65": "fc149b955f2e6d561db5af1cdf7729de",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/239a34c9ccf345d8f87d55704503c7c0cbe8e6": "a6c60310b49393a5ee8dfccf44740525",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/37a0cf884b458a8cc2c25393bfb07cc0a10095": "efa0141044170945b27db18033b7bf7a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/a73f10a3e039ffa951356d7f3447b90907d449": "80b46873be7b2282651e5185370d2174",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c11a685b85a5bedda286d99c593fa0847230d4": "460c167d0a61ba4aa642009e1973d6e7",
".git/objects/ee/6b57e068dd52ef8a9aa64846207dd4f72f43e5": "33d10b7fb20ae235fcd3181195b7fa98",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1cd9b58eb1d0170f47a6de81629a0f926ef7ca": "44a5c16b2eae54886672ae1ce9529999",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "671bd6f3ff7d7bb6dc635b19158aef05",
".git/refs/remotes/origin/main": "671bd6f3ff7d7bb6dc635b19158aef05",
"assets/AssetManifest.bin": "cfccc481db755c8459a591a69615edf4",
"assets/AssetManifest.bin.json": "95e85522c1d3e485c04e3659603d8c3b",
"assets/AssetManifest.json": "700fd4e09c953c06a3b03b3cc32bdc1a",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/DailyDoneLogo.png": "a71b37f912718e151f433c2727f306c1",
"assets/assets/icons/DailyDoneLogo_NoBackground.png": "b9c7df92038f7341530620f870833002",
"assets/FontManifest.json": "663f3a1fe5ee8bcc1f74c30ab3d5a3ad",
"assets/fonts/MaterialIcons-Regular.otf": "4bc406a1bce8043dd2f61e78702982a3",
"assets/NOTICES": "de92b24093467d17743815c04a141b21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41e8302cbaf04408585d948a435f4421",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "22aa7baf4e9c52c6b953e888a6d6c12d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "31970b3e718795ca2abd91511de53e53",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f1379a6b3f1e75e7fe9c21351ba72cd",
"/": "4f1379a6b3f1e75e7fe9c21351ba72cd",
"main.dart.js": "c937b7071de5f3ff13ba8304440edaf9",
"manifest.json": "af1b4f99ea57956a6cbd2dd768e1f53b",
"splash/img/dark-1x.png": "73ba8f991e7d29c2ecd210fbd265ff4b",
"splash/img/dark-2x.png": "c4ae11c56b3cb2dab27e720af0cdbdb7",
"splash/img/dark-3x.png": "f33798391a3f05bfb805e14abd340ede",
"splash/img/dark-4x.png": "afbfec7956f8768f62b4af6c4d65eb1d",
"splash/img/light-1x.png": "73ba8f991e7d29c2ecd210fbd265ff4b",
"splash/img/light-2x.png": "c4ae11c56b3cb2dab27e720af0cdbdb7",
"splash/img/light-3x.png": "f33798391a3f05bfb805e14abd340ede",
"splash/img/light-4x.png": "afbfec7956f8768f62b4af6c4d65eb1d",
"version.json": "2999a8a73ebe9e042086eb9ceb3c29c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
