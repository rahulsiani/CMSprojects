import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SiderComponent } from './sider/sider.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SiderComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule,
    ReactiveFormsModule,    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SiderComponent    
]
})
export class NavbarModule { }
