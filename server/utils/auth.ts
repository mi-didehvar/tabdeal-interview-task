
import { createHash } from 'node:crypto';

export const BASE_URL = 'https://gateway.marvel.com/v1/public';
export const publicKey = 'edc9531ea872c74a2855ed93a5903229';
export const privateKey = 'fc6bb6ae62c1b209e881222bcbf7003f2a95650e';

export function getMarvelAuthParams() {
  const ts = 1670913383902//Number(Date.now());
  const hash = "bbb581dcf34e4752243b361daa960fb1"/*createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');*/

  return { ts, apikey: publicKey, hash };
}