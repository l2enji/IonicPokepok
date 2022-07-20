import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  findAllUsers(){
    return this.http.get("http://localhost:3082/user/list");
  }

  saveUser(user:User){
    return this.http.post("http://localhost:8085/user/add", user);
  }

  deleteUser(id:number){
    return this.http.delete("http://localhost:8085/user/delete"+id);
  }
}
