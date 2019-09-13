import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private user:any;

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users) =>{
      console.log(users);
      this.user = users; 
    }, (error) =>{
      console.log(error);
    })
  }

  deleteUser(user) {
    this._userService.deleteUser(user.id).subscribe((data)=> {
      this.user.splice(this.user.indexOf(user), 1);
    }, (error) => {
      console.log(error);
    })
  }

  updateUser(user) {
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }
  
  newUser() {
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/op']); 
  }
}
