import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as Constants from '../../constants';
import { LoginService } from '../services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm:FormGroup;
  username:string[];
  password:string[];
  users:any;

  constructor(
    //private formBuilder:FormBuilder
    //private navCtrl : NavController,
    private userService:LoginService
    ) { 
    /* this.credentialsForm = this.formBuilder.group(
      this.username=['paul@mail.com'],
      this.password=['1234'],
    ) */
  }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(
      data =>{
        console.log(data);
        this.users=data;
        
      }
    )
  }

/*   onLogin(){
    Constants.client.authentication.getToken()
  } */

}
