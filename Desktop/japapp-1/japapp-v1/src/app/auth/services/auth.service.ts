import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { registerLocaleData } from '@angular/common';
import { LoginRoutingModule } from '../login/login-routing.module';
import {auth} from 'firebase/app';
import {first} from 'rxjs/operators';

import {User} from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User;

  constructor(public afAuth: AngularFireAuth) {}

  async resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error);}
  }
  async login(email:string, password:string)
  {
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
        );
      return result;
    } catch (error) {
      console.log(error);
    }
    
  }

  async register(email:string, password:string){
    try{
        const result = await this.afAuth.createUserWithEmailAndPassword( 
          email,
          password
        );
        return result;
    } catch (error){console.log(error)

    }
  }

  async logout(){
    try{
    await this.afAuth.signOut();
    }catch(error) {
      console.log(error);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  
}
