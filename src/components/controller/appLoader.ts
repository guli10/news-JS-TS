import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '293dff256a864b6086596cfb8652d23a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
