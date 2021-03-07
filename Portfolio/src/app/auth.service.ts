import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '' ;
  pass = '' ;

  constructor(public auth: AngularFireAuth) { }

  user = this.auth.authState.pipe ( map(authState => {
    console.log('authState: ', authState);
    if (authState){
      return authState;
    } else{
      return null;
    }
  }))

  loging(){
    
    this.auth.signInWithEmailAndPassword(this.email, this.pass)
    .then(user =>{
      alert('user logado');
    })
    .catch( error =>{
      alert('error a iniciar sesion') 
    })
  }

  createUser(){
    
    this.auth.createUserWithEmailAndPassword(this.email, this.pass)
    .then(user =>{
      alert('user creado');
    })
    .catch( error =>{
      alert('user no creado')
    })
  }

  logout(){
    this.auth.signOut();
  }
}
