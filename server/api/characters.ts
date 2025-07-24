import { defineEventHandler, getQuery } from 'h3';
import type { MarvelApiResponse, Character } from '~/models';
import { BASE_URL, getMarvelAuthParams } from './auth';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const name = query.name as string || '';
  const limit = parseInt(query.limit as string) || 12;
  const page = parseInt(query.page as string) || 1;
  const offset = (page - 1) * limit;

  const { ts, apikey, hash } = getMarvelAuthParams();

  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  if (name) {
    params.append('nameStartsWith', name);
  }

  const url = `${BASE_URL}/characters?${params.toString()}`;
  const res = await fetch(url);
  const data: MarvelApiResponse<Character> = await res.json();

  return data;
});