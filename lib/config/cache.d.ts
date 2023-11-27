import { Plugin } from '../interfaces';
type CacheContents = {
    rootPlugin: Plugin;
};
type ValueOf<T> = T[keyof T];
/**
 * A simple cache for storing values that need to be accessed globally.
 */
export default class Cache extends Map<keyof CacheContents, ValueOf<CacheContents>> {
    static instance: Cache;
    static getInstance(): Cache;
    get(key: 'rootPlugin'): Plugin | undefined;
}
export {};
