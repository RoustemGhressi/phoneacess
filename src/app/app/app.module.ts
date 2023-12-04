import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { AppMainComponent } from '../app-main/app-main.component';
import { ProductComponent } from '../product/product.component';





@NgModule({
  declarations: [
      AppComponent,
      AppHeaderComponent,
      AppMainComponent,
      AppFooterComponent,
      ProductComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
  
export class AppModule { }
