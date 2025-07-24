import { defineEventHandler, getQuery } from 'h3';
import type { MarvelApiResponse, Character } from '~/models';
import { BASE_URL, getMarvelAuthParams } from '../../../utils/auth';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const { ts, apikey, hash } = getMarvelAuthParams();

  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
  });

  const url = `${BASE_URL}/character/${id}/comics?${params.toString()}`;
  console.log(url)
  const res = await fetch(url);
  const data: MarvelApiResponse<Character> = await res.json();

  return data;
});