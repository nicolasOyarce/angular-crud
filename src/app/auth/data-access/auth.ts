import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // AuthService for handling authentication operations
  private _auth = inject(Auth);

  signUp(user: User) {
    // Using createUserWithEmailAndPassword for email/password sign-up
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    );
  }

  signIn(user: User) {
    // Using signInWithEmailAndPassword for email/password sign-in
    return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }

  signInWithGoogle() {
    // Using GoogleAuthProvider for Google Sign-In
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account', // Prompt user to select an account
    });
    return signInWithPopup(this._auth, provider);
  }
}
