/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/heartmate/README.html","4a113cd271e81359f5c2e076014c7651"],["/heartmate/agreement/en/index.html","b100bff754879d6e0c88b5a59b53cfd2"],["/heartmate/agreement/index.html","989c2d9507914a1889f65c097c4eea10"],["/heartmate/archives/2018/10/index.html","9727fc4f153db16d2ca6aeb30548a165"],["/heartmate/archives/2018/11/index.html","9727fc4f153db16d2ca6aeb30548a165"],["/heartmate/archives/2018/index.html","9727fc4f153db16d2ca6aeb30548a165"],["/heartmate/archives/index.html","9727fc4f153db16d2ca6aeb30548a165"],["/heartmate/assets/img/appicon.png","87f8fe7a815262095ad948e095d5cdac"],["/heartmate/assets/img/avatar-bak.jpg","eb2b247ba85141a21e4555a1a83a152c"],["/heartmate/assets/img/avatar.jpg","54dda57665fda664f1fd9a7f4f1b88a2"],["/heartmate/assets/img/favicon.svg","69c65df0d30513b2b83cd638833f9a86"],["/heartmate/assets/img/favicons/android-chrome-192x192.png","49e4edc828a831d6991ebe5da202ca31"],["/heartmate/assets/img/favicons/android-chrome-512x512.png","b7a3092cb366b0a10be7d2b7e39fc45f"],["/heartmate/assets/img/favicons/apple-touch-icon.png","9097ca65635e84faf7d4dbc3d26a7bac"],["/heartmate/assets/img/favicons/browserconfig.xml","fee489ac597079c502379abb2e023d9f"],["/heartmate/assets/img/favicons/favicon-16x16.png","5fd98b599697a1ea5eb1f79917b3523f"],["/heartmate/assets/img/favicons/favicon-32x32.png","47a178919c8eb14ac70cf984591b6677"],["/heartmate/assets/img/favicons/mstile-144x144.png","fa8c04f936718ce732ce901b5c054d0b"],["/heartmate/assets/img/favicons/mstile-150x150.png","3d13b22887bd873eef243e5c5111a490"],["/heartmate/assets/img/favicons/mstile-310x150.png","0b7c8a04bde8b17821c8337e013bb7db"],["/heartmate/assets/img/favicons/mstile-310x310.png","e12cbac230494ae8806cd9deae872683"],["/heartmate/assets/img/favicons/mstile-70x70.png","fa09883893598d4012c8019f12b739d6"],["/heartmate/assets/img/favicons/safari-pinned-tab.svg","7082509dbc2ed11d0beed8fe8e946e53"],["/heartmate/assets/img/iconfont-universe.svg","7799a02f45537810c539ecd691c38f2b"],["/heartmate/assets/img/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/heartmate/assets/img/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/heartmate/atom.xml","e6fc58b343bd6c7db719eb2fdffedb97"],["/heartmate/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/heartmate/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/heartmate/css/index.css","57c1da6cae4d2027b171e73765b89914"],["/heartmate/css/page.css","0aacde6e8916b00aac3c83c07fd0c6c9"],["/heartmate/css/search.css","092ade8c44630c4cdab2d00c0881c36f"],["/heartmate/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/heartmate/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/heartmate/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/heartmate/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/heartmate/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/heartmate/forum/1.0/index.html","17cd919b4a53adfff57d891f9adfe495"],["/heartmate/forum/1.1.1/index.html","b2dc4d816111b76bf389d5f0adf502f7"],["/heartmate/forum/1.1.2/index.html","4e322e4c6dba8b5afcbde5d1ea3e90af"],["/heartmate/forum/1.1.3/index.html","5532ed64e87c1dfbc100635618f10af6"],["/heartmate/forum/1.1/index.html","44b793dc3dd2aae7d7a4aab89008a8d2"],["/heartmate/forum/en/1.0/index.html","251e89544e13be07231592249695530c"],["/heartmate/forum/en/1.1.1/index.html","efc5abfb6eacd3d38918ada38e38949c"],["/heartmate/forum/en/1.1.2/index.html","be3fd5e01c19dee960c2dbb4e1cf950f"],["/heartmate/forum/en/1.1.3/index.html","5858c8c126c91ace860238bd7770349f"],["/heartmate/forum/en/1.1/index.html","d4ba651c141ebe774ddb7bcb6c4ed218"],["/heartmate/forum/en/index.html","9a6a24b81255c3d8f6549066d947ba8a"],["/heartmate/forum/index.html","39b5cfc8da9780e34564a0230f459bf1"],["/heartmate/help/en/index.html","48247265575634a8ef3c6453c355a232"],["/heartmate/help/en/record/index.html","de04c1d5a82b90f836499b5ea8a16f90"],["/heartmate/help/en/urlschemes/index.html","a32d599f1e20e36bebf95be3cdb16cde"],["/heartmate/help/index.html","d06f59167ea445ec880b22f2f2cbd3ea"],["/heartmate/help/record/index.html","d1e512e9e06731b6f196689fb0ad1030"],["/heartmate/help/urlschemes/index.html","a9818dcd9b05e7962396edc10d4ed5df"],["/heartmate/images/2mhost.png","cf1c6b16ae197cc8fece227593cf3cd8"],["/heartmate/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/heartmate/images/actualize.png","2a07999eb1d845af6d9f7fe7b2eb0253"],["/heartmate/images/anymod.png","234cf9604fd55de7ce924f520d6c5610"],["/heartmate/images/bit-wide.png","9638a3f44bf471876effb80ea0659f73"],["/heartmate/images/bit.png","db6a4b731ecc06de8bd36d64112c768b"],["/heartmate/images/bmqb.png","25e28c3c20f8f32618a732fe055d6321"],["/heartmate/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/heartmate/images/check.png","c634675b753a1a03b587c43d8b535600"],["/heartmate/images/codepilot.png","123c45958229de783198d2d893a4044c"],["/heartmate/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/heartmate/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/heartmate/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/heartmate/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/heartmate/images/conf.png","0d1e4840e924b232e605779b5040c879"],["/heartmate/images/coreui.png","c5c30a912312f8babf5d54fca23f9ed6"],["/heartmate/images/datacamp.png","251ad9e67095233b3fcede7b03eaca9c"],["/heartmate/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/heartmate/images/down.png","2f948222df409af3121254d5fe0ed377"],["/heartmate/images/famebroker.png","9a879f5f83d3583145c756ba381ca482"],["/heartmate/images/fancygrid.png","06f2ce38e8497841593455ca53e58623"],["/heartmate/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/heartmate/images/frontend-love.png","b514babc53a0f3ddc854b0b14a54a489"],["/heartmate/images/frontend-meetups.png","d9b76c14d7eaf24c6b030ac3352d1e58"],["/heartmate/images/geekbang.jpg","5d61b90673ef0f9ebe4f29a4e4236983"],["/heartmate/images/geekbang.png","8b5b28a083c5582a180aabbbe8722eb6"],["/heartmate/images/geekbang2.jpg","e9383dba40eba15b7e7ea199c3212de1"],["/heartmate/images/geekbang3.gif","37dbf6a0429d8ed42c312047937c92b3"],["/heartmate/images/geekbang4.gif","4d430d67871b4f0782985e78ecb55631"],["/heartmate/images/geekbang5.gif","0b2c945b81c746174ed568d3e37cd983"],["/heartmate/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/heartmate/images/gitee_ad.png","f066bbe164545ecfe752a80722a6865b"],["/heartmate/images/hackr-io.png","2a0d1f9625ec5b529656fe6028f66c4f"],["/heartmate/images/htmlburger.png","c7ce1344d001e7a236a89694ed59d988"],["/heartmate/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/heartmate/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/heartmate/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/heartmate/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/heartmate/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/heartmate/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/heartmate/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/heartmate/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/heartmate/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/heartmate/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/heartmate/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/heartmate/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/heartmate/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/heartmate/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/heartmate/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/heartmate/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/heartmate/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/heartmate/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/heartmate/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/heartmate/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/heartmate/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/heartmate/images/icons/geekbang.png","df347aacd8904971dabe0e8f6bef722d"],["/heartmate/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/heartmate/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/heartmate/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/heartmate/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/heartmate/images/icons8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/heartmate/images/itunescn.png","dffb5409b975a5590aab9be99fb53ca8"],["/heartmate/images/jsfiddle.png","9f92527b7bce17471203e83f948292c5"],["/heartmate/images/jsguru.png","31c4e9e56df283700fd81a44d46099c7"],["/heartmate/images/juejin.png","46d2970cf094e50a218e1a8cd242b536"],["/heartmate/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/heartmate/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/heartmate/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/heartmate/images/monterail.png","3a441c52ccf03e6d09defa528cd2d632"],["/heartmate/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/heartmate/images/neds.png","8936cd0dd2ea2dedb127a330448d45e8"],["/heartmate/images/nsoft.png","a4b60a037e1870b022a6c5f40880dc56"],["/heartmate/images/onsen-ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/heartmate/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/heartmate/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/heartmate/images/piio.png","7e72b199c06e14bec80e771d701e6f64"],["/heartmate/images/pubnub.png","c8adaae8b1a592516f7791ad82ab25c3"],["/heartmate/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/heartmate/images/special-sponsor-spot.png","d873d28523f61a785ebbef45e6065272"],["/heartmate/images/stdlib.png","2ec485cb1b307821c82a850f440fab3f"],["/heartmate/images/strikingly.png","ef615f471302167fbc882f4a5f783dd1"],["/heartmate/images/tde.png","8b43557cde5163b9c7a11cc541cc9b97"],["/heartmate/images/teamextension.png","29f354472d73a5568552f9475d48d5a4"],["/heartmate/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/heartmate/images/tmvuejs2.png","3ee9bd2b594a166ccc14995630c81cbe"],["/heartmate/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/heartmate/images/valuecoders.png","1bccdd1583af0609cada15218d98a2f4"],["/heartmate/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/heartmate/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/heartmate/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/heartmate/images/vuejsadmin.png","e517dc0c38a982cfca2b123ce33dc261"],["/heartmate/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/heartmate/images/vueschool.png","cc8c47d63a2c5dc2e073357372e12048"],["/heartmate/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/heartmate/images/xfive.png","2fd3304fe6a1b44d2bfd19876e454d0c"],["/heartmate/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/heartmate/index.html","a72634f4f6d87f9e292c0bea0306c4b9"],["/heartmate/js/common.js","ae798d30af603c3cbf2fa6549151dd0b"],["/heartmate/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/heartmate/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/heartmate/js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["/heartmate/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/heartmate/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/heartmate/menu/index.html","b98711591330ef0ddfc04d4f92b0ca94"],["/heartmate/page-sitemap.xml","e413b0733d3650db0f28863c39d563a9"],["/heartmate/post-sitemap.xml","df9ab02b06b80db3e8c6fa9c61f38cd3"],["/heartmate/posts/2018-10-15/index.html","c4e4e195a1880d618ee3ab3663fbf844"],["/heartmate/posts/2018-11-16/index.html","0c63b9283eff1fe4220020938f2ddeba"],["/heartmate/releases/index.html","2d30fa89a486e5f23a5a652a37349c52"],["/heartmate/sitemap.xml","01edf8af7daa66f7b2a5b9d7b87f9959"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




