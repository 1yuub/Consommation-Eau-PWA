self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache-eau').then(function(cache) {
            return cache.addAll([
                'index.html',
                'styles.css',
                'script.js',
                'manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
