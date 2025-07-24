import { defineEventHandler, getRouterParam } from 'h3';
import type { MarvelApiResponse, Character } from '~/models';
import { BASE_URL, getMarvelAuthParams } from '../auth';


export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) return { code: 400, message: 'Character ID is required.' };

  const { ts, apikey, hash } = getMarvelAuthParams();

  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
  });

  const url = `${BASE_URL}/characters/${id}?${params.toString()}`;
  const res = await fetch(url);
  const data: MarvelApiResponse<Character> = await res.json();

  return data;
});
