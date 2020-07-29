import * as Sentry from '@sentry/browser';

if (process.env.NODE_ENV !== 'development') {
    // 去除错误收集
    // Sentry.init({ dsn: 'https://f563666d9f384ab19fd8bdd6bc383e77@o312063.ingest.sentry.io/1830083' });
}

export default Sentry
