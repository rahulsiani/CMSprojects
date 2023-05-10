import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ChangePassComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    CoolSocialLoginButtonsModule,    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),    
  ]
})
export class LoginModule { }
