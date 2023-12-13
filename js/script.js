void function(){
    'use strict';

    function caching (func, cacheSize = 10){
        const cache = new Map();
        
        return function (...args) {
            const key = JSON.stringify(args)

            if(cache.has(key)){
                console.log('Fetching from cache...' + key);
                return cache.get(key);
            } else if (cache.size > cacheSize) return 'cache size exceeded';

            const result = func(...args)
            cache.set(key, result);
            console.log('Adding to cache...' + key);
            return result;
        }
    }


    function foo(arg) {
        return arg + ' hello';
      }
    
    const cachedFoo = caching(foo);
    console.log(cachedFoo(10));
    console.log(cachedFoo(15));
    console.log(cachedFoo(10));
    console.log(cachedFoo(100));


}()