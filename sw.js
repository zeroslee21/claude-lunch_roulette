const CACHE_NAME = 'lunch-roulette-v3'; // 버전 업데이트
const urlsToCache = [
  './',
  './index.html',
  './lunch_app_icon.png',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
];

// 설치 이벤트 - 캐시 저장
self.addEventListener('install', event => {
  console.log('[Service Worker] 설치 시작');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] 캐시 열기 성공');
        return cache.addAll(urlsToCache)
          .then(() => {
            console.log('[Service Worker] 모든 리소스 캐시 완료');
          });
      })
      .catch(error => {
        console.error('[Service Worker] 캐시 저장 실패:', error);
      })
  );
  self.skipWaiting();
});

// 활성화 이벤트 - 이전 캐시 삭제
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] 이전 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch 이벤트 - 캐시 우선, 네트워크 폴백
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 캐시된 응답 반환
        if (response) {
          return response;
        }

        // 캐시에 없으면 네트워크에서 가져오기
        return fetch(event.request).then(response => {
          // 유효한 응답이 아니면 그대로 반환
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 응답을 복제하여 캐시에 저장
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(error => {
        console.error('Fetch 실패:', error);
        // 오프라인 폴백 페이지를 반환할 수 있습니다
      })
  );
});