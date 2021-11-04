import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = ""
  constructor() { }

  createuserName(name:string){
    this.userName=name
    console.log("cambios a"+name)
  }
}
