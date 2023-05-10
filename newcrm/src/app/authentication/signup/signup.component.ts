import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  comfirmpass1: String = 'none';
  constructor(private UserdataService: UserdataService, private router: Router, private toaster: ToastrService) {

  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl("", [Validators.required,
      Validators.minLength(4), Validators.pattern("[a-zA-Z].*")]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)]),
      comfirmpass: new FormControl(''),
      // acceptTerms: new FormControl('', Validators.requiredTrue),
    })
  }

  signUp() {
    //console.log(this.signupForm.get("username"));
    let user = this.signupForm.value;
    if (this.password.value == this.comfirmpass.value) {
      console.log("submitted");
      this.comfirmpass1 = 'none'
    } else {
      this.comfirmpass1 = 'inline'
    }
    this.UserdataService.signUp(user).subscribe(res => {
      console.log(res);
      if (res.sucess = true) {
        this.toaster.success(" successfully Signup !!", " successfully Signup !!")
        this.router.navigateByUrl('authentication/login')
      }
      else {
        this.toaster.error(" Enter Vaild Info !!", " Enter Vaild Info !!")
      }
    });
  }

  get username(): FormControl {
    return this.signupForm.get("username") as FormControl;
  }
  get email(): FormControl {
    return this.signupForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.signupForm.get("password") as FormControl;
  }
  get comfirmpass(): FormControl {
    return this.signupForm.get("comfirmpass") as FormControl;
  }
  // get acceptTerms(): FormControl {
  //   return this.signupForm.get("acceptTerms") as FormControl;
  // }
}
