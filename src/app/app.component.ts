import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProductComponent } from './product/product.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AppFooterComponent,ProductComponent,AppMainComponent,AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phones';
}
