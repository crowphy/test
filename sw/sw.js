
self.addEventListener('install', evt => {
    // Perform install steps
    evt.waitUntil(
        caches.open('v1')
            .then(function (cache) {
                console.log('Opened cache------');
                return cache.addAll([
                    '/',
                    'test.js',
                    '/IMG_0138.JPG',
                ]);
            })
    );
});

self.addEventListener('fetch', evt => {
    console.log('fetch=========', caches, evt.request.url)
    // e.respondWith(
    //     caches.match(e.request).then(res => {
    //         return res
    //     })
    // )
    // evt.respondWith(new Response("Hello world!"));
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            if(response) {
                console.log('response=', response)
            }
            return response || fetch(evt.request);
        })
    );
});

self.addEventListener('activate', evt => {
    // You're good to go!
    console.log('activate-------------')
    // evt.waitUntil(
    //     caches.keys()
    //         .then(function (keys) {
    //             return Promise.all(keys
    //                 .filter(function (key) {
    //                     return key.indexOf(version) !== 0;
    //                 })
    //                 .map(function (key) {
    //                     return caches.delete(key);
    //                 })
    //             );
    //         })
    // );
});
