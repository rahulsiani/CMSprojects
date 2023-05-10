import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorInterceptor } from './interceptor/token-interceptor.interceptor';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarModule } from './menubar/navbar.module';
import {MaterialExampleModule} from 'src/material.module';




@NgModule({
  declarations: [
    AppComponent,    
    LayoutComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    NavbarModule,
    FontAwesomeModule,
    CoolSocialLoginButtonsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule   
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
