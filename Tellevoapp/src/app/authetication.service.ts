import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(email:string,password:string,fullname:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword
    (email,password)
  }

  async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword
    (email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async signOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }

  async signInWithPhoneNumber(phoneNumber: string) {
    
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
    const verificationCode = window.prompt(phoneNumber + 'Enter the verification code');
    
    if (verificationCode) {
      const userCredential = await confirmationResult.confirm(verificationCode);
      // User is now signed in
      console.log(userCredential.user);
    }
  }
}
