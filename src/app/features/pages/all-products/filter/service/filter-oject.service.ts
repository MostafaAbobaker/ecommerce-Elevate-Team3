import { Injectable } from '@angular/core';
import { FilterObject } from '../interface/filterObject';
import { BehaviorSubject } from 'rxjs';
import { Categories } from '../../../homePage/categories/model/categories';
import { IOccasions } from '../../../../../shared/interfaces/IOccasions/ioccasions';

@Injectable({
  providedIn: 'root'
})
export class FilterOjectService {

  private readonly _filterObject = new BehaviorSubject<FilterObject>({
      searchTerm: '',
      category: [],
      occasions: [],
      products: [],
      ratings: [],
      price: {
        min: 0,
        max: 1000
      }
    });

    // Public observable to subscribe to
    filterObject$ = this._filterObject.asObservable();

    constructor() {}

    // Get current value
    get currentFilter(): FilterObject {
      return this._filterObject.value;
    }

    // Update search term
    addTextSearch(text: string): void {
      const updated: FilterObject = {
        ...this.currentFilter,
        searchTerm: text
      };
      this._filterObject.next(updated);
    }
    // Example: Add category
    addCategory(category: Categories): void {
      if(this.currentFilter.category) {
        const updated: FilterObject = {
          ...this.currentFilter,
          category: [...this.currentFilter.category, category]
        };
        this._filterObject.next(updated);

      }
    }
    // Example: remove Category
    removeCategory(category: Categories): void {
      if (this.currentFilter.category) {
        const updated: FilterObject = {
          ...this.currentFilter,
          category: this.currentFilter.category.filter(cat => cat._id !== category._id)
        };
        this._filterObject.next(updated);
      }
    }
    // Example: Add occasion
    addOccasion(occasion: IOccasions): void {
      if(this.currentFilter.occasions) {
        const updated: FilterObject = {
          ...this.currentFilter,
          occasions: [...this.currentFilter.occasions, occasion]
        };
        this._filterObject.next(updated);
      }
    }
    // Example: remove Category
    removeOccasion(occasion: IOccasions): void {
      if (this.currentFilter.occasions) {
        const updated: FilterObject = {
          ...this.currentFilter,
          occasions: this.currentFilter.occasions.filter(occ => occ._id !== occasion._id)
        };
        this._filterObject.next(updated);
      }
    }
    // Example: Add ratings
    addRating(rating: number): void {
      if(this.currentFilter.ratings) {
        const updated: FilterObject = {
          ...this.currentFilter,
          ratings: [...this.currentFilter.ratings, rating]
        };
        this._filterObject.next(updated);
      }
    }
    // Example: remove Category
    removeRating(rating: number): void {
      if (this.currentFilter.ratings) {
        const updated: FilterObject = {
          ...this.currentFilter,
          ratings: this.currentFilter.ratings.filter(item => item !== rating)
        };
        this._filterObject.next(updated);
      }
    }
    // Example: Add price
    addPrice(min: number, max: number): void {
      const updated: FilterObject = {
        ...this.currentFilter,
        price: {
          min: min,
          max: max
        }
      };
      this._filterObject.next(updated);
    }

    // Reset filter
    resetFilter(): void {
      this._filterObject.next({
        searchTerm: '',
        category: [],
        occasions: [],
        products: [],
        ratings: [],
        price: {
          min: 0,
          max: 1000
        }
      });
    }


}
