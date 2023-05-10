import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit{
  // chgpasswordForm : FormGroup
  // constructor(private UserdataService : UserdataService){}

  ngOnInit(): void {
  //   this.chgpasswordForm = new FormGroup(
  //     {
  //       oldPassword: new FormControl(),
  //       newPassword : new FormControl()
  //     })
  // }
  // changePassword(){

  }

}
