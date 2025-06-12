import { AfterViewInit, Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/components/ui/section-title/section-title.component";
import { TabsModule } from 'primeng/tabs';
import { TestPopularIremService } from './service/test-popular-irem.service';
import { Categories } from '../categories/model/categories';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { PopularItems } from '../popular-items/model/popular-items';

@Component({
  selector: 'app-test-popular-items',
  imports: [SectionTitleComponent,TabsModule, ItemProductComponent],
  templateUrl: './test-popular-items.component.html',
  styleUrl: './test-popular-items.component.css'
})
export class TestPopularItemsComponent implements AfterViewInit{
  categories:Categories []= [] ;
  activeTap:string = '0'
  productsItems :PopularItems[] = []
  constructor(private _testPopularItemService:TestPopularIremService) {

  }
  ngAfterViewInit(): void {
    this.getPopularItems(this.activeTap)
  }
    ngOnInit() {

        this.getCategories()


    }

    getCategories() {
      this._testPopularItemService.getCategories().subscribe({
        next:(res)=> {
          this.categories = res.categories;
          if (this.categories.length > 0) {
            this.activeTap = this.categories[0]._id;
            this.getPopularItems(this.activeTap);
          }

        },error:(err)=>{
          console.log(err);
        }
      })
    }
    getPopularItems(id:string)    {
      this.activeTap = id;
      this._testPopularItemService.getPopularItems(id).subscribe({
        next:(res)=> {
          this.productsItems = res.products;
        },error:(err)=>{
          console.log(err);
        }
      })
    }
}
