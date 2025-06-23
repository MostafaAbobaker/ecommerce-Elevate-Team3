import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {



  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Sets a value in localStorage
   * @param key The storage key
   * @param value The value to store (will be stringified if not a string)
   */
  setItem<T>(key: string, value: T): void {
    if (!this.isBrowser) return;

    try {
      const storageValue = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, storageValue);
    } catch (error) {
      console.error('LocalStorage setItem error:', error);
    }
  }

  /**
   * Gets a value from localStorage
   * @param key The storage key
   * @returns The stored value or null if not found
   */
  getItem<T>(key: string): T | null {
    if (!this.isBrowser) return null;

    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;

      try {
        return JSON.parse(item) as T;
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.error('LocalStorage getItem error:', error);
      return null;
    }
  }

  /**
   * Removes an item from localStorage
   * @param key The storage key to remove
   */
  removeItem(key: string): void {
    if (!this.isBrowser) return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('LocalStorage removeItem error:', error);
    }
  }

  /**
   * Clears all items from localStorage
   */
  clear(): void {
    if (!this.isBrowser) return;

    try {
      localStorage.clear();
    } catch (error) {
      console.error('LocalStorage clear error:', error);
    }
  }

  /**
   * Gets the number of items in localStorage
   */
  get length(): number {
    if (!this.isBrowser) return 0;
    return localStorage.length;
  }

  /**
   * Gets the key at a specific index
   * @param index The index to look up
   */
  key(index: number): string | null {
    if (!this.isBrowser) return null;
    return localStorage.key(index);
  }
}
