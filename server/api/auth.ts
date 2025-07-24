import { createHash } from 'node:crypto';

export const BASE_URL = 'https://gateway.marvel.com/v1/public';

export const publicKey = '98679584ff1412d3806ed4b137a95410';
export const privateKey = 'fc6bb6ae62c1b209e881222bcbf7003f2a95650e';

export function getMarvelAuthParams() {
  const ts = Date.now().toString();
  const hash = createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  return { ts, apikey: publicKey, hash };
}