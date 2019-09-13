import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string ='http://localhost:8080/api';
  private options:HttpParams = new HttpParams();
  private user:User;
  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get(this.baseUrl + '/users');
  }

  getUser(id:Number) {
    this.options = this.options.set('id', id.toString())
    return this._http.get(this.baseUrl+'/user', {params : this.options});
  }

  deleteUser(id:Number) {
    this.options = this.options.set('id', id.toString())
    return this._http.delete(this.baseUrl+'/user',{params : this.options});
  }

  createUser(user:User) {
    return this._http.post(this.baseUrl+'/user', JSON.stringify(user),{ 
      headers: {'Content-Type': 'application/json'} 
    });
  }

  updateUser(user:User) {
    return this._http.put(this.baseUrl+'/user', JSON.stringify(user),{ 
      headers: {'Content-Type': 'application/json'} 
    });
  }

  setter(user:User) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}

