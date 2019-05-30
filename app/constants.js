import { JsonRpc } from 'pcjs';

export const CHAIN_ID = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';

export const THROTTLE_TIMEOUT = 600;

export const API_KEY = 'AIzaSyBJrgbdsOfzPMKQFcsnXJHtbwxlVglXkVw';

// how many transaction do we keep in the reducer
export const TRANSACTIONS_LIMIT = 50;

export const HISTORY_ITEMS_PER_PAGE = 10;

// Eos API
export const PotatoRpc = new JsonRpc('https://potato.jocky123.com');
