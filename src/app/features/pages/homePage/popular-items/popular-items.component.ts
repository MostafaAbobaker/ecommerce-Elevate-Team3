import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/ui/section-title/section-title.component';
import { Categories } from '../categories/model/categories';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { CategoriesService } from '../categories/service/categories.service';
import { popularItemService } from './service/popular-item.service';
import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-popular-items',
  imports: [SectionTitleComponent, ItemProductComponent,ToastModule],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css',
  providers: [MessageService]

})
export class TestPopularItemsComponent implements AfterViewInit, OnDestroy {
  categories: Categories[] = [];
  activeTap: string = '0';
  productsItems: IItemProduct[] = [];
  private getAllCategoriesService!: Subscription;
  private getPopularItemsService!: Subscription;

  constructor(
    private _popularItemService: popularItemService,
    private _categoriesService: CategoriesService,
    private messageService: MessageService
  ) {}
  ngOnDestroy(): void {
    this.getAllCategoriesService.unsubscribe();
    this.getPopularItemsService.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.getPopularItems(this.activeTap);
  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.getAllCategoriesService = this._categoriesService
      .getAllCategories()
      .subscribe({
        next: (res) => {
          this.categories = res.categories;
          if (this.categories.length > 0) {
            this.activeTap = this.categories[0]._id;
            this.getPopularItems(this.activeTap);
          }
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

        },
      });
  }
  getPopularItems(id: string) {
    this.activeTap = id;
    this.getPopularItemsService = this._popularItemService
      .getPopularItems(id)
      .subscribe({
        next: (res) => {
          this.productsItems = res.products;
        },
        error: (err) => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

        },
      });
  }
}
