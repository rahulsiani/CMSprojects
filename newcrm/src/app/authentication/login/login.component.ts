import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  loginsucces: boolean = false
  public loginError:boolean=false
  a:any
  b:any
  constructor(private UserdataService : UserdataService, private router: Router,private toaster: ToastrService){
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl('/component/dashboard');
    }
  }

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      identifier: new FormControl(),
      password:new FormControl()
    })
  }

  login() {
    this.loginsucces = true
    let user = this.loginForm.value;
    this.UserdataService.login(user).subscribe(res =>{
      //console.log(res);      
      if(res.sucess =true) {
        this.toaster.success(" Successfully LoggedIn !!", " Successfully LoggedIn !!")
        localStorage.setItem('token', res?.jwt);
        //localStorage.setItem('Role', res?.role)
        this.router.navigateByUrl('/component/dashboard');
      }else {
        this.toaster.error(" Invalid Email or password !!", " Invalid Email or password !!")
      }
    });
  }
}
