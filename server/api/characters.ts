// server/api/marvel.ts
import { defineEventHandler, getQuery } from 'h3';
import { createHash } from 'node:crypto';
import type { MarvelApiResponse, Character } from '~/models/index';

const publicKey = 'edc9531ea872c74a2855ed93a5903229';
const privateKey = 'abcd';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const name = query.name as string || '';
    const limit = query.limit || 10;

    const ts = "1670913383902"//Date.now().toString();
    const raw = ts + privateKey + publicKey;
    const hash = "bbb581dcf34e4752243b361daa960fb1"//createHash('md5').update(raw).digest('hex');

    const endpoint = `https://gateway.marvel.com/v1/public/characters`;
    const params = new URLSearchParams({
        ts,
        apikey: publicKey,
        hash: hash,
    });

    if (name) {
        params.append('nameStartsWith', name);
    }

    const url = `${endpoint}?${params.toString()}`;
    console.log(url)
    const res = await fetch(url);

    const data: MarvelApiResponse<Character> = await res.json();
    return data;
});
